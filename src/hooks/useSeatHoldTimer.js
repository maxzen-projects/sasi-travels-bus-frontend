import { useEffect, useRef, useState } from "react";

export default function useSeatHoldTimer({ durationMs, isActive, onExpire }) {
  const [remainingMs, setRemainingMs] = useState(durationMs);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isActive) {
      setRemainingMs(durationMs);
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    const start = Date.now();
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const left = Math.max(durationMs - elapsed, 0);
      setRemainingMs(left);

      if (left === 0) {
        clearInterval(intervalRef.current);
        onExpire?.();
      }
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isActive, durationMs, onExpire]);

  const minutes = String(Math.floor(remainingMs / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((remainingMs % 60000) / 1000)).padStart(2, "0");

  return { remainingMs, minutes, seconds };
}
