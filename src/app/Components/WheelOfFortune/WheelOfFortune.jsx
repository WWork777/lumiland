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

const validatePhone = (phone) => {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 10 || digits.length === 11;
};

function WheelModal({ onClose, onWin }) {
  const canvasRef = useRef(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [hasSpun, setHasSpun] = useState(false);
  const [result, setResult] = useState(null);

  const drawWheel = useCallback((rotationAngle = 0) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    const cx = w / 2, cy = h / 2;
    const radius = w * 0.5;
    const innerRadius = radius * 0.30;

    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < SEGMENTS.length; i++) {
      const start = rotationAngle + i * ANGLE_PER_SEGMENT;
      const end = start + ANGLE_PER_SEGMENT;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, (start * Math.PI) / 180, (end * Math.PI) / 180);
      
      // Градиент для выигрышного сегмента
      if (i === WINNING_INDEX) {
        const grad = ctx.createLinearGradient(cx - radius, cy - radius, cx + radius, cy + radius);
        grad.addColorStop(0, '#F7B42C');
        grad.addColorStop(1, '#FCFF6C');
        ctx.fillStyle = grad;
      } else {
        ctx.fillStyle = i % 2 === 0 ? '#FFE5B4' : '#FFD699';
      }
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Рисуем разделительные линии
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + radius * Math.cos((start * Math.PI) / 180), cy + radius * Math.sin((start * Math.PI) / 180));
      ctx.stroke();

      // Текст сегмента
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(((start + ANGLE_PER_SEGMENT / 2) * Math.PI) / 180);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = i === WINNING_INDEX ? 'bold 14px "Segoe UI", "Comic Neue", sans-serif' : '12px "Segoe UI", sans-serif';
      ctx.fillStyle = '#3B2A1F';
      ctx.shadowBlur = 0;
      let text = SEGMENTS[i].label;
      if (text.length > 22) text = text.slice(0, 18) + '…';
      ctx.fillText(text, radius * 0.6, 6);
      ctx.restore();
    }

    // Внутренний круг (центр колеса)
    // ctx.beginPath();
    // ctx.arc(cx, cy, innerRadius, 0, 2 * Math.PI);
    // ctx.fillStyle = '#FFF2DF';
    // ctx.fill();
    // ctx.strokeStyle = '#FFB347';
    // ctx.lineWidth = 3;
    // ctx.stroke();
    // ctx.font = '24px sans-serif';
    // ctx.fillStyle = '#FF8C42';
    // ctx.shadowBlur = 4;
    // ctx.shadowColor = 'rgba(0,0,0,0.2)';
    // ctx.fillText('🎡', cx - 12, cy + 9);
    // ctx.shadowBlur = 0;

    // Стрелка (неподвижная, сверху)
    ctx.beginPath();
    ctx.moveTo(cx - 10, cy - radius - 10);
    ctx.lineTo(cx, cy - radius + 30);
    ctx.lineTo(cx + 10, cy - radius - 10);
    ctx.fillStyle = '#9117ba';
    ctx.fill();
  }, []);

  useEffect(() => {
    drawWheel(0);
  }, [drawWheel]);

  const spinWheel = () => {
    if (!validatePhone(phone)) {
      setPhoneError('Введите корректный номер телефона (10 или 11 цифр)');
      return;
    }
    setPhoneError('');
    if (isSpinning || hasSpun) return;

    // setIsSpinning(true);
    setResult(null); // скрываем предыдущий результат
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
        let neededRotation = (360 - targetMidAngle + 90) % 360;
        let delta = (neededRotation - finalRotation + 360) % 360;
        if (delta > 180) delta -= 360;

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
        <h2>🎡 Колесо фортуны</h2>
        <p className={styles.subtitle}>Крути колесо, чтобы получить гарантированный бонус к мероприятию!</p>
        <canvas ref={canvasRef} width={450} height={450} className={styles.canvas} />
        <div className={styles.form}>
          <input
            type="tel"
            placeholder="+7 (999) 123-45-67"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={isSpinning || hasSpun}
            className={phoneError ? styles.errorInput : ''}
          />
          {phoneError && <div className={styles.errorText}>{phoneError}</div>}
          <button onClick={spinWheel} disabled={isSpinning || hasSpun}>
            {isSpinning ? 'Крутится...' : hasSpun ? 'Вы уже крутили' : 'Крутить колесо 🎲'}
          </button>
        </div>
        <p className={styles.note}>*Призом можно воспользоваться только при покупке пакета дня рождения</p>
        {result && (
          <div className={styles.result}>
            🎉 Ваш выигрыш: <strong>{result}</strong> 🎉
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
    }, 1000);
    return () => clearTimeout(timer);
  }, [wheelUsed]);

  const handleWin = (prize, phone) => {
    console.log(`Пользователь ${phone} выиграл: ${prize}`);
    setWheelUsed(true);
    // setShowWheel(false);
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