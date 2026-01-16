import { useEffect, useRef, useState } from "react";

const useAnimateOnView = (threshold = 0.3) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40% 0px", // 🔥 CRITICAL FIX
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
};

export default useAnimateOnView;
