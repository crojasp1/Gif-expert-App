import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";


const useFetchGif = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const newStateImages = async() => {
    const images = await getGifts(category);
    setGifs(images);
    setIsLoading(false);
  };

  useEffect(() => {
    newStateImages();
  }, []);

  return {
    gifs,
    isLoading
  }

}

export default useFetchGif;


