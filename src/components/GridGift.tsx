import { useEffect, useState } from "react";

interface Props {
  category: string;
}

export function GridGift({ category }: Props) {
  const [images, setimages] = useState([]);

  const API_KEY = "3CGTaQGe8bUxzhntlNwjl2Hid5ePrt2O";
  const base_url = "https://api.giphy.com/v1/gifs/search";
  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const resp = await fetch(
      `${base_url}?api_key=${API_KEY}&q=${category}&limit=10`
    );

    const { data } = await resp.json();

    console.log(data);
    setimages(data);
  };

  return (
    <>
      <h3 key={category}>{category}</h3>
      <div className="card-grid">
        {images.map(({ title, images }) => (
          <div className="card">
            <img src={images["downsized"]["url"]} alt="a" />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
