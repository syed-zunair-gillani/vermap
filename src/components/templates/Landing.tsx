"use client";
import React, { useContext, useEffect } from "react";
import Container from "../ui/container";
import ItemListing from "../Item-listing/ItemListing";
import CategoriesBarSlider from "@/components/CategoriesBarSlider";
import Main from "../main/Main";
import { GlobalContext } from "@/context/global-context";

const Landing = ({data}:any) => {
  return (
    <>
      <Main />
      <CategoriesBarSlider />
      <Container>
        <ItemListing listing={data} />
      </Container>
    </>
  );
};

export default Landing;
