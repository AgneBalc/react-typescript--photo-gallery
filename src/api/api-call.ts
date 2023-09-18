import REACT_APP_KEY from "../../config";

const mainUrl = "https://api.pexels.com/v1/curated";
const searchUrl = "https://api.pexels.com/v1/search";
const photosPerPage = 15;

export const getImagesPage = async (pageNum: number, query: string | null) => {
  let URL;

  if (query) {
    URL = `${searchUrl}?query=${query}&page=${pageNum}&per_page=${photosPerPage}`;
  } else {
    URL = `${mainUrl}?&page=${pageNum}&per_page=${photosPerPage}`;
  }
  const response = await fetch(URL, {
    headers: { Authorization: REACT_APP_KEY },
  });

  if (!response.ok) {
    throw new Error("An unexpected error occurred. Please try again later.");
  }

  const data = await response.json();

  return data;
};
