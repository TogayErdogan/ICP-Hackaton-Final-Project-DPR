import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import productsData from "../../db/data.js";
import { IoBackspaceSharp } from "react-icons/io5";

import { BiUpvote, BiDownvote } from "react-icons/bi";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

function ProductPage() {
  const { id } = useParams();

  const thisProduct = productsData.find(
    (product) => product.id === parseInt(id)
  );

  const [upvotes, setUpvotes] = useState(thisProduct?.upvotes || 0);
  const [downvotes, setDownvotes] = useState(thisProduct?.downvotes || 0);
  const [reviews, setReviews] = useState(thisProduct?.reviews || []);
  const [newReview, setNewReview] = useState("");

  const handleUpvote = () => {
    setUpvotes((prevUpvotes) => prevUpvotes + 1);
    // Update thisProduct in your data source accordingly
  };

  const handleDownvote = () => {
    setDownvotes((prevDownvotes) => prevDownvotes + 1);
    // Update thisProduct in your data source accordingly
  };

  const handleReviewUpvote = (reviewIndex) => {
    setReviews((prevReviews) =>
      prevReviews.map((review, index) =>
        index === reviewIndex ? { ...review, upvotes: review.upvotes + 1 } : review
      )
    );
  };

  const handleReviewDownvote = (reviewIndex) => {
    setReviews((prevReviews) =>
      prevReviews.map((review, index) =>
        index === reviewIndex ? { ...review, downvotes: review.downvotes + 1 } : review
      )
    );
  };

  const handleSubmitReview = (event) => {
    event.preventDefault();
    setReviews([...reviews, { content: newReview, upvotes: 0, downvotes: 0 }].reverse());
    setNewReview("");
  };

  if (!thisProduct) {
    return <div>Product not found!</div>;
  }

  return (
    <Card
      style={{
        marginBottom: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <IoBackspaceSharp /> Go Back
      </Link>
      <CardBody style={{ padding: "20px" }}>
        <CardTitle
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          {thisProduct.title}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          style={{ textAlign: "center", fontSize: "25px" }}
        >
          {thisProduct.newPrice}
        </CardSubtitle>
        <CardText style={{ marginBottom: "15px", textAlign: "center" }}>
          <img
            src={thisProduct.img}
            alt={thisProduct.title}
            className="img-fluid"
            width="300"
            height="400"
            style={{ objectFit: "cover", borderRadius: "5px" }}
          />
        </CardText>
        <CardText
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="primary"
            onClick={handleUpvote}
            style={{
              marginRight: "10px",
              backgroundColor: "green",
              borderColor: "#007bff",
              borderRadius: "5px",
              color: "white",
              padding: "10px 20px",
              fontWeight: "bold",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <BiUpvote style={{ color: "green" }} /> ({upvotes})
          </Button>
          <Button
            variant="secondary"
            onClick={handleDownvote}
            style={{
              backgroundColor: "red",
              borderColor: "#6c757d",
              borderRadius: "5px",
              color: "white",
              padding: "10px 20px",
              fontWeight: "bold",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <BiDownvote style={{ color: "green" }} /> ({downvotes})
          </Button>
        </CardText>
        <Form onSubmit={handleSubmitReview} style={{ marginTop: "20px" }}>
          <CardText>
            <FormGroup>
              <FormLabel htmlFor="review">Add a Review:</FormLabel>
              <FormControl
                as="textarea"
                id="review"
                value={newReview}
                onChange={(event) => setNewReview(event.target.value)}
                style={{ width: "100%", height: "150px", borderRadius: "5px" }}
              />
            </FormGroup>
            <Button
              variant="success"
              type="submit"
              style={{
                marginTop: "10px",
                backgroundColor: "#28a745",
                borderColor: "#28a745",
                borderRadius: "5px",
                color: "white",
                padding: "10px 20px",
                fontWeight: "bold",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                display: "flex",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              Submit Review
            </Button>
          </CardText>
        </Form>
        <CardText>
          <h4
            style={{
              marginBottom: "10px",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            Reviews
          </h4>
          <ListGroup variant="flush">
            {reviews.map((review, index) => (
              <ListGroupItem
                key={index}
                style={{ padding: "10px", borderBottom: "1px solid #ccc" }}
              >
                <div>
                  {review.content}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleReviewUpvote(index)}
                    style={{
                      marginRight: "10px",
                      backgroundColor: "green",
                      borderColor: "#007bff",
                      borderRadius: "5px",
                      color: "white",
                      padding: "5px 10px",
                      fontWeight: "bold",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                    }}
                  > This review was helpful
                    <BiUpvote style={{ color: "green" }} /> ({review.upvotes})
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleReviewDownvote(index)}
                    style={{
                      backgroundColor: "red",
                      borderColor: "#6c757d",
                      borderRadius: "5px",
                      color: "white",
                      padding: "5px 10px",
                      fontWeight: "bold",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                    }}
                  > This review was not helpful
                    <BiDownvote style={{ color: "green" }} /> ({review.downvotes})
                  </Button>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardText>
      </CardBody>
    </Card>
  );
}

export default ProductPage;
