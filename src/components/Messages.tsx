import Loader from "./Loader";
import MessagesContainer from "../styles/Messages.styles";
import { Photo } from "../types/types";

interface MessagesProps {
  isLoading: boolean;
  hasNextPage: boolean;
  error: { message: string } | null;
  photos: Photo[];
}

const Messages = ({ isLoading, hasNextPage, error, photos }: MessagesProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <MessagesContainer>
      {isLoading && <Loader />}
      {!isLoading && !hasNextPage && !error && photos.length > 0 && (
        <>
          <p>You've reached the end.</p>
          <button onClick={scrollToTop}>Back To Top</button>
        </>
      )}
      {!isLoading && !hasNextPage && !error && !photos.length && (
        <p>We couldn’t find anything. Try to refine your search.</p>
      )}
      {error && <p>{error.message}</p>}
    </MessagesContainer>
  );
};

export default Messages;
