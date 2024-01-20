import { ChangeEvent, useEffect, useState } from "react";
import { useSearchContext } from "../context/searchContext";

interface Props {
  addCategory: (text: string) => void;
}

export const AddCategory = ({ addCategory }: Props) => {
  const { searchText } = useSearchContext();

  const [inputValue, setinputValue] = useState("");
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event) return;
    setinputValue(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanInputValue: string = inputValue.trim();

    if (!(cleanInputValue.length > 1)) {
      alert("you need add more letters");
      return;
    }

    addCategory(inputValue);
  };

  useEffect(() => {
    if (!searchText) {
      return;
    }
    console.log("me eejecute");
    addCategory(searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form
      className="flex items-center justify-center mt-6"
      onSubmit={(event) => onSubmit(event)}
      action=""
    >
      <input
        className="px-4 py-4 text-white bg-white border-none rounded-full rounded-r-none bg-opacity-10"
        value={inputValue}
        type="text"
        onChange={(event) => onInputChange(event)}
        placeholder="buscar"
      />
      <button className="inline-block px-6 py-4 rounded-full rounded-l-none bg-gif-search">
        <i className="text-white fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};
