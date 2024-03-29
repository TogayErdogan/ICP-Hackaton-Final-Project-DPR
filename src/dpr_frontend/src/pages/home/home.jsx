import React from "react";
import { useState } from "react";
import Navigation from "../../Navigation/Nav";
import Products from "../../Products/Products";
import products from "../../db/data";
import Recommended from "../../Recommended/Recommended";
import Sidebar from "../../Sidebar/Sidebar";
import Card from "../../components/Card";
import "./home.css";

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ brand, ram, company, newPrice, title }) =>
          brand === selected ||
          ram === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ id, img, title, upvotes, downvotes, reviews, newPrice }) => (
        <Card
          upvotes={upvotes}
          downvotes={downvotes}
          id={id}
          key={Math.random()}
          img={img}
          title={title}
          reviews={reviews}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div className="home">
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
};

export default Home;
