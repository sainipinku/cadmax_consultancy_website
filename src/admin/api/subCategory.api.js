import axios from "../../api/axios";

/* CREATE */
export const addSubCategory = (data) =>
  axios.post("/subcategories", data);

/* GET ALL */
export const getSubCategories = () =>
  axios.get("/subcategories");

/* GET BY CATEGORY */
export const getSubByCategory = (categoryId) =>
  axios.get(`/subcategories/category/${categoryId}`);

/* UPDATE */
export const updateSubCategory = (id, data) =>
  axios.put(`/subcategories/${id}`, data);

/* DELETE */
export const deleteSubCategory = (id) =>
  axios.delete(`/subcategories/${id}`);
