import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";

function Home() {
  const { cars, loading } = useSelector((state) => state.carsReducer);

  const dispatch = useDispatch();

  return (
    <DefaultLayout>
      <h1>Home Page</h1>
      <h1>The length of cars array is {cars.length}</h1>
    </DefaultLayout>
  );
}

export default Home;
