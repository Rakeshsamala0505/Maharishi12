import { useEffect, useRef, useState } from "react";

const useAnimateOnView = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // safer than disconnect
        }
      },
      {
        threshold: 0.15,                // 🔥 LOWER threshold for mobile
        rootMargin: "0px 0px -10% 0px", // 🔥 mobile-safe margin
      }
    );

    const node = ref.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return { ref, visible };
};

export default useAnimateOnView;
