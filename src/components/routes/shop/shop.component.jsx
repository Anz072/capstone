import { Routes,Route } from "react-router-dom";
import CateogriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../store/categories/category.action";




const Shop = () => {
const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categoriesArray))
    };
    getCategories();
  }, []);

  return (
    <Routes>
        <Route index element={<CateogriesPreview/>}/>
        <Route path=":category" element={<Category/>}/>
    </Routes>
  );
};

export default Shop;
