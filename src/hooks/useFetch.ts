import { useEffect, useState } from "react";
import { Photo, PhotoData } from "../types/types";
import { getImagesPage } from "../api/api-call";

const useFetch = (pageNum: number, query: string | null) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getImagesPage(pageNum, query)
      .then((data) => {
        const transformedPhotosData = data.photos.map(
          (photoData: PhotoData): Photo => {
            return {
              id: photoData.id,
              title: photoData.alt ? photoData.alt : "No Title Available",
              alt: photoData.alt
                ? photoData.alt
                : "No Alt Description Available",
              photographer: photoData.photographer,
              url: photoData.src.large,
              placeholder: photoData.src.small,
            };
          }
        );

        setPhotos((prev) => [...prev, ...transformedPhotosData]);
        setHasNextPage(Boolean(data.photos.length));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError({ message: err.message });
      });
  }, [pageNum, query]);
  return { isLoading, error, photos, hasNextPage, setPhotos };
};

export default useFetch;
