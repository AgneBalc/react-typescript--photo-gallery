import {
  Button,
  HorizontalLine,
  HoverLayout,
  InfoContainer,
  Title,
} from "../styles/HoverOverlay.styles";
import { Photo } from "../types/types";

interface HoverOverlayProps {
  photo: Photo;
  handleFavourite: () => void;
  isFavorited: boolean;
}

const HoverOverlay = ({
  photo,
  handleFavourite,
  isFavorited,
}: HoverOverlayProps) => {
  return (
    <HoverLayout>
      <InfoContainer>
        <Title>{photo.title}</Title>
        <HorizontalLine></HorizontalLine>
        <span>{photo.photographer}</span>
      </InfoContainer>
      <Button onClick={handleFavourite} data-is-favorited={isFavorited}>
        {isFavorited ? "Favourited" : "Favourite"}
      </Button>
    </HoverLayout>
  );
};

export default HoverOverlay;
