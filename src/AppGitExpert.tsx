import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GridGift } from "./components/GridGift";

export function AppGitExpert() {
  const [categories, setCategories] = useState<string[]>([]);

  const addCategory = (newCategory: string) => {
    const isAddedCategory: boolean = categories.some(
      (category) => category.toLowerCase() === newCategory.toLowerCase()
    );

    if (isAddedCategory) {
      alert("el elemento ya se encuentra incluido");
      return "";
    }

    setCategories([newCategory, ...categories]);
  };

  return (
    <div className="min-h-screen mx-auto bg-slate-800 max-w-screen-2xl">
      <h2 className="p-4 mx-auto text-2xl font-bold text-center text-white sm:text-3xl lg:text-4xl w-fit">
        Buscador de <span className="bg-gif-title">Gifts</span>
      </h2>
      <AddCategory addCategory={addCategory} />
      <div>
        {categories.length > 0 ? (
          categories.map((category: string) => (
            <GridGift key={category} category={category} />
          ))
        ) : (
          <p className="p-4 text-center text-white">
            aun no ha realizado ninguna busqueda
          </p>
        )}
      </div>
    </div>
  );
}
