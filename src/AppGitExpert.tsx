import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GridGift } from "./components/GridGift";

export function AppGitExpert() {
  const [categories, setCategories] = useState(["one punch man"]);

  const addCategory = (newCategory: string) => {
    console.log(newCategory);
    const isAddedCategory: Boolean = categories.some(
      (category) => category.toLowerCase() === newCategory.toLowerCase()
    );

    if (isAddedCategory) {
      alert("el elemento ya se encuentra incluido");
      return "";
    }

    setCategories([newCategory, ...categories]);
  };

  return (
    <div>
      <h2>Buscador de Gifts</h2>
      <AddCategory addCategory={addCategory} />
      <ul>
        {categories.map((category) => (
          <GridGift key={category} category={category} />
        ))}
      </ul>
    </div>
  );
}
