import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

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

    setCategories([...categories, newCategory]);
  };

  return (
    <div>
      <h2>Buscador de Gifts</h2>
      <AddCategory addCategory={addCategory} />
      <ul>
        {categories.map((categorie) => (
          <li key={categorie}>{categorie}</li>
        ))}
      </ul>
    </div>
  );
}
