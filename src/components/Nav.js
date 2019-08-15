import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../new-logo-5.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Nav extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark" id="nav">
        <div className="container-fluid tall">
          <div className="row no-margin tall">
            <div className="col-4 justify-content-center .d-none .d-md-block .d-lg-block" />
            <div className="col-4 d-flex justify-content-center align-items-center">
              <Link to="/">
                <img src={logo} alt="store" />
              </Link>
            </div>
            <div
              className="col-4 d-flex justify-content-end pt-2"
              id="cart-container"
            >
              <Link to="/cart" className="ml-auto">
                <span>
                  <i className="fas fa-cart-plus" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </NavWrapper>
    );
  }
}

console.log("hello");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById("nav").style.height = "200px";
    document.getElementById("cart-container").style.marginTop = "60px";
  } else {
    document.getElementById("nav").style.height = "300px";
    document.getElementById("cart-container").style.marginTop = "0px";
  }
}

const NavWrapper = styled.nav`
  background var(--deepRed);
  height: 300px;
  transition: all 0.5s ease-in-out;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
  }
  .row.no-margin {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
  .tall {
    height: 100%;
    padding-right: 0;
    padding-left: 0;
  }
  a {
    color: white !important;
  }

  #cart-container {
    transition: all 0.5s ease-in-out !important;
  }
  
`;
