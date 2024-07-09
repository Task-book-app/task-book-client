import { useState, useEffect, useRef } from "react";

const useResizeObserver = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const ref = useRef();

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width, height } = entries[0].contentRect;
        if (width >= 944) {
          setDimensions({ width, height });
        }
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return [ref, dimensions];
};

export default useResizeObserver;
