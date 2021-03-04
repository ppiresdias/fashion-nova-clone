import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";

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
                                <button className="navbar-toggler" id="navbar-toggle" type="button" data-toggle="collapsable" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
                                    <i class="fa fa-bars" aria-hidden="true"></i>
                                </button>
                                <div className="socials header-banner-socials d-flex">
                                    <div className="header-banner-social__item">
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                        <span className="header-banner-social__item-count">1.6M</span>
                                    </div>
                                    {/* <div className="header-banner-social__item">
                                        <i class="fab fa-tiktok"></i>
                                    </div> */}
                                </div>
                                <div className="header-banner-search">
                                    <form className="form-inline">
                                        <button className="btn search-btn" type="submit">
                                            <i class="fa fa-search" aria-hidden="true"></i>
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
                                    <i class="fa fa-globe" aria-hidden="true"></i>
                                </div>
                                <div className="header-banner-right__item header-banner-account">
                                    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                </div>
                                <div className="header-banner-right__item header-wishlist">
                                    {" "}
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                    <span className="banner-count header-wishlist-count">0</span>
                                </div>
                                <div className="header-banner-right__item header-cart">
                                    {" "}
                                    <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                                    <span className="banner-count header-cart-count">0</span>
                                </div>
                                <div className="shopping-bag-section" id="shopping-bag">
                                    <div className="shopping-cart-close__icon" id="shopping-cart-close-icon">
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </div>
                                    <div className="shopping-cart-heading">
                                        Shopping Cart
                                    </div>
                                    <hr/>
                                    <div className="shopping-cart-items d-flex flex-column">
                                        <div className="row shopping-cart-item">
                                            <div className="col-4 shopping-cart-item__img"> 
                                                <img src="/img/Jumpsuit.jpg" alt="new jumpsuit" style={{width: '100px'}} />
                                            </div>
                                            <div className="col shopping-cart-item__info d-flex flex-column">
                                                <div className="shopping-cart-item__title item_info">Rose Red Dress</div>
                                                <div className="shopping-cart-item__price item_info">
                                                    <strike className="item_original_price">US$19.99</strike> 
                                                    <span className="item_discount_price">US$12.99</span> 
                                                    (<span className="item_discount_percentage">30%</span> off)
                                                </div>
                                                <div className="shopping-cart-item__size item_info">
                                                    Size: <span className="item_size">6</span>
                                                </div>
                                                <div className="shopping-cart-item__color item_info">
                                                    Color:   
                                                    <div className="item_color"></div> 
                                                    <span className="item_color-name">red</span>
                                                </div>
                                                <div className="row item_info shopping-cart-item__functions">
                                                    <div className="col item_adjust_count">
                                                        <div className="row">
                                                            <span className="col item_count_sub"> &minus; </span>
                                                            <span className="col item_count">1</span>
                                                            <span className="col item_count_add"> &#43; </span>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="col item_remove">remove</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row shopping-cart-item">
                                            <div className="col-4 shopping-cart-item__img"> 
                                                <img src="/img/Jumpsuit.jpg" alt="new jumpsuit" style={{width: '100px'}} />
                                            </div>
                                            <div className="col shopping-cart-item__info d-flex flex-column">
                                                <div className="shopping-cart-item__title item_info">Rose Red Dress</div>
                                                <div className="shopping-cart-item__price item_info">
                                                    <strike className="item_original_price">US$19.99</strike> 
                                                    <span className="item_discount_price">US$12.99</span> 
                                                    (<span className="item_discount_percentage">30%</span> off)
                                                </div>
                                                <div className="shopping-cart-item__size item_info">
                                                    Size: <span className="item_size">6</span>
                                                </div>
                                                <div className="shopping-cart-item__color item_info">
                                                    Color:   
                                                    <div className="item_color"></div> 
                                                    <span className="item_color-name">red</span>
                                                </div>
                                                <div className="row item_info shopping-cart-item__functions">
                                                    <div className="col item_adjust_count">
                                                        <div className="row">
                                                            <span className="col item_count_sub"> &minus; </span>
                                                            <span className="col item_count">1</span>
                                                            <span className="col item_count_add"> &#43; </span>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="col item_remove">remove</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row shopping-cart-item">
                                            <div className="col-4 shopping-cart-item__img"> 
                                                <img src="/img/Jumpsuit.jpg" alt="new jumpsuit" style={{width: '100px'}} />
                                            </div>
                                            <div className="col shopping-cart-item__info d-flex flex-column">
                                                <div className="shopping-cart-item__title item_info">Rose Red Dress</div>
                                                <div className="shopping-cart-item__price item_info">
                                                    <strike className="item_original_price">US$19.99</strike> 
                                                    <span className="item_discount_price">US$12.99</span> 
                                                    (<span className="item_discount_percentage">30%</span> off)
                                                </div>
                                                <div className="shopping-cart-item__size item_info">
                                                    Size: <span className="item_size">6</span>
                                                </div>
                                                <div className="shopping-cart-item__color item_info">
                                                    Color:   
                                                    <div className="item_color"></div> 
                                                    <span className="item_color-name">red</span>
                                                </div>
                                                <div className="row item_info shopping-cart-item__functions">
                                                    <div className="col item_adjust_count">
                                                        <div className="row">
                                                            <span className="col item_count_sub"> &minus; </span>
                                                            <span className="col item_count">1</span>
                                                            <span className="col item_count_add"> &#43; </span>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="col item_remove">remove</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row shopping-cart-item">
                                            <div className="col-4 shopping-cart-item__img"> 
                                                <img src="/img/Jumpsuit.jpg" alt="new jumpsuit" style={{width: '100px'}} />
                                            </div>
                                            <div className="col shopping-cart-item__info d-flex flex-column">
                                                <div className="shopping-cart-item__title item_info">Rose Red Dress</div>
                                                <div className="shopping-cart-item__price item_info">
                                                    <strike className="item_original_price">US$19.99</strike> 
                                                    <span className="item_discount_price">US$12.99</span> 
                                                    (<span className="item_discount_percentage">30%</span> off)
                                                </div>
                                                <div className="shopping-cart-item__size item_info">
                                                    Size: <span className="item_size">6</span>
                                                </div>
                                                <div className="shopping-cart-item__color item_info">
                                                    Color:   
                                                    <div className="item_color"></div> 
                                                    <span className="item_color-name">red</span>
                                                </div>
                                                <div className="row item_info shopping-cart-item__functions">
                                                    <div className="col item_adjust_count">
                                                        <div className="row">
                                                            <span className="col item_count_sub"> &minus; </span>
                                                            <span className="col item_count">1</span>
                                                            <span className="col item_count_add"> &#43; </span>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="col item_remove">remove</div>
                                                </div>
                                            </div>
                                        </div>                                       
                                    </div>
                                    <div className="shopping-cart-actions">
                                        <div className="shopping-cart-total d-flex justify-content-between">
                                            <div className="">subtotal:</div>
                                            <div className="shopping-cart-subtotal-amount">US$89.99</div>
                                        </div>
                                        <div className="shopping-cart__buttons primary-action">
                                            Checkout
                                        </div>
                                        <div className="shopping-cart__buttons secondary-action">
                                            Continue Shopping
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-nav">
                    <div className="container">
                        <div className="navbar navbar-expand-lg">
                            <div className="collapsable navbar-collapsable" id="navbarSupportedContent">
                                <div className="collapsed-nav-search">
                                    <form className="form-inline">
                                        <button className="btn search-btn" type="submit">
                                            <i class="fa fa-search" aria-hidden="true"></i>
                                        </button>
                                        <input
                                        className="form-control search-input"
                                        type="search"
                                        placeholder="Search here..."
                                        aria-label="Search"
                                        />
                                    </form>
                                </div>
                                <div className="nav-collapse-mobile-close-icon" id="nav-collapse-icon">
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                </div>
                                <ul className="menu wrappers d-flex justify-content-around">
                                    <li className="menu-link header-nav-menu-link hover" id="header-nav-menu-link-1" title="new" data-target="#header-jumbo-menu-1">
                                        new <i class="fa fa-chevron-down" aria-hidden="true"></i>{" "}
                                        <div id="header-jumbo-menu-1" className="header-jumbo-menu">
                                                <div className="container-lg">
                                                    <div className="row d-flex justify-content-around header-jumbo__pad full_width">
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
                                                            <div className="jumbo-menu-img d-flex flex-row justify-content-around">
                                                                <div>
                                                                    <img src="/img/Jeans.jpg" alt="new jeans" style={{width: '200px'}} />
                                                                  
                                                                </div>
                                                                <div  className="collapse-img">
                                                                    <img src="/img/Jumpsuit.jpg" alt="new jumpsuit" style={{width: '200px'}} />
                                                                    
                                                                </div>
                                                                <div  className="collapse-img collapse-img-primary">
                                                                    <img src="/img/purple__dress.jpg" alt="new purple dress" style={{width: '200px'}} />
                                                                   
                                                                </div>                                   
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </li>
                                    <li className="menu-link header-nav-menu-link" id="header-nav-menu-link-2" title="women" data-target="#header-jumbo-menu-2">
                                        women <i class="fa fa-chevron-down" aria-hidden="true"></i>{" "}
                                        <div id="header-jumbo-menu-2" className="header-jumbo-menu">
                                                <div className="container-lg">
                                                    <div className="row d-flex justify-content-evenly header-jumbo__pad full_width">                                                     
                                                        <div className="col-sm-4 col-md-3 col-lg">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
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
                                                        <div className="col-sm-4 col-md-3 col-lg">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
                                                                <li className="jumbo-menu-heading jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link uppercase ">Dresses</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">all dresses</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">mini dresses</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">midi dresses</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">maxi dresses</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">casual dresses</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">formal dresses</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-4 col-md-3 col-lg">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
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
                                                                        <a className="jumbo-menu-link">shirts &amp; blouses</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">short sleeve tops</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">long sleeve tops</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">bodysuits</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">hoddies &amp; sweatshirts</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-4 col-md-3 col-lg">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
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
                                                                        <a className="jumbo-menu-link">pants</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">jeans</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">shorts</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">skirts</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">sweatpants</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">leggings</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-4 col-md-3 col-lg">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
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
                                                                        <a className="jumbo-menu-link">outerwear</a>
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
                                    </li>
                                    <li className="menu-link header-nav-menu-link" id="header-nav-menu-link-3" title="men" data-target="#header-jumbo-menu-3">
                                        men <i class="fa fa-chevron-down" aria-hidden="true"></i>{" "}
                                        <div id="header-jumbo-menu-3" className="header-jumbo-menu">
                                                <div className="container-lg">
                                                    <div className="row d-flex justify-content-evenly header-jumbo__pad full_width">
                                                        <div className="col-sm-4 col-md-3 col-lg">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
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
                                                        <div className="col-sm-4 col-md-3 col-lg">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
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
                                                                        <a className="jumbo-menu-link">graphic tees</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">button down shirts</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">tees &amp; tanks</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">short sleeve shirts</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">long sleeve shirts</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">sweaters</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-4 col-md-3 col-lg">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
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
                                                                        <a className="jumbo-menu-link">jeans</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">pants</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">joggers &amp; sweats</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">shorts</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-4 col-md-3 col-lg">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
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
                                                                        <a className="jumbo-menu-link">coats &amp; jackets</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">track suits</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-4 col-md-3 col-lg">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
                                                                <li className="jumbo-menu-heading jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link uppercase ">More</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">suits</a>
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
                                                                        <a className="jumbo-menu-link">shoes</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </li>
                                    <li className="menu-link header-nav-menu-link" id="header-nav-menu-link-4" title="plus+curve" data-target="#header-jumbo-menu-4">
                                        plus+curve <i class="fa fa-chevron-down" aria-hidden="true"></i>{" "}
                                        <div id="header-jumbo-menu-4" className="header-jumbo-menu">
                                                <div className="container-lg">
                                                <div className="row d-flex justify-content-evenly header-jumbo__pad full_width">                                                     
                                                        <div className="col-sm-4 col-md-3 col-lg">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
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
                                                        <div className="col-sm-4 col-md-3 col-lg">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
                                                                <li className="jumbo-menu-heading jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link uppercase ">Dresses</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">all dresses</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">mini dresses</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">midi dresses</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">maxi dresses</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">casual dresses</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">formal dresses</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-4 col-md-3 col-lg">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
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
                                                                        <a className="jumbo-menu-link">shirts &amp; blouses</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">short sleeve tops</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">long sleeve tops</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">bodysuits</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">hoddies &amp; sweatshirts</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-4 col-md-3 col-lg">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
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
                                                                        <a className="jumbo-menu-link">pants</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">jeans</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">shorts</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">skirts</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">sweatpants</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">leggings</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-4 col-md-3 col-lg">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
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
                                                                        <a className="jumbo-menu-link">outerwear</a>
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
                                    </li>
                                    <li className="menu-link header-nav-menu-link" id="header-nav-menu-link-5" title="kids" data-target="#header-jumbo-menu-5">
                                            kids <i class="fa fa-chevron-down" aria-hidden="true"></i>{" "}
                                            <div id="header-jumbo-menu-5" className="header-jumbo-menu">
                                                <div className="container-lg">
                                                    <div className="row d-flex justify-content-evenly header-jumbo__pad full_width">
                                                        <div className="col-md">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
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
                                                                        <a className="jumbo-menu-link">shop all girls</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-heading jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">shop all boys</a>
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
                                                        <div className="col-md">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
                                                                <li className="jumbo-menu-heading jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link uppercase ">Girls</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">all girls</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">dresses</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">tops</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">bottoms</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">shoes</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">accessories</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md">
                                                            <ul className="jumbo-menu-items mar_bottom_20">
                                                                <li className="jumbo-menu-heading jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link uppercase ">Boys</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">All boys</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">tops</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">bottoms</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">outerwear</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">shoes</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">accessories</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-5">
                                                            <div className="jumbo-menu-img d-flex flex-row justify-content-between">
                                                                <div>
                                                                    <img src="/img/kids_fashion.jpg" alt="kids fashion" style={{width: '400px'}} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                    </li>
                                    <li className="menu-link header-nav-menu-link" id="header-nav-menu-link-6" title="accessories" data-target="#header-jumbo-menu-6">
                                            accessories <i class="fa fa-chevron-down" aria-hidden="true"></i>{" "}
                                            <div id="header-jumbo-menu-6" className="header-jumbo-menu">
                                                <div className="container-lg">
                                                    <div className="row d-flex justify-content-around header-jumbo__pad full_width">
                                                        <div className="col">
                                                            <ul className="jumbo-menu-items">
                                                                <li className="jumbo-menu-heading jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link uppercase">Accessories</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">all accessories</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">sunglasses</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">jewelry</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">face masks</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">bags &amp; purses</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">headwear &amp; hair pieces</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">makeup</a>
                                                                    </Link>
                                                                </li>
                                                                <li className="jumbo-menu-item">
                                                                    <Link href="#">
                                                                        <a className="jumbo-menu-link">phone accessories</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-8">
                                                            <div className="jumbo-menu-img d-flex flex-row justify-content-around">
                                                                <div>
                                                                    <img src="/img/accessories_girl.jpg" alt="accessories" style={{width: '200px'}} />
                                                                    
                                                                </div>
                                                                <div className="collapse-img">
                                                                    <img src="/img/makeup_girl.jpg" alt="girl with makeup" style={{width: '200px'}} />
                                                                   
                                                                </div>
                                                                <div className="collapse-img collapse-img-primary">
                                                                    <img src="/img/facemask.jpg" alt="boy with face mask" style={{width: '200px'}} />
                                                                   
                                                                </div>                                   
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </li>
                                    <li className="menu-link header-nav-menu-link" id="header-nav-menu-link-7" title="sale" data-target="#header-jumbo-menu-7">
                                            sale <i class="fa fa-chevron-down" aria-hidden="true"></i>{" "}
                                            <div id="header-jumbo-menu-7" className="header-jumbo-menu">
                                                <div className="container-lg">
                                                    <div className="row d-flex justify-content-around header-jumbo__pad full_width">
                                                        <div className="col">
                                                            <ul className="jumbo-menu-items">
                                                                <li className="jumbo-menu-heading jumbo-menu-item">
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
                                                            <div className="jumbo-menu-img d-flex flex-row justify-content-around">
                                                                <div>
                                                                    <img src="/img/Jeans.jpg" alt="new jeans" style={{width: '200px'}} />
                                                                    
                                                                </div>
                                                                <div  className="collapse-img">
                                                                    <img src="/img/Jumpsuit.jpg" alt="new jumpsuit" style={{width: '200px'}} />
                                                                    
                                                                </div>
                                                                <div  className="collapse-img">
                                                                    <img src="/img/purple__dress.jpg" alt="new purple dress" style={{width: '200px'}} />
                                                                    
                                                                </div>  
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </li>
                                    <li className="menu-link header-nav-menu-link" id="header-nav-menu-link-8" title="collections" data-target="#header-jumbo-menu-8">
                                        collections <i class="fa fa-chevron-down" aria-hidden="true"></i>{" "}
                                        <div id="header-jumbo-menu-8" className="header-jumbo-menu">
                                            <div className="container-lg">
                                                <div className="row d-flex justify-content-around header-jumbo__pad full_width">
                                                    <div className="mar_bottom_20">
                                                        <a href="/collections">
                                                            <div className="jumbo-menu-img">
                                                                <img src="/img/charli_collection.jpg" alt="charli collection" style={{width: '200px'}} />
                                                            </div>
                                                            <div className="collection-title">
                                                                Charli X Nova
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="mar_bottom_20">
                                                        <a href="/collections">
                                                            <div className="jumbo-menu-img">
                                                                <img src="/img/hawaiian_shirt.jpg" alt="boy with hawaiian shirt" style={{width: '200px'}} />                                        
                                                            </div>
                                                            <div className="collection-title">
                                                                Nova Summer Collection
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="mar_bottom_20">
                                                        <a href="/collections">
                                                            <div className="jumbo-menu-img">
                                                                <img src="/img/Jacket.jpg" alt="girl with winter jacket" style={{width: '200px'}} />
                                                                
                                                            </div>
                                                            <div className="collection-title">
                                                                Winter Wonderland
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="mar_bottom_20">
                                                        <a href="/collections">
                                                            <div className="jumbo-menu-img">
                                                                <img src="/img/beige__dress.jpg" alt="girl with beige dress" style={{width: '200px'}} />                                                         
                                                            </div>
                                                            <div className="collection-title">
                                                                As seen on Instagram
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
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