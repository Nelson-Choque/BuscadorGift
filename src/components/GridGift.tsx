import { useEffect, useState } from "react";

interface Props {
  category: string;
}

export function GridGift({ category }: Props) {
  console.log("1");
  const [images, setimages] = useState([]);

  const API_KEY = "3CGTaQGe8bUxzhntlNwjl2Hid5ePrt2O";
  const base_url = "https://api.giphy.com/v1/gifs/search";

  const getImages = async () => {
    const resp = await fetch(
      `${base_url}?api_key=${API_KEY}&q=${category}&limit=14`
    );

    const { data } = await resp.json();

    console.log(category);
    setimages(data);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3
        className="inline-block p-2 py-4 font-bold capitalize sm:text-3xl sm:py-8 text-1xl bg-gif-title"
        key={category}
      >
        {category}
      </h3>
      <div className="p-2 card-grid">
        {images.map(({ images }) => (
          <div className="card">
            <img className="" src={images["downsized"]["url"]} alt="a" />
          </div>
        ))}
      </div>
    </>
  );
}
