'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './styles.module.scss';

const SEGMENTS = [
  { label: 'Годовой абонемент' },
  { label: 'Скидка 10% на ДР' },
  { label: 'Бесплатный аквагрим', isWinning: true },
  { label: 'Premium пакет -50%' },
  { label: 'AI-приглашение' },
];

const ANGLE_PER_SEGMENT = 360 / SEGMENTS.length;
const WINNING_INDEX = SEGMENTS.findIndex(s => s.isWinning);

const formatPhone = (value) => {
  let digits = value.replace(/\D/g, '');
  if (digits.length > 11) digits = digits.slice(0, 11);
  if (digits.length === 0) return '+7';
  let result = '+7';
  let rest = digits;
  if (rest[0] === '7') rest = rest.slice(1);
  if (rest.length > 0) result += ' ' + rest.slice(0, 3);
  if (rest.length > 3) result += ' ' + rest.slice(3, 6);
  if (rest.length > 6) result += ' ' + rest.slice(6, 8);
  if (rest.length > 8) result += ' ' + rest.slice(8, 10);
  return result.trim();
};

function drawMultilineText(ctx, text, maxWidth, lineHeight) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';
  for (let i = 0; i < words.length; i++) {
    const testLine = currentLine + (currentLine ? ' ' : '') + words[i];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = words[i];
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines.slice(0, 2);
}

function WheelModal({ onClose, onWin }) {
  const canvasRef = useRef(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [phone, setPhone] = useState('+7');
  const [phoneError, setPhoneError] = useState('');
  const [hasSpun, setHasSpun] = useState(false);
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const colors = {
    purple: '#8624B4',
    lumi: '#DBFF00',
    white: '#FFFFFF',
    black: '#1D1D1B',
    grayLight: '#F5F5F5',
    segmentEven: '#EADDFF',
    segmentOdd: '#D8C0FF',
  };

  const drawWheel = useCallback((rotationAngle = 0) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const radius = w * 0.46;

    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < SEGMENTS.length; i++) {
      const start = rotationAngle + i * ANGLE_PER_SEGMENT;
      const end = start + ANGLE_PER_SEGMENT;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, (start * Math.PI) / 180, (end * Math.PI) / 180);
      ctx.closePath();

      ctx.fillStyle = i === WINNING_INDEX ? colors.lumi : (i % 2 === 0 ? colors.segmentEven : colors.segmentOdd);
      ctx.fill();
      ctx.strokeStyle = colors.white;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + radius * Math.cos((start * Math.PI) / 180), cy + radius * Math.sin((start * Math.PI) / 180));
      ctx.stroke();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(((start + ANGLE_PER_SEGMENT / 2) * Math.PI) / 180);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = i === WINNING_INDEX
        ? `bold 20px 'TT Travels Next', 'Inter', sans-serif`
        : `500 19px 'TT Travels Next', 'Inter', sans-serif`;
      ctx.fillStyle = i === WINNING_INDEX ? colors.black : colors.black;
      const maxTextWidth = radius * 0.55;
      const lines = drawMultilineText(ctx, SEGMENTS[i].label, maxTextWidth, 12);
      let yOffset = -(lines.length - 1) * 7;
      for (const line of lines) {
        ctx.fillText(line, radius * 0.6, yOffset);
        yOffset += 20;
      }
      ctx.restore();
    }

    const arrowY = cy - radius - 8;
    ctx.beginPath();
    ctx.moveTo(cx - 10, arrowY);
    ctx.lineTo(cx, arrowY + 22);
    ctx.lineTo(cx + 10, arrowY);
    ctx.fillStyle = colors.purple;
    ctx.fill();
  }, [colors]);

  useEffect(() => {
    drawWheel(currentRotation);
  }, [drawWheel, currentRotation]);

  const handlePhoneChange = (e) => {
    setPhone(formatPhone(e.target.value));
  };

  const spinWheel = () => {
    const rawDigits = phone.replace(/\D/g, '');
    if (rawDigits.length !== 11) {
      setPhoneError('Введите 11 цифр после +7');
      return;
    }
    if (!privacyAccepted) {
      setPhoneError('Необходимо согласие с политикой конфиденциальности');
      return;
    }
    setPhoneError('');
    if (isSpinning || hasSpun) return;

    setIsSpinning(true);
    setResult(null);

    const startRotation = currentRotation;
    const fullTurns = 6 + Math.floor(Math.random() * 4);
    const targetSegmentMid = WINNING_INDEX * ANGLE_PER_SEGMENT + ANGLE_PER_SEGMENT / 2;
    let neededRotation = (270 - targetSegmentMid + 360) % 360;
    const randomOffset = (Math.random() - 0.5) * (ANGLE_PER_SEGMENT * 0.6);
    neededRotation = (neededRotation + randomOffset + 360) % 360;

    const endRotation = fullTurns * 360 + neededRotation;
    const delta = endRotation - startRotation;
    const startTime = performance.now();
    const duration = 2000;

    const animate = (now) => {
      const elapsed = now - startTime;
      let progress = Math.min(1, elapsed / duration);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = startRotation + delta * easeOut;
      drawWheel(current % 360);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        const finalAngle = neededRotation;
        drawWheel(finalAngle);
        setCurrentRotation(finalAngle);
        setIsSpinning(false);
        setHasSpun(true);
        const prize = SEGMENTS[WINNING_INDEX].label;
        setResult(prize);
        onWin(prize, phone);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        <h2 className={styles.title}>Колесо фортуны</h2>
        <p className={styles.subtitle}>Крутите и получите гарантированный бонус</p>
        <canvas ref={canvasRef} width={500} height={500} className={styles.canvas} />
        <div className={styles.form}>
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            disabled={isSpinning || hasSpun}
            className={phoneError ? styles.errorInput : ''}
            placeholder="+7 000 000 00 00"
          />
          {phoneError && <div className={styles.errorText}>{phoneError}</div>}
          <div className={styles.privacyRow}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                disabled={isSpinning || hasSpun}
              />
              <span>
                Я принимаю условия{' '}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.privacyLink}
                >
                  политики конфиденциальности
                </a>
              </span>
            </label>
          </div>
          <button onClick={spinWheel} disabled={isSpinning || hasSpun || !privacyAccepted} className={styles.spinBtn}>
            {isSpinning ? 'Вращение...' : hasSpun ? 'Участвовали' : 'Вращать'}
          </button>
        </div>
        <p className={styles.note}>*Приз действует при приобретении пакета на празднование дня рождения</p>
        {result && <div className={styles.result}>Вы выиграли: {result}</div>}
      </div>
    </div>
  );
}

