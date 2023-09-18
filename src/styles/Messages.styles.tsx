import { styled } from "styled-components";

const MessagesContainer = styled.div`
  position: relative;
  margin-top: 1rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  button {
    background-color: transparent;
    color: #000;
    border: 1px solid #000000b8;
    border-radius: 1.5rem;
    height: 2.75rem;
    padding: 0 1.25rem;
    transition: background-color 0.1s ease-in;

    &:hover {
      background-color: #00000091;
      color: #fff;
    }
  }
`;

export const Text = styled.p`
  text-align: center;
  padding-top: 1rem;
`;

export default MessagesContainer;
