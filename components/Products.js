import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
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
    <>
      <Container>
        <Row>
          {items.map((item) => {
            const { id, name, title, description, image, price } = item;
            return (
              <>
                <Col xs={6} md={4} className="items" key={id}>
                  <Card className="m-4">
                    <Image
                      src={image}
                      height="300"
                      width="250"
                      variant="top"
                      alt={name}
                    />
                    <Card.Title>{title}</Card.Title>

                    <p>{name}</p>
                    <p>{price}</p>
                    <Button variant="primary">Buy Now</Button>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Products;
