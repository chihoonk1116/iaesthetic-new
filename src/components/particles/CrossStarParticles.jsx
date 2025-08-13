import React, { useMemo } from "react";
import './crossStarParticles.scss'

export default function CrossStarParticles({
  count = 60,
  minSize = 5,
  maxSize = 16,
  blinkProbability = 0.5, // 별 중 몇 %가 깜빡일지
  zIndex = -1,
}) {
  const stars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const size = Math.floor(minSize + Math.random() * (maxSize - minSize));
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const blink = Math.random() < blinkProbability;
      const delay = Math.random() * 5;
      const blinkDuration = 1 + Math.random() * 10;
      const floatDuration = 5 + Math.random() * 5; // 움직임 속도
      arr.push({
        size,
        left,
        top,
        blink,
        delay,
        blinkDuration,
        floatDuration,
      });
    }
    return arr;
  }, [count, minSize, maxSize, blinkProbability]);

  return (
    <div
      aria-hidden
      className="particles-container"
      style={{  }}
    >
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
          100% { transform: translate(0, 0); }
        }
        .star {
          position: absolute;
          background: transparent;
        }
        /* 가로+세로 */
        .star::before,
        .star::after {
          content: "";
          position: absolute;
          background: #FFF;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .star::before {
          width: 100%;
          height: 2px;
        }
        .star::after {
          width: 2px;
          height: 100%;
        }
        /* 대각선 추가 */
        .star .diag1,
        .star .diag2 {
          position: absolute;
          background: #FFF;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          transform-origin: center;
        }
        .star .diag2 {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      `}</style>

      {stars.map((s, idx) => (
        <div
          key={idx}
          className="star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animation: `
              ${s.blink ? `blink ${s.blinkDuration}s ease-in-out ${s.delay}s infinite,` : ""}
              float ${s.floatDuration}s ease-in-out ${s.delay}s infinite
            `,
            opacity: 0.9,
          }}
        >
          {/* 대각선 막대 2개 */}
          <div
            className="diag1"
            style={{ width: s.size, height: 2 }}
          />
          <div
            className="diag2"
            style={{ width: s.size, height: 2 }}
          />
        </div>
      ))}
    </div>
  );
}
