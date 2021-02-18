
import {ImSearch, ImFacebook, ImTwitter, ImYoutube, ImInstagram, ImPinterest} from 'react-icons/im'
import {FaCcStripe, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcDiscover} from 'react-icons/fa'

const Footer = () => {
	return (
		// FOOTER
		<div className='footer-wrapper'>
			<div className="container footer-container">
				<div className="row footer__content">
					<div className="col footer__menu">
						<div className="footer__menu__header">Quick Links</div>
						<ul className="footer__menu__links">
							<li className="footer__menu__link__item">Home</li>
							<li className="footer__menu__link__item">Home</li>
							<li className="footer__menu__link__item">Home</li>
							<li className="footer__menu__link__item">Home</li>
							<li className="footer__menu__link__item">Home</li>
						</ul>
					</div>

					<div className="col footer__menu">
						<div className="footer__menu__header">My Account</div>
						<ul className="footer__menu__links">
							<li className="footer__menu__link__item">Home</li>
							<li className="footer__menu__link__item">Home</li>
							<li className="footer__menu__link__item">Home</li>
							<li className="footer__menu__link__item">Home</li>
							<li className="footer__menu__link__item">Home</li>
						</ul>
					</div>

					<div className="col footer__menu">
						<div className="footer__menu__header">Customer Service</div>
						<ul className="footer__menu__links">
							<li className="footer__menu__link__item">Home</li>
							<li className="footer__menu__link__item">Home</li>
							<li className="footer__menu__link__item">Home</li>
							<li className="footer__menu__link__item">Home</li>
							<li className="footer__menu__link__item">Home</li>
						</ul>
					</div>

					<div className="col footer__menu">
						<div className="footer__menu__header">Newsletter</div>
						<div className="row footer__newsletter__info">
							Signup to our newsletter to receives updates and promotions.
						</div>
						<div className="row footer__signup">
							<form className="form-inline">
								<input className="form-control newsletter-input" type="search" placeholder="plus black top" aria-label="Search"/>
								<button className="btn newsletter-btn" type="submit">
								<ImSearch/>
								</button>
								<div className="form-group form-check">
									<input type="checkbox" className="form-check-input" id="exampleCheck1" />
									<label className="form-check-label" htmlFor="exampleCheck1">I have read and agree to the Privacy Policy</label>
								</div>
							</form>
						</div>
						<div className="row footer__socials">
							<div className="footer__social__item"> <ImFacebook/> </div>
							<div className="footer__social__item"> <ImTwitter/> </div>
							<div className="footer__social__item"> <ImInstagram/> </div>
							<div className="footer__social__item"> <ImYoutube/> </div>
							{/* <div className="footer__social__item"> <ImPinterest/> </div> */}
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