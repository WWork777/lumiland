// WheelOfFortune.jsx
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
    const radius = w * 0.42;

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
        ? `bold 12px 'TT Travels Next', 'Inter', sans-serif`
        : `500 11px 'TT Travels Next', 'Inter', sans-serif`;
      ctx.fillStyle = i === WINNING_INDEX ? colors.black : colors.black;
      const maxTextWidth = radius * 0.5;
      const lines = drawMultilineText(ctx, SEGMENTS[i].label, maxTextWidth, 12);
      let yOffset = -(lines.length - 1) * 6;
      for (const line of lines) {
        ctx.fillText(line, radius * 0.65, yOffset);
        yOffset += 12;
      }
      ctx.restore();
    }

    // простая стрелка
    const arrowY = cy - radius - 8;
    ctx.beginPath();
    ctx.moveTo(cx - 10, arrowY);
    ctx.lineTo(cx, arrowY + 22);
    ctx.lineTo(cx + 10, arrowY);
    ctx.fillStyle = colors.purple;
    ctx.fill();
  }, [colors]);

  useEffect(() => {
    drawWheel(0);
  }, [drawWheel]);

  const handlePhoneChange = (e) => {
    setPhone(formatPhone(e.target.value));
  };

  const spinWheel = () => {
    const rawDigits = phone.replace(/\D/g, '');
    if (rawDigits.length !== 11) {
      setPhoneError('Введите 11 цифр после +7');
      return;
    }
    setPhoneError('');
    if (isSpinning || hasSpun) return;

    setIsSpinning(true);
    setResult(null);
    let startRotation = 0;
    const spinAngle = 360 * 6;
    const startTime = performance.now();
    const duration = 1800;

    const animate = (now) => {
      const elapsed = now - startTime;
      let progress = Math.min(1, elapsed / duration);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const rotation = startRotation + spinAngle * easeOut;
      drawWheel(rotation % 360);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        const finalRotation = (startRotation + spinAngle) % 360;
        const targetMidAngle = WINNING_INDEX * ANGLE_PER_SEGMENT + ANGLE_PER_SEGMENT / 2;
        let neededRotation = (270 - targetMidAngle + 360) % 360;
        let delta = neededRotation - finalRotation;
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;

        let fixStart = finalRotation;
        const fixTime = performance.now();
        const fixDuration = 300;
        const fixAnimate = (nowFix) => {
          const fixElapsed = nowFix - fixTime;
          let fixProgress = Math.min(1, fixElapsed / fixDuration);
          const ease = 1 - Math.pow(1 - fixProgress, 2);
          const newAngle = (fixStart + delta * ease + 360) % 360;
          drawWheel(newAngle);
          if (fixProgress < 1) {
            requestAnimationFrame(fixAnimate);
          } else {
            drawWheel(neededRotation);
            setIsSpinning(false);
            setHasSpun(true);
            const prize = SEGMENTS[WINNING_INDEX].label;
            setResult(prize);
            onWin(prize, phone);
          }
        };
        requestAnimationFrame(fixAnimate);
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
        <canvas ref={canvasRef} width={400} height={400} className={styles.canvas} />
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
          <button onClick={spinWheel} disabled={isSpinning || hasSpun} className={styles.spinBtn}>
            {isSpinning ? 'Вращение...' : hasSpun ? 'Участвовали' : 'Вращать'}
          </button>
        </div>
        <p className={styles.note}>*Приз действует при покупке пакета «День рождения»</p>
        {result && (
          <div className={styles.result}>
            Вы выиграли: {result}
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
    }, 8000);
    return () => clearTimeout(timer);
  }, [wheelUsed]);

  const handleWin = (prize, phone) => {
    console.log(`LumiLand: ${phone} выиграл ${prize}`);
    setWheelUsed(true);
  };

  const handleClose = () => {
    setWheelUsed(true);
    setShowWheel(false);
  };

  return <>{showWheel && <WheelModal onClose={handleClose} onWin={handleWin} />}</>;
}