import axios from "../../api/axios";

/* GET ALL */
export const getCategories = () =>
  axios.get("/categories");

/* CREATE (IMAGE UPLOAD) */
export const createCategory = (data) =>
  axios.post("/categories", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

/* UPDATE (IMAGE OPTIONAL) */
export const updateCategory = (id, data) =>
  axios.put(`/categories/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

/* DELETE */
export const deleteCategory = (id) =>
  axios.delete(`/categories/${id}`);

