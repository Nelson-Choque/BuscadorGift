import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../context/searchContext";

export const Home = () => {
  const { setSearch, searchText } = useSearchContext();
  const navigate = useNavigate();

  const onSearch = () => {
    navigate("/search");
  };

  function onChangeInput(event: ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;

    setSearch(value);
  }

  return (
    <div className="flex items-center justify-center h-screen text-white bg-gif">
      <div className="p-2">
        <h2 className="mx-auto text-4xl font-bold text-center sm:text-5xl lg:text-7xl w-fit">
          Buscador de <span className="bg-gif-title">Gifts</span>
        </h2>
        <p className="mt-1 text-lg font-light text-center sm:text-xl">
          busca tus personajes o personas favoritos
        </p>
        <form
          className="flex items-center justify-center mt-6"
          action=""
          onSubmit={onSearch}
        >
          <input
            className="px-4 py-4 text-white bg-white border-none rounded-full rounded-r-none  bg-opacity-10"
            type="input"
            placeholder="buscar"
            onChange={onChangeInput}
            value={searchText}
          />
          <button className="inline-block px-6 py-4 rounded-full rounded-l-none  bg-gif-search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
};
