//import { getGifts } from "../helpers/getGifs";
import GifItem from "./GifItem";
import useFetchGif from "../hooks/useFetchGif";

const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGif(category);

  /*
  const newStateImages = async() => {
    const images = await getGifts(category);
    setGifs(images);
  };

  useEffect(() => {
    newStateImages();
  }, []);
  */
  return (
    <>
      <h2>{category}</h2>
      {isLoading && <h3>Cargando...</h3>}
      <div className="card-grid">
        {gifs.map((element) => (
          <GifItem key={element.id} gifElement={element} />
        ))}
        ;
      </div>
    </>
  );
};

export default GifGrid;
