"use client";

import { useEffect, useState } from "react";

export function useLocalTime(locale = "tr-TR", fallback = "16:32") {
  const [timeString, setTimeString] = useState<string>(fallback);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString(locale, {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [locale]);

  return timeString;
}
