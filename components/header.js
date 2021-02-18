import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";

import {IoMdMail} from 'react-icons/io'
import {HiChevronDown} from 'react-icons/hi'
import {FaUser, FaHeart, FaShoppingCart} from 'react-icons/fa'
import {ImSearch, ImFacebook, ImTwitter, ImYoutube, ImInstagram, ImPinterest} from 'react-icons/im'

class Header extends Component {
  render() {
    return (
      <>
      {/* // Header */}
      <div className="header-wrapper">
          <div className="container header-container">
            <div className="row header-top">
              {/* socials */}
              <div className="col header__top__socials">
                <ul className="socials_items">
                    <li className="social-item"> <IoMdMail/> </li>
                    <li className="social-item"> <ImFacebook/> </li>
                    <li className="social-item"> <ImTwitter/> </li>
                    <li className="social-item"> <ImYoutube/> </li>
                    <li className="social-item"> <ImInstagram/> </li>
                    <li className="social-item"> <ImPinterest/> </li>
                </ul>
              </div>
              {/* promo */}
              <div className="col-6 header__top__promotion">
                <h6 className="promotion_text"><span>Free</span> shipping on orders over <span>$50</span></h6>
              </div>
              {/* settings */}
              <div className="col header__top__shop-settings">
                <ul className="setting_items">
                    <li className="setting-item"> 
                      English <HiChevronDown/>
                    </li>
                    <li className="setting-item"> 
                      USD <HiChevronDown/>
                    </li>
                    <li className="setting-item"> 
                      <FaUser /> Log in
                    </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
       {/* // Navigation */}
       <nav className="navbar-wrapper navbar navbar-expand-lg navbar-light bg-light">
        <div className="container navbar-top-container">
          <Link href="#">
            <a className="navbar-brand">Fashion<span>NOVA</span>clone</a>
          </Link>
            <div className="navbar-search">
              <form className="form-inline">
                <input className="form-control search-input" type="search" placeholder="plus black top" aria-label="Search"/>
                <button className="btn search-btn" type="submit">
                  <ImSearch/>
                </button>
              </form>
            </div>
            <ul className="shop-links">
              <li className="shop-link-item"> <FaHeart /> </li>
              <li className="shop-link-item"> <FaShoppingCart /> </li>
            </ul>  
        </div>
     </nav>
       <div className="navbar-wrapper navbar navbar-expand-lg navbar-light bg-light">
            <div className="container navbar-bottom-container">
                <div className="nav-links collapse navbar-collapse" id="navbarLinks">
                  <div className="navbar-nav">
                      <Link href="#">
                          <a className="nav-link">Women <HiChevronDown /> </a>
                      </Link>
                      <Link href="#">
                          <a className="nav-link">Plus <HiChevronDown /> </a>
                      </Link>
                      <Link href="#">
                          <a className="nav-link">Men <HiChevronDown /> </a>
                      </Link>
                      <Link href="#">
                          <a className="nav-link">Kids <HiChevronDown /> </a>
                      </Link>
                      <Link href="#">
                          <a className="nav-link">Beauty <HiChevronDown /> </a>
                      </Link>
                      <Link href="#">
                          <a className="nav-link">Blog</a>
                      </Link>
                      <Link href="#">
                          <a className="nav-link">Contact</a>
                      </Link>
                  </div>
              </div>
            </div>
        </div>
     </>
    );
}};

export default Header;
