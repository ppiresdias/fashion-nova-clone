import Footer from '../components/footer';
import Header from '../components/header'

export default function Layout(props) {
	const topFunction = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
	return (
		<div>
			<Header />
			<button onClick={topFunction} title="Back to top" id="topButton" className="top-button"><i className="fa fa-chevron-up top-button__icon" aria-hidden="true"></i></button>
			<div className="content-wrapper">{props.children}</div>
			<Footer />
		</div>
	);
}
