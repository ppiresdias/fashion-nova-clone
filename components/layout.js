import Footer from '../components/footer';
import Header from '../components/header'
import Header2 from '../components/header2'

export default function Layout(props) {
	return (
		<div>
			<Header2 />
			<div>{props.children}</div>
			<Footer />
		</div>
	);
}