import React from "react";
import { useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listTopProduct } from "../actions/productActions";
import Loader from "./Loader";
import Message from "./Message";

const ProductCarousel = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(
    (state) => state.productTopRated
  );

  useEffect(() => {
    dispatch(listTopProduct());
  }, [dispatch]);
  return loading ? (
    <Loader></Loader>
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-dark">
      {products?.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image
              src={product.image}
              alt={product.name}
              fluid
              style={{ display: "flex", justifyContent: "center" }}
            ></Image>
            <Carousel.Caption className="carousel-caption">
              <h2>
                {product.name} {product.price}
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
