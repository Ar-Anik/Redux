import axios from "../../utils/axios";

const getTransactions = async () => {
  const response = await axios.get("transactions");

  return response.data;
};

const addTransactions = async (data) => {
  const response = await axios.post("transactions", data);

  return response.data;
};

const editTransactions = async (id, data) => {
  const response = await axios.put(`transactions/${id}`, data);

  return response.data;
};

const deleteTransactions = async (id) => {
  const response = await axios.delete(`transactions/${id}`);

  return response.data;
};

export {
  getTransactions,
  addTransactions,
  editTransactions,
  deleteTransactions,
};
