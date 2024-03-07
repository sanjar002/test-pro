import React, { useState, useEffect } from 'react';

import "./index.css"

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      let targetDay = 0; 
      const targetHour = 16; 

      if (now.getDay() === targetDay && now.getHours() >= targetHour) {
        targetDay += 7;
      }

      const targetDate = new Date(now);
      targetDate.setDate(now.getDate() + (targetDay + 7 - now.getDay()) % 7);
      targetDate.setHours(targetHour, 0, 0, 0);

      const difference = targetDate.getTime() - now.getTime();
      setTimeLeft(difference / 1000);
    };

    calculateTimeLeft(); // Вызываем сразу, чтобы показать текущее время

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / (24 * 3600));
    const hours = Math.floor((time % (24 * 3600)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${days} күн, ${hours} саат, ${minutes} мүнөт, ${seconds} секунд`;
  };

  return (
    <div>
      <p className='taimer'>{formatTime(timeLeft)}</p>
    </div>
  );
};

export default CountdownTimer;