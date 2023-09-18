import React, { useState } from "react";
import { Photo } from "../types/types";
import { CardContainer } from "../styles/PhotoCard.styles";
import HoverOverlay from "./HoverOverlay";
import LazyImage from "./LazyImage";

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard = React.forwardRef<HTMLDivElement, PhotoCardProps>(
  ({ photo }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const [isFavorited, setIsFavorited] = useState(
      favorites.includes(photo.id)
    );

    const toggleHover = () => {
      setIsHovered((prev) => !prev);
    };

    const handleFavourite = () => {
      const updatedFavorites = isFavorited
        ? favorites.filter((id: number) => id !== photo.id)
        : [...favorites, photo.id];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorited(!isFavorited);
    };

    return (
      <CardContainer
        ref={ref ? ref : undefined}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <LazyImage
          src={photo.url}
          alt={photo.alt}
          placeholder={photo.placeholder}
        />
        {isHovered && (
          <HoverOverlay
            photo={photo}
            handleFavourite={handleFavourite}
            isFavorited={isFavorited}
          />
        )}
      </CardContainer>
    );
  }
);

export default PhotoCard;
