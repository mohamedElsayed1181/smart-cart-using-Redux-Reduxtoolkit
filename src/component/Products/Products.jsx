

import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import { addToCart } from "../../redux/cart-slice";

export default function Products() {
  const products = useSelector((state) => state.products);
  // console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <Card className="h-100">
              <Card.Img 
                variant="top" 
                src={product.image} 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.category}</Card.Text>
                <Card.Text>{product.price}$</Card.Text>
                <Button 
                  className="mt-auto" 
                  onClick={() => dispatch(addToCart(product))} 
                  variant="primary"
                >
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
