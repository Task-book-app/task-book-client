import { useState, useEffect } from "react";
import { useFela } from "react-fela";
import { useInView } from "react-intersection-observer";

const LazyImage = ({
  placeholderSrc,
  mobileSrcSet,
  tabletSrcSet,
  desktopSrcSet,
  mobilePlaceholder,
  tabletPlaceholder,
  desktopPlaceholder,
  alt,
  className,
}) => {
  const { css } = useFela();
  const rules = () => ({
    maxWidth: "100%",
    height: "auto",
    display: "block",
    margin: "0 auto",
  });

  const [src, setSrc] = useState(placeholderSrc);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  console.log(inView);
  useEffect(() => {
    if (inView) {
      const img = new Image();
      img.src = desktopSrcSet; // Load the largest image by default
      img.onload = () => {
        setSrc(desktopSrcSet);
      };
    }
  }, [inView, desktopSrcSet]);
  return (
    <img
      ref={ref}
      src={src}
      srcSet={`${mobilePlaceholder} 600w, ${tabletPlaceholder} 900w, ${desktopPlaceholder} 1200w`}
      sizes="(max-width: 600px) 600px, (max-width: 900px) 900px, 1200px"
      data-srcset={`${mobileSrcSet} 600w, ${tabletSrcSet} 900w, ${desktopSrcSet} 1200w`}
      alt={alt}
      className={css(rules)}
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default LazyImage;
