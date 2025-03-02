import React, { useEffect, useState } from 'react'

const TimeCounter = ({ startDate }) => {
    const calculateTime = () => {
        const now = new Date();
        const past = new Date(startDate);
        const diffInSeconds = Math.floor((now - past) / 1000);

        const days = Math.floor(diffInSeconds / (60 * 60 * 24));
        const hours = Math.floor((diffInSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
        const seconds = diffInSeconds % 60;

        return { days, hours, minutes, seconds };
    }

    const [timeElapsed, setTimeElapsed] = useState(calculateTime());

    useEffect(() => {
        const interval = setInterval(() => {
          setTimeElapsed(calculateTime());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

    const timeBlocks = [
        { value: timeElapsed.days, label: 'Dias' },
        { value: timeElapsed.hours, label: 'Horas' },
        { value: timeElapsed.minutes, label: 'Minutos' },
        { value: timeElapsed.seconds, label: 'Segundos' }
      ];
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8 max-w-md mx-auto">
          {timeBlocks.map((block, index) => (
            <div 
              key={index} 
              className="counter-card flex flex-col items-center justify-center"
            >
              <span className="text-3xl md:text-4xl font-bold text-love-primary">{block.value}</span>
              <span className="text-xs md:text-sm text-love-text font-medium">{block.label}</span>
            </div>
          ))}
        </div>
      );
}

export default TimeCounter