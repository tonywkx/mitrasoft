import React from "react";
import Header from "../components/header";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCount,
  decreaseCount,
  getLatestNews,
} from "../redux/actions/actionCreater";

export default function Home() {
  const count = useSelector((store) => store?.counter?.count || 0);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCount());
  };

  const handleDecrease = () => {
    dispatch(decreaseCount());
  };

  const handleNews = () => {
    dispatch(getLatestNews());
  };
  return (
    <>
      <Header />
      <div>
        <button onClick={handleIncrease}>+1</button>
        <button onClick={handleDecrease}>-1</button>
        <button onClick={handleNews}>Get Posts</button>
        <h1>{count}</h1>
      </div>
    </>
  );
}
