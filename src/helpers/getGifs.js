

export const getGifts = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=XqX0iwzJomaQ0KWeyNNwPotKIZWI9yMC&q=${category}&limit=20`;
    try{
      const resp = await fetch(url);
      if(!resp.ok) throw new Error(`Error HTTP: ${resp.status}`);

      const {data} = await resp.json();

      const gifs = data.map( (data) => ({
      id: data.id,
      title : data.title,
      url: data?.images?.downsized_medium.url
    }));
    return gifs;

    }catch(error){
      console.error("error al obtener gifs: ", error.message);
      throw new Error("No se pudieron cargar los Gifts");
    }

  };
