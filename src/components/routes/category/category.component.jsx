import { useParams } from "react-router-dom";
import "./category.styles.scss";
import {  useEffect, useState } from "react";
import ProductCard from "../../product-card/product-card.component";
import { useSelector } from "react-redux";
import { setCategories } from "../../../store/categories/category.action";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(setCategories);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};

export default Category;
