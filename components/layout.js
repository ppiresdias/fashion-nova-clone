import Footer from '../components/footer';
import Header from '../components/header'
import Navigation from '../components/navigation'

export default function Layout(props) {
	return (
		<div>
			<Header />
			{/* <Navigation /> */}
			<div>{props.children}</div>
			<Footer />
		</div>
	);
}