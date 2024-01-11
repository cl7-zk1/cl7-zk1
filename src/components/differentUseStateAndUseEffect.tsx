import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import { TODO_URL } from "../helper/api.url";
import { getAllTodo } from "../helper/API/useStateAndUseEffect";
import HOC from "./optimization/higherOrderComponent";
import ReactDetectStatusBar from "../hooks/status-bar-react-detect";

const UseStateAndUseEffect = () => {
  // Performance Level is 83 to 93%
  const dataFetchedRef = useRef(false);
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchData();
  }, []);
  
  // It will be Use But Performance Level Is 73% as Compare to useEffect
  // useState(() => {
  //   fetchData();
  // });

  // Calling Api for Hooks Optimization
  const fetchData = async () => {
    try {
      const res = await getAllTodo(TODO_URL);
    } catch (error: Error | any) {
      throw Error(error);
    }
  };

  return (
    <React.Fragment>
      <p>optimization useState and useEffect Hooks</p>
      <ReactDetectStatusBar />
    </React.Fragment>
  );
};

export default HOC(UseStateAndUseEffect);
