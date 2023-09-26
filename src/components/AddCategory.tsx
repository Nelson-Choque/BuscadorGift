import { ChangeEvent, useState } from "react";

interface Props {
  addCategory: Function;
}

export const AddCategory = ({ addCategory }: Props) => {
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
  return (
    <form onSubmit={(event) => onSubmit(event)} action="">
      <input
        value={inputValue}
        type="text"
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
