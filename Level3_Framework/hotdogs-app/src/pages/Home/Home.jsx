import React from "react";
import style from "./Home.module.css";
import { ImageBar, Menu, Info, ProductList, Footer } from "components";
function Home() {
  return (
    <main className={style.home_page}>
      <ImageBar />
      <Menu />
      <Info />
      <ProductList />
      <Footer />
    </main>
  );
}

export default Home;