export default function WheelOfFortune() {
  const [showWheel, setShowWheel] = useState(false);
  const [wheelUsed, setWheelUsed] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    async function checkAvailability() {
      try {
        const res = await fetch('/api/wheel/check');
        if (!res.ok) throw new Error('Ошибка проверки');
        const { allowed } = await res.json();
        if (allowed && !wheelUsed) {
          const timer = setTimeout(() => setShowWheel(true), 8000);
          return () => clearTimeout(timer);
        }
      } catch (err) {
        console.error('Ошибка проверки IP:', err);
      } finally {
        setChecked(true);
      }
    }
    checkAvailability();
  }, [wheelUsed]);

  const handleWin = async (prize, phone) => {
    try {
      // 1. Отправляем заявку
      const response = await fetch('/api/submit-wheel/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, prize }),
      });
      // Безопасный парсинг JSON (защита от пустого ответа)
      let data = {};
      const text = await response.text();
      if (text) {
        try {
          data = JSON.parse(text);
        } catch (e) {
          console.warn('Ответ не JSON:', text);
        }
      }
      if (!response.ok) {
        console.error('Ошибка отправки заявки:', data.error || response.statusText);
      } else {
        console.log('Заявка отправлена');
      }
    } catch (err) {
      console.error('Ошибка при отправке заявки:', err);
    }

    // 2. Регистрируем вращение (24h блокировка)
    try {
      await fetch('/api/wheel/register', { method: 'POST' });
    } catch (err) {
      console.error('Ошибка регистрации вращения:', err);
    }

    setWheelUsed(true);
    setShowWheel(false);
  };

  const handleClose = () => {
    setWheelUsed(true);
    setShowWheel(false);
  };

  // Пока не проверили IP – ничего не рендерим
  if (!checked) return null;
  return <>{showWheel && <WheelModal onClose={handleClose} onWin={handleWin} />}</>;
}