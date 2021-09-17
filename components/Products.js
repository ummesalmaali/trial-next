import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import Image from "next/image";
import Button from "react-bootstrap/Button";

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
              <Card style={{ width: "30rem" }}>
                <Card.Img
                  height="300"
                  width="250"
                  variant="top"
                  src={item.image}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>{item.price}</Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
