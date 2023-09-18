import useFetch from "../hooks/useFetch";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Messages from "./Messages";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import PhotosList from "./PhotosList";
import { Title } from "../styles/Home.styles";

const Home = () => {
  const [query, setQuery] = useState<string | null>(null);
  const { pageNum, lastPhotoRef } = useInfiniteScroll();
  const { isLoading, error, photos, hasNextPage, setPhotos } = useFetch(
    pageNum,
    query
  );

  useEffect(() => {
    setPhotos([]);
  }, [query]);

  return (
    <main>
      <SearchBar setQuery={setQuery} />
      {query && photos.length > 0 && (
        <Title>
          <span>Results for</span>
          <h1>{query}</h1>
        </Title>
      )}
      <PhotosList
        photos={photos}
        hasNextPage={hasNextPage}
        lastPhotoRef={lastPhotoRef}
      />
      <Messages
        isLoading={isLoading}
        error={error}
        hasNextPage={hasNextPage}
        photos={photos}
      />
    </main>
  );
};

export default Home;
