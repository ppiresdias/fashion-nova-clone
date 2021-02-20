import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import {SiTiktok, SiInstagram} from "react-icons/si";
import { HiChevronDown, HiShoppingBag } from "react-icons/hi";
import { FaUser, FaHeart, FaBars} from "react-icons/fa";
import {VscGlobe} from "react-icons/vsc"
import {
  ImSearch,
} from "react-icons/im";

class Header extends Component {
  render() {
    return (
      <>
        <div className="header-wrapper">
            <section className="main-header-section" id="header">
                <div className="header-announcement-bar">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-center">                          
                            <Link href="#">
                                <a className="announcement-text">
                                    <span>Free</span> Shipping on Orders over <span>$50</span>
                                </a>
                            </Link>
                        </div>                        
                    </div>
                </div>
                <div className="header-banner">
                    <div className="container-lg">
                        <div className="row d-flex align-items-center justify-content-between">
                            <div className="col header-banner-left d-flex align-items-center">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <FaBars />
                                </button>
                                <div className="socials header-banner-socials d-flex">
                                    <div className="header-banner-social__item">
                                        {" "}<SiInstagram />{" "}
                                        <span className="header-banner-social__item-count">1.6M</span>
                                    </div>
                                    <div className="header-banner-social__item">
                                        {" "}<SiTiktok />{" "}
                                    </div>
                                </div>
                                <div className="header-banner-search">
                                    <form className="form-inline">
                                        <button className="btn search-btn" type="submit">
                                            <ImSearch />
                                        </button>
                                        <input
                                        className="form-control search-input"
                                        type="search"
                                        placeholder="Search here..."
                                        aria-label="Search"
                                        />
                                    </form>
                                </div>
                            </div>
                            <div className="col header-banner-logo">
                                <Link href="/">
                                    <a className="navbar-brand">nova</a>
                                </Link>
                            </div>
                            <div className="col header-banner-right d-flex justify-content-end">
                                <div className="header-banner-right__item header-banner-settings">
                                    {" "} <VscGlobe />{" "}
                                </div>
                                <div className="header-banner-right__item header-banner-account">
                                    {" "} <FaUser />{" "}
                                </div>
                                <div className="header-banner-right__item header-wishlist">
                                    {" "}
                                    <FaHeart />{" "} 
                                    <span className="banner-count header-wishlist-count">0</span>
                                </div>
                                <div className="header-banner-right__item header-cart">
                                    {" "}
                                    <HiShoppingBag />{" "}  
                                    <span className="banner-count header-cart-count">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-nav">
                    <div className="container">
                        <div className="navbar navbar-expand-lg">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="menu d-flex justify-content-around">
                                    <Link href="#">
                                        <a className="menu-link">
                                            new <HiChevronDown />{" "}
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="menu-link">
                                            women <HiChevronDown />{" "}
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="menu-link">
                                            men <HiChevronDown />{" "}
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="menu-link">
                                            plus+curve <HiChevronDown />{" "}
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="menu-link">
                                            kids <HiChevronDown />{" "}
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="menu-link">
                                            beauty <HiChevronDown />{" "}
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="menu-link">
                                            sale <HiChevronDown />{" "}
                                        </a>
                                    </Link>
                                    <Link href="/collections">
                                        <a className="menu-link">
                                            collections <HiChevronDown />{" "}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </>
    );
  }
}

export default Header;