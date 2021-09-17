import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  console.log(items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <Container>
              <div className="items">
                <h3>{item.category}</h3>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
