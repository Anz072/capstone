import { useContext } from "react";
import { CategoriesContext } from "../../../context/categories.context";
import "./categories-preview.style.scss";
import CateogryPreview from "../../category-preview/category-preview.component";

const CateogriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      <h1> This is shop yo</h1>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CateogryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CateogriesPreview;
