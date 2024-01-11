import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import { TODO_URL } from "../helper/api.url";
import { getAllTodo } from "../helper/API/useStateAndUseEffect";
import ReactDetectStatusBar from "../hooks/status-bar-react-detect";
import HOC from "../components/optimization/higherOrderComponent";
import { Person } from "../util/todo";

const Todo = () => {
  // Data Fetched using UseRef Hooks
  const dataFetchedRef = useRef(false);

  const [data, setData] = useState<Person[]>([]);
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchData();
  }, []);

  // Calling Api for Hooks Optimization
  const fetchData = async () => {
    try {
      const res = await getAllTodo(TODO_URL);
      setData(res.data);
    } catch (error: Error | any) {
      throw Error(error);
    }
  };

  return (
    <React.Fragment>
      <p>optimization useState and useEffect Hooks</p>
      <ReactDetectStatusBar />
      {/* <TableComponent data={data}/> */}
    </React.Fragment>
  );
};

export default HOC(Todo);
