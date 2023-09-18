import { styled } from "styled-components";

interface ButtonProps {
  "data-is-favorited": boolean;
}

export const HoverLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  color: #fff;
  text-align: center;
  background-color: #0000004a;
  z-index: 2;
  padding: 1rem;
  border-radius: 0.3rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  span {
    font-style: italic;
  }
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: 1.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const HorizontalLine = styled.div`
  height: 0.125rem;
  width: 4.5rem;
  background-color: #fff;
`;

export const Button = styled.button<ButtonProps>`
  position: absolute;
  bottom: 1rem;
  background-color: ${(props) =>
    props["data-is-favorited"] ? "#ffffffb8" : "transparent"};
  color: ${(props) => (props["data-is-favorited"] ? "#d3405c" : "#fff")};
  border: 1px solid #ffffffb8;
  border-radius: 1.5rem;
  height: 2.75rem;
  padding: 0 1.25rem;
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: ${(props) =>
      props["data-is-favorited"] ? "#ffffffd4" : "#00000091"};
  }
`;
