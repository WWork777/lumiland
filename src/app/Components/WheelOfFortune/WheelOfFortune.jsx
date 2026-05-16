'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './styles.module.scss';

const SEGMENTS = [
  { label: 'Годовой безлимитный абонемент в парк!', color: '#FFD966' },
  { label: 'Скидка 10% на празднование дня рождения', color: '#FFE5B4' },
  { label: 'Бесплатный аквагрим к текущему заказу!', isWinning: true, color: '#FFD966' },
  { label: '50% скидка на пакет Premium!', color: '#FFE5B4' },
  { label: 'Приглашения с ИИ-генерацией образа вашего ребёнка', color: '#FFD966' },
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

const validatePhone = (phone) => {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 11;
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
  const finalLines = lines.slice(0, 2);
  if (lines.length > 2) finalLines[1] = finalLines[1] + '…';
  return finalLines;
}

function WheelModal({ onClose, onWin }) {
  const canvasRef = useRef(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [phone, setPhone] = useState('+7');
  const [phoneError, setPhoneError] = useState('');
  const [hasSpun, setHasSpun] = useState(false);
  const [result, setResult] = useState(null);

  const colors = {
    purple: '#9117ba',
    yellow: '#dcff00',
    darkPurple: '#4a2b6a',
    lightPurple: '#f1e6f5',
    white: '#ffffff',
    segmentEven: '#FFE5B4',   // можно заменить на более нежный
    segmentOdd: '#FFD699',
    winningGradStart: '#dcff00',
    winningGradEnd: '#b3d900',
  };

  const drawWheel = useCallback((rotationAngle = 0) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    const cx = w / 2, cy = h / 2;
    const radius = w * 0.45;

    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < SEGMENTS.length; i++) {
      const start = rotationAngle + i * ANGLE_PER_SEGMENT;
      const end = start + ANGLE_PER_SEGMENT;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, (start * Math.PI) / 180, (end * Math.PI) / 180);

      if (i === WINNING_INDEX) {
        // Выигрышный сектор – градиент жёлтого
        const grad = ctx.createLinearGradient(cx - radius, cy - radius, cx + radius, cy + radius);
        grad.addColorStop(0, colors.winningGradStart);
        grad.addColorStop(1, colors.winningGradEnd);
        ctx.fillStyle = grad;
      } else {
        ctx.fillStyle = i % 2 === 0 ? colors.segmentEven : colors.segmentOdd;
      }
      ctx.fill();
      ctx.strokeStyle = colors.white;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Разделительная линия
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + radius * Math.cos((start * Math.PI) / 180), cy + radius * Math.sin((start * Math.PI) / 180));
      ctx.stroke();

      // Текст приза (с переносом и фирменным шрифтом)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(((start + ANGLE_PER_SEGMENT / 2) * Math.PI) / 180);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      // Используем шрифты сайта с запасными
      const fontFamily = "'TT 700', 'TT Bold', 'Segoe UI', 'Comic Neue', sans-serif";
      ctx.font = i === WINNING_INDEX 
        ? `bold 13px ${fontFamily}` 
        : `500 12px ${fontFamily}`;
      ctx.fillStyle = colors.darkPurple;
      ctx.shadowBlur = 0;
      const maxTextWidth = radius * 0.5;
      const lines = drawMultilineText(ctx, SEGMENTS[i].label, maxTextWidth, 14);
      let yOffset = -(lines.length - 1) * 7;
      for (let line of lines) {
        ctx.fillText(line, radius * 0.62, yOffset);
        yOffset += 14;
      }
      ctx.restore();
    }
        // Добавим небольшой декоративный ободок вокруг колеса
    ctx.beginPath();
    ctx.arc(cx, cy, radius + 3, 0, 2 * Math.PI);
    ctx.strokeStyle = colors.winningGradEnd;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Стрелка в стиле Lumiland (фиолетовая с жёлтым бликом)
    const arrowY = cy - radius - 12;
    ctx.beginPath();
    ctx.moveTo(cx - 12, arrowY);
    ctx.lineTo(cx, arrowY + 28);
    ctx.lineTo(cx + 12, arrowY);
    ctx.fillStyle = colors.purple;
    ctx.shadowBlur = 5;
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.fill();
    // Блик стрелки
    ctx.beginPath();
    ctx.moveTo(cx - 5, arrowY + 6);
    ctx.lineTo(cx, arrowY + 18);
    ctx.lineTo(cx + 5, arrowY + 6);
    ctx.fillStyle = colors.yellow;
    ctx.fill();
    ctx.shadowBlur = 0;

  }, []);

  useEffect(() => {
    drawWheel(0);
  }, [drawWheel]);

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    if (!value.trim()) {
      setPhone('+7');
      return;
    }
    let digits = value.replace(/\D/g, '');
    if (digits.length === 0) {
      setPhone('+7');
      return;
    }
    if (digits[0] !== '7') digits = '7' + digits;
    if (digits.length > 11) digits = digits.slice(0, 11);
    let formatted = '+7';
    let rest = digits.slice(1);
    if (rest.length > 0) formatted += ' ' + rest.slice(0, 3);
    if (rest.length > 3) formatted += ' ' + rest.slice(3, 6);
    if (rest.length > 6) formatted += ' ' + rest.slice(6, 8);
    if (rest.length > 8) formatted += ' ' + rest.slice(8, 10);
    setPhone(formatted.trim());
  };

  const spinWheel = () => {
  const rawDigits = phone.replace(/\D/g, '');
  if (rawDigits.length !== 11) {
    setPhoneError('Введите номер в формате +7 XXX XXX XX XX (11 цифр)');
    return;
  }
  setPhoneError('');
  if (isSpinning || hasSpun) return;

  setIsSpinning(true);
  setResult(null);
  let currentRotation = 0;
  const spinAngle = 360 * 8;
  const startTime = performance.now();
  const duration = 2000;

  const animate = (now) => {
    const elapsed = now - startTime;
    let progress = Math.min(1, elapsed / duration);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const rotation = currentRotation + spinAngle * easeOut;
    drawWheel(rotation % 360);
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      const finalRotation = (currentRotation + spinAngle) % 360;
      const targetMidAngle = WINNING_INDEX * ANGLE_PER_SEGMENT + ANGLE_PER_SEGMENT / 2;
      let neededRotation = (270 - targetMidAngle + 360) % 360;
      let delta = neededRotation - finalRotation;
      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;

      let startFix = finalRotation;
      const fixStart = performance.now();
      const fixDuration = 400;
      const fixAnimate = (nowFix) => {
        const fixElapsed = nowFix - fixStart;
        let fixProgress = Math.min(1, fixElapsed / fixDuration);
        const ease = 1 - Math.pow(1 - fixProgress, 2);
        const newAngle = (startFix + delta * ease + 360) % 360;
        drawWheel(newAngle);
        if (fixProgress < 1) {
          requestAnimationFrame(fixAnimate);
        } else {
          drawWheel(neededRotation);
          setIsSpinning(false);
          setHasSpun(true);
          const prize = SEGMENTS[WINNING_INDEX].label;
          setResult(prize);
          if (onWin) onWin(prize, phone);
        }
      };
      requestAnimationFrame(fixAnimate);
    }
  };
  requestAnimationFrame(animate);
};

  return (
    <div className={styles.wheelModal}>
      <div className={styles.wheelContainer}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        <h2>Колесо фортуны</h2>
        <p className={styles.subtitle}>Крути колесо, чтобы получить гарантированный бонус к мероприятию!</p>
        <canvas ref={canvasRef} width={450} height={450} className={styles.canvas} />
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
          <button onClick={spinWheel} disabled={isSpinning || hasSpun}>
            {isSpinning ? 'Крутится...' : hasSpun ? 'Вы уже крутили' : 'Крутить колесо 🎲'}
          </button>
        </div>
        <p className={styles.note}>*Призом можно воспользоваться только при покупке пакета дня рождения</p>
        {result && (
          <div className={styles.result}>
            Ваш выигрыш: <strong>{result}</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default function WheelOfFortune() {
  const [showWheel, setShowWheel] = useState(false);
  const [wheelUsed, setWheelUsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!wheelUsed) setShowWheel(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [wheelUsed]);

  const handleWin = (prize, phone) => {
    console.log(`Пользователь ${phone} выиграл: ${prize}`);
    setWheelUsed(true);
  };

  const handleClose = () => {
    setWheelUsed(true);
    setShowWheel(false);
  };

  return (
    <div className={styles.container}>
      {showWheel && <WheelModal onClose={handleClose} onWin={handleWin} />}
    </div>
  );
}