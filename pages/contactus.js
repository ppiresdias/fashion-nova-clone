import React, { Component } from "react";
import Layout from "../components/layout"
import Head from "next/head"

const ContactUs = () => {
	
	return (
		
		<section className="contact" >
			<Head>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous"/>
				<title>Reach out</title>
			</Head>
			<div className="contact__wrapper container-fluid">
				<h1 className="contact__heading">Reach out to us...</h1>
				<h2 className="contact__subHeading">We're <strong>never </strong>too far away</h2>
			</div>
			<div className="contact__content container" >
				<section className="row col-md-12">
					<div className="contact__contentJoin col-md col-lg-6">
						<h2 className="contact__contentJoinH2">Happiness needs company, tell your friends!</h2>
						<h4 className="contact__contentJoinH4">Become an affiliate!</h4>
						<button className="contact__contentJoinButton ">Learn How</button>
					</div>
					<div className="col-md col-lg-6">
						<img className="col contact__img" src="/img/happyshopper.jpg"/>
					</div>
				</section>
				<h1 className="contact__formTitle">How are we doing?</h1>
				<section className="contact__form row col-md-12">
				<form className="col-lg-6 col-md">
					<fieldset>
					    <legend>Let us know</legend>
					    <div className="contact__formGroup">
					        <label for="f-name">First Name: <abbr title="required" aria-label="required">*</abbr></label>
						    <input className="contact__formInput col" id="f-name" type="text" placeholder="First Name"></input>
					    </div>
					    <div className="contact__formGroup">
					        <label for="l-name">Last Name: <abbr title="required" aria-label="required">*</abbr></label>
						    <input className="contact__formInput col" id="l-name" type="text" placeholder="Last Name"></input>
					    </div>
					    <div className="contact__formGroup">
					        <label for="email">Email: <abbr title="required" aria-label="required">*</abbr></label>
	                        <input className="contact__formInput col" id="email" type="email" placeholder="Email"></input>
					    </div>
					    <div className="contact__formGroup">
					        <label for="country">Country: <abbr title="required" aria-label="required">*</abbr></label>
	                        <input className="contact__formInput col" id="country" type="text" placeholder="Country"></input>
					    </div>
					    <div className="contact__formGroup">
				        	<label for="comment">Comment: <abbr title="required" aria-label="required">*</abbr></label>
                            <textarea className="contact__formInputCom col" id="comment" type="text" placeholder="Comments"></textarea>
					    </div>	
					    <button className="col-lg- col-md contact__formButton">Submit</button>
					</fieldset>
					</form>
					<div className="contact__formCustomer col-lg-6 col-md">
						<h3>Our customers always come first, feel free to let us know how we are 
							doing so we can best serve you.</h3>
					</div>			
				</section>
			</div>
		</section>
		
	);
};

export default ContactUs;
