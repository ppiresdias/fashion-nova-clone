import Footer from '../components/footer';
import Header from '../components/header'

export default function Layout(props) {
	return (
		<div>
			<Header />
			<div className="content-wrapper">{props.children}</div>
			<Footer />
		</div>
	);
}
