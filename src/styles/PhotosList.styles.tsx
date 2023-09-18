import styled from "styled-components";
import { media } from "./globalStyles";

const PhotosContainer = styled.section`
  max-width: 992px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  gap: 1rem;

  ${media.desktop} {
    gap: 2rem;
  }
`;

export default PhotosContainer;
