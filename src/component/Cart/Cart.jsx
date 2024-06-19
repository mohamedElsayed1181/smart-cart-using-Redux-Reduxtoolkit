import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../../redux/cart-slice";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price*product.quantity;
    return acc;
  }, 0);

  console.log(cart);

  return (
    <div className="container py-5">
      <h2>Welcome To Cart</h2>
      <Button onClick={() => dispatch(clear())} className="bg-primary mb-3">
        Clear All Cart
      </Button>
      <h3>totalPrice:{totalPrice.toFixed(2)} $ </h3>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                {" "}
                <Image
                  sec={product.image}
                  alt={product.title}
                  style={{ width: "100px", height: "100px" }}
                />{" "}
              </td>
              <td>{product.price}$</td>
              <td>{product.quantity}</td>

              <td>
                <Button
                  onClick={() => dispatch(deleteFromCart(product))}
                  className="bg-danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
