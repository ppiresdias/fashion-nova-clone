
import Link from "next/link";
import {ImSearch, ImFacebook, ImTwitter, ImYoutube, ImInstagram, ImPinterest} from 'react-icons/im'
import {FaCcStripe, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcDiscover, FaInstagram, FaSnapchatGhost} from 'react-icons/fa'
import {SiTiktok} from "react-icons/si"

const Footer = () => {
	return (
		// FOOTER
		<div className='footer-wrapper'>
			<div className="container footer-container">
				<div className="row footer__content">
					<div className="col-6 col-sm-4 col-xl-3 footer__menu">
						<div className="footer__menu__header">NOVA</div>
						<ul className="footer__menu__links">
							<li className="footer__menu__link__item">
								<Link href="#">
									<a>about us</a>
                                </Link>
							</li>
							<li className="footer__menu__link__item">
								<Link href="/blog">
									<a>blog</a>
                                </Link>
							</li>
							<li className="footer__menu__link__item">
								<Link href="#">
									<a>wanna collab?</a>
                                </Link>
							</li>
							<li className="footer__menu__link__item">
								<Link href="#">
									<a>affiliate</a>
                                </Link>
							</li>
							<li className="footer__menu__link__item">
								<Link href="#">
									<a>careers</a>
                                </Link>
							</li>
							<li className="footer__menu__link__item">
								<Link href="#">
									<a>privacy policy</a>
                                </Link>
							</li>
							<li className="footer__menu__link__item">
								<Link href="#">
									<a>terms and conditions</a>
                                </Link>
							</li>
						</ul>
					</div>

					<div className="col-6 col-sm-4 col-xl-3 footer__menu">
						<div className="footer__menu__header">Account</div>
						<ul className="footer__menu__links">
							<li className="footer__menu__link__item">
								<Link href="#">
									<a>my account</a>
                                </Link>
							</li>
							<li className="footer__menu__link__item">
								<Link href="#">
									<a>my wishlist</a>
                                </Link>
							</li>
							<li className="footer__menu__link__item">
								<Link href="#">
									<a>view bag</a>
                                </Link>
							</li>
							<li className="footer__menu__link__item">
								<Link href="#">
									<a>track order</a>
                                </Link>
							</li>
							<li className="footer__menu__link__item">
								<Link href="#">
									<a>order history</a>
                                </Link>
							</li>
							<li className="footer__menu__link__item">
								<Link href="#">
									<a>gift cards</a>
                                </Link>
							</li>
						</ul>
					</div>

					<div className="col-6 col-sm-4 col-xl-3 footer__menu">
						<div className="footer__menu__header">Customer Service</div>
						<ul className="footer__menu__links">
							<li className="footer__menu__link__item">
								<Link href="/contactus">
									<a>contact us</a>
                                </Link>
							</li>
							<li className="footer__menu__link__item">
								<Link href="#">
									<a>shipping</a>
                                </Link>
							</li>
							<li className="footer__menu__link__item">
								<Link href="#">
									<a>returns</a>
                                </Link>
							</li>
							<li className="footer__menu__link__item">
								<Link href="#">
									<a>size guide</a>
                                </Link>
							</li>
							<li className="footer__menu__link__item">
								<Link href="#">
									<a>sitemap</a>
                                </Link>
							</li>
						</ul>
					</div>

					<div className="col-12 col-sm-12 col-xl-3 footer__menu">
						<div className="footer__menu__header">Newsletter</div>
						<div className="row footer__newsletter__info">
							Signup to our newsletter to receives updates and promotions.
						</div>
						<div className="row footer__signup">
							<form className="form-inline">
								<input className="form-control newsletter-input" type="search" placeholder="Enter email" aria-label="Search"/>
								<button className="btn newsletter-btn" type="submit">
								Go
								</button>
								<div className="form-group form-check">
									<input type="checkbox" className="form-check-input" id="exampleCheck1" />
									<label className="form-check-label" htmlFor="exampleCheck1">I have read and agree to the Privacy Policy</label>
								</div>
							</form>
						</div>
						<div className="row footer__socials">
							<div className="footer__social__item" id="instagram-logo"> <FaInstagram/> </div>						
							<div className="footer__social__item" id="tiktok-logo"> <SiTiktok/> </div>
							<div className="footer__social__item" id="snapchat-logo"> <FaSnapchatGhost/> </div>
							<div className="footer__social__item" id="facebook-logo"> <ImFacebook/> </div>
						</div>
					</div>
				</div>
				<hr></hr>
				<div className="row footer__bottom">
					<div className="col-9 footer__copyright">
						Copyright &#169; 2021. Fashion Nova Clone. All Rights Reserved
					</div>
					{/* <div className="col"></div> */}
					<div className="col-3 footer__payments">
						<ul className="payments__list">
							<li className="payment__item"> <FaCcStripe/> </li>
							<li className="payment__item"> <FaCcVisa/> </li>
							<li className="payment__item"> <FaCcMastercard/> </li>
							<li className="payment__item"> <FaCcPaypal/> </li>
							<li className="payment__item"> <FaCcDiscover/> </li>
						</ul>
					</div>
				</div>
			</div>
        </div>
	);
};

export default Footer;