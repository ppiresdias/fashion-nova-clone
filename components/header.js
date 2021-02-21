import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import {SiTiktok, SiInstagram} from "react-icons/si";
import { HiChevronDown, HiShoppingBag } from "react-icons/hi";
import { FaUser, FaHeart, FaBars} from "react-icons/fa";
import {VscGlobe, VscChromeClose} from "react-icons/vsc"
import {
  ImSearch,
} from "react-icons/im";

class Header extends Component {
  render() {
    return (
      <>
        <div className="header-wrapper">
            <section className="main-header-section" id="header">
                <div className="header-announcement-bar show">
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
                                <button className="navbar-toggler" type="button" data-toggle="collapsable" data-target="" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
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
                            <div className="collapsable navbar-collapsable" id="navbarSupportedContent">
                                <div className="nav-collapse-mobile-close-icon" id="nav-collapse-icon">
                                    <VscChromeClose/>
                                </div>
                                <div className="menu d-flex justify-content-around">
                                    <Link href="#">
                                        <a className="menu-link header-nav-menu-link" id="header-nav-menu-link-1" title="new" data-target="#header-jumbo-menu-1">
                                            new <HiChevronDown />{" "}
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="menu-link header-nav-menu-link" title="women" data-target="#header-jumbo-menu-2">
                                            women <HiChevronDown />{" "}
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="menu-link header-nav-menu-link" title="men" data-target="#header-jumbo-menu-3">
                                            men <HiChevronDown />{" "}
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="menu-link header-nav-menu-link" title="plus+curve" data-target="#header-jumbo-menu-4">
                                            plus+curve <HiChevronDown />{" "}
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="menu-link header-nav-menu-link" title="kids" data-target="#header-jumbo-menu-5">
                                            kids <HiChevronDown />{" "}
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="menu-link header-nav-menu-link" title="beauty" data-target="#header-jumbo-menu-6">
                                            beauty <HiChevronDown />{" "}
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="menu-link header-nav-menu-link" title="sale" data-target="#header-jumbo-menu-7">
                                            sale <HiChevronDown />{" "}
                                        </a>
                                    </Link>
                                    <Link href="/collections">
                                        <a className="menu-link header-nav-menu-link" title="collections" data-target="#header-jumbo-menu-8">
                                            collections <HiChevronDown />{" "}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-jumbo-menu-1" className="header-jumbo-menu">
                    <div className="container">
                        <div className="row header-jumbo__pad">
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase">New in</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">New in women</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">New in men</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">New in plus+curve</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">New in kids</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">New in beauty</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">New in collections</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-8">
                                <div className="jumbo-menu-img d-flex flex-row justify-content-between">
                                    <Image
                                        src="/img/Jeans.jpg"
                                        alt="New"
                                        width={250}
                                        height={312.5}
                                    />
                                    <Image
                                        src="/img/Jumpsuit.jpg"
                                        alt="New"
                                        width={250}
                                        height={312.5}
                                    />
                                    <Image
                                        src="/img/purple__dress.jpg"
                                        alt="New"
                                        width={250}
                                        height={312.5}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-jumbo-menu-2" className="header-jumbo-menu">
                    <div className="container">
                        <div className="row header-jumbo__pad">
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">Shop All</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">Shop new</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">best sellers</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">sale</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">Tops</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">all tops</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">bottoms</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">All bottoms</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">Outerwear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">all outerwear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">More</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">swimwear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">activewear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">loungewear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">shoes</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-jumbo-menu-3" className="header-jumbo-menu">
                    <div className="container">
                    <div className="row header-jumbo__pad">
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">Shop All</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">Shop new</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">best sellers</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">sale</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">Tops</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">all tops</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">bottoms</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">All bottoms</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">Outerwear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">all outerwear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">More</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">swimwear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">activewear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">loungewear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">shoes</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-jumbo-menu-4" className="header-jumbo-menu">
                    <div className="container">
                        <div className="row header-jumbo__pad">
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">Shop All</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">Shop new</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">best sellers</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">sale</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">Tops</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">all tops</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">bottoms</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">All bottoms</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">Outerwear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">all outerwear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">More</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">swimwear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">activewear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">loungewear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">shoes</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-jumbo-menu-5" className="header-jumbo-menu">
                    <div className="container">
                        <div className="row header-jumbo__pad">
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">Shop All</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">Shop new</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">best sellers</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">sale</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">Tops</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">all tops</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">bottoms</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">All bottoms</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">Outerwear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">all outerwear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">More</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">swimwear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">activewear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">loungewear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">shoes</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-jumbo-menu-6" className="header-jumbo-menu">
                    <div className="container">
                        <div className="row header-jumbo__pad">
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">Shop All</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">Shop new</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">best sellers</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">sale</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">Tops</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">all tops</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">top-submenu</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">bottoms</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">All bottoms</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">bottoms-submenu</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">Outerwear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">all outerwear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">outerwear-submenu</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-heading jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">More</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">swimwear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">activewear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">loungewear</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">shoes</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-jumbo-menu-7" className="header-jumbo-menu">
                    <div className="container">
                        <div className="row header-jumbo__pad">
                            <div className="col">
                                <ul className="jumbo-menu-items">
                                    <li className="jumbo-menu-headingjumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link uppercase ">Sale in</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">Sale in women</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">Sale in men</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">Sale in plus+curve</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">Sale in kids</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">Sale in beauty</a>
                                        </Link>
                                    </li>
                                    <li className="jumbo-menu-item">
                                        <Link href="#">
                                            <a className="jumbo-menu-link">Sale in collections</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-8">
                                <div className="jumbo-menu-img d-flex flex-row justify-content-between">
                                    <Image
                                        src="/img/Jeans.jpg"
                                        alt="New"
                                        width={250}
                                        height={312.5}
                                    />
                                    <Image
                                        src="/img/Jumpsuit.jpg"
                                        alt="New"
                                        width={250}
                                        height={312.5}
                                    />
                                    <Image
                                        src="/img/purple__dress.jpg"
                                        alt="New"
                                        width={250}
                                        height={312.5}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-jumbo-menu-8" className="header-jumbo-menu">
                    <div className="container">
                        <div className="row header-jumbo__pad">
                            <div className="col">
                                <div className="jumbo-menu-img">
                                    <Image
                                        src="/img/Jeans.jpg"
                                        alt="New"
                                        width={250}
                                        height={312.5}
                                    />
                                </div>
                                <div className="collection-title">
                                    Collection 1
                                </div>
                            </div>
                            <div className="col">
                                <div className="jumbo-menu-img">
                                    <Image
                                        src="/img/Jeans.jpg"
                                        alt="New"
                                        width={250}
                                        height={312.5}
                                    />
                                </div>
                                <div className="collection-title">
                                    Collection 2
                                </div>
                            </div>
                            <div className="col">
                                <div className="jumbo-menu-img">
                                    <Image
                                        src="/img/Jeans.jpg"
                                        alt="New"
                                        width={250}
                                        height={312.5}
                                    />
                                </div>
                                <div className="collection-title">
                                    Collection 3
                                </div>
                            </div>
                            <div className="col">
                                <div className="jumbo-menu-img">
                                    <Image
                                        src="/img/Jeans.jpg"
                                        alt="New"
                                        width={250}
                                        height={312.5}
                                    />
                                </div>
                                <div className="collection-title">
                                    Collection 4
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