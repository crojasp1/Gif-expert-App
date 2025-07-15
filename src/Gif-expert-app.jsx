import { useState } from "react";
import { GifGrid, AddCategory } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const addNewCategory = (newCategory) => {
    //setCategories(categories.unshift('Naruto'));
    const includedCategory = categories.map((c) =>
      c.trim().toLocaleLowerCase()
    );
    const convertedCategory = newCategory.trim().toLocaleLowerCase();

    if (
      categories.includes(newCategory) ||
      includedCategory.includes(convertedCategory)
    )
      return window.alert("Categoria ya incluida");
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertapp</h1>

      <AddCategory onNewCategory={(e) => addNewCategory(e)} />

      {categories.map((categoria) => (
        <GifGrid key={categoria} category={categoria} />
      ))}
    </>
  );
};

export default GifExpertApp;
