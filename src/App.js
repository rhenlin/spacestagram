import React, { useEffect, useState } from "react";
import "./App.css";
import "@material-tailwind/react/tailwind.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import LoadingSpinner from "./components/LoadingSpinner";
function App() {
  const [loadedPosts, setLoadedPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=" +
            process.env.REACT_APP_API_KEY +
            "&count=20"
        );
        const data = await response.json();
        setLoadedPosts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Header />
      {!loadedPosts && <LoadingSpinner />}
      {loadedPosts && <Posts posts={loadedPosts} />}
    </div>
  );
}

export default App;
