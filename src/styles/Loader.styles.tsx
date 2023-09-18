import { styled } from "styled-components";

const Spinner = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 1.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 0.25rem solid #d1d1d1;
  border-right-color: #767676;
  animation: spinner 1s infinite linear;

  @keyframes spinner {
    to {
      transform: rotate(1turn);
    }
  }
`;

export default Spinner;
