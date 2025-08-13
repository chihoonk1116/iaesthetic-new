import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function AnimatedNumber({ from = 0, to, duration = 2, decimals = 0 }) {
  const controls = useAnimation();
  const [count, setCount] = useState(from);

  useEffect(() => {
    controls.start({
      count: to,
      transition: { duration, ease: "easeOut" }
    });
  }, [to]);

  return (
    <motion.span
      animate={controls}
      initial={{ count: from }}
      onUpdate={latest => {
        if (latest.count !== undefined) {
          setCount(Math.floor(latest.count).toFixed(decimals));
        }
      }}
    >
      {count}
    </motion.span>
  );
}