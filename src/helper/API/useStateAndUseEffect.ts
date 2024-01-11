import axios from "axios";

// Get All Todo
export const getAllTodo = async (URL: string) => {
  try {
    const response = await axios.get(URL);
    return response;
  } catch (error: Error | any) {
    throw Error(error);
  }
};
