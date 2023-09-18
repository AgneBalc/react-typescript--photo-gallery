import { useRef, useCallback, useState } from "react";

const useInfiniteScroll = () => {
  const [pageNum, setPageNum] = useState(1);

  const observer = useRef<IntersectionObserver>();
  const lastPhotoRef = useCallback((node: HTMLDivElement) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNum((prev) => prev + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, []);

  return { pageNum, lastPhotoRef };
};

export default useInfiniteScroll;
