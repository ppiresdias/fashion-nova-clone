import Footer from '../components/footer';
import Header from '../components/header'

export default function Layout(props) {
	return (
		<div>
			<Header />
			<div>{props.children}</div>
			<Footer />
		</div>
	);
}
