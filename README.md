# Photo Gallery Web Application

A web application for displaying and searching photos using the Pexels API. It allows users to search for photos by keywords and view an infinite scroll of results. Users can also favorite photos, and the application saves their favorites in local storage.

### Screenshot

  <img src="/screenshot.png" alt="Screenshot" />

### Links

- [Solution URL](https://github.com/AgneBalc/react-typescript--photo-gallery)
- [Live Site URL](https://photo-gallery-ruddy.vercel.app/)

### Technologies Used

- **React:** The frontend of the application is built using React.

- **Webpack:** Webpack is used for bundling and managing the application's assets and dependencies.

- **Styled Components:** Styled Components is used for styling the application, allowing for the creation of reusable and maintainable styled components.

- **Intersection Observer:** Intersection Observer is used for lazy loading images as the user scrolls down the page, improving performance.

### Features

- **Search Bar:** Users can enter keywords in the search bar to search for photos related to their query.

- **Infinite Scroll:** The application loads more photos as the user scrolls down the page, providing a seamless browsing experience.

- **Lazy Loading:** Images are loaded lazily using the Intersection Observer, ensuring fast initial page load times.

- **Favoriting:** Users can favorite photos, and their favorites are saved in local storage, persisting across sessions.

- **Error Handling:** The application handles errors gracefully and displays error messages when API requests fail.

## Running it locally

You must have [Node.js](https://nodejs.org/en) installed on your computer before you can run the project locally.
Once installed, you can proceed to clone the project:

```
    git clone https://github.com/AgneBalc/react-typescript--photo-gallery
```

Then, change the working directory to the cloned project:

```
    cd react-typescript--photo-gallery
```

And finally, install the project's dependencies:

```
    npm install
```
