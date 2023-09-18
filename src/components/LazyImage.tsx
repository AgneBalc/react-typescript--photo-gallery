import { useRef, useEffect } from "react";
import { Image } from "../styles/PhotoCard.styles";

interface LazyImageProps {
  src: string;
  alt: string;
  placeholder: string;
}

const LazyImage = ({ src, alt, placeholder }: LazyImageProps) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && imageRef.current) {
        imageRef.current.src = src;
        observer.unobserve(imageRef.current);
      }
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [src]);

  return <Image ref={imageRef} src={placeholder} alt={alt} />;
};

export default LazyImage;
