import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Col,
  Row
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, Form, Errors } from "react-redux-form";

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      agree: false,
      contactType: "By Phone",
      feedback: "",
      touched: {
        firstName: false,
        lastName: false,
        phoneNum: false,
        email: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

 
  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
    this.props.resetFeedbackForm();
  }

  render() {
 
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>Contact Us</h2>
            <hr />
          </div>
        </div>

        <div className="row row-content align-items-center">
          <div className="col-sm-4">
            <h5>Our Address</h5>
            <address>
              1 Nucamp Way
              <br />
              Seattle, WA 98001
              <br />
              U.S.A.
            </address>
          </div>
          <div className="col">
            <a role="button" href="tel:+12065551234" className="btn btn-link">
              <i className="fa fa-phone" /> 1-206-555-1234
            </a>
            <br />
            <a
              role="button"
              href="mailto:fakeemal@fakeemail.com"
              className="btn btn-link"
            >
              <i className="fa fa-envelope-o" /> campsites@nucamp.co
            </a>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h2>Send us your Feedback</h2>
            <hr />
          </div>
          <div className="col-md-10">
            <Form model="feedbackForm" onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group" row>
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  {/* eslint-disable-next-line */}
                  <Control.text
                    model=".firstName"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                  />
                  <Errors
                    className="text-danger"
                    model=".firstName"
                    show="touched"
                    component="div"
                    messages={{
                      required: "This field is required",
                      minLength: "This field must be at least 2 characters.",
                      maxLength:
                        "This field cannot be greater then 15 characters.",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  {/* eslint-disable-next-line */}
                  <Control.text
                    model=".lastName"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                  />
                  <Errors
                    className="text-danger"
                    model=".lastName"
                    show="touched"
                    component="div"
                    messages={{
                      required: "This field is required",
                      minLength: "This field must be at least 2 characters.",
                      maxLength:
                        "This field cannot be greater then 15 characters.",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="phoneNum" md={2}>
                  Phone Number
                </Label>
                <Col md={10}>
                  {/* eslint-disable-next-line */}
                  <Control.text
                    model=".phoneNum"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(10),
                      maxLength: maxLength(15),
                      isNumber,
                    }}
                    id="phoneNum"
                    name="phoneNum"
                    placeholder="Phone Number"
                  />
                  <Errors
                    className="text-danger"
                    model=".phoneNum"
                    show="touched"
                    component="div"
                    messages={{
                      required: "This field is required",
                      minLength: "This field must be at least 10 numbers.",
                      maxLength:
                        "This field cannot be greater then 15 numbers.",
                      isNumber: "This field can only contain numerals.",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  {/* eslint-disable-next-line */}
                  <Control.text
                    model=".email"
                    className="form-control"
                    validators={{
                      required,
                      validEmail,
                    }}
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    component="div"
                    messages={{
                      required: "This field is required",
                      validEmail: "This field must contain a valid email.",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 4, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      {/* eslint-disable-next-line */}
                      <Control.checkbox
                        model=".agree"
                        className="form-check-input"
                        name="agree"
                      />{" "}
                      <strong>May we contact you?</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={4}>
                  {/* eslint-disable-next-line */}
                  <Control.select
                    model=".contactType"
                    className="form-control"
                    name="contactType"
                  >
                    <option>By Phone</option>
                    <option>By Email</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="feedback" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  {/* eslint-disable-next-line */}
                  <Control.textarea
                    model=".feedback"
                    className="form-control"
                    id="feedback"
                    name="feedback"
                    rows="12"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
