import PhotoCard from "./PhotoCard";
import PhotosContainer from "../styles/PhotosList.styles";
import { Photo } from "../types/types";

interface PhotosListProps {
  photos: Photo[];
  hasNextPage: boolean;
  lastPhotoRef: (node: HTMLDivElement) => void;
}

const PhotosList = ({ photos, hasNextPage, lastPhotoRef }: PhotosListProps) => {
  return (
    <PhotosContainer>
      {photos.map((photo, index) => (
        <PhotoCard
          ref={
            photos.length === index + 1 && hasNextPage
              ? lastPhotoRef
              : undefined
          }
          key={index}
          photo={photo}
        />
      ))}
    </PhotosContainer>
  );
};

export default PhotosList;
