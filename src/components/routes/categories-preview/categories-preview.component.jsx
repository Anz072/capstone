import "./categories-preview.style.scss";
import CateogryPreview from "../../category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../store/categories/category.selector";

const CateogriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
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
