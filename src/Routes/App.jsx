import './App.css';
import AppContext from '../Context/AppContext';
import useInitialState from '../Hooks/useInitialState';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../Containers/Home.jsx';
import { Cart } from '../Containers/Cart/';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { NotFound } from '../Containers/NotFound';
import { ProductList } from '../Containers/ProductList';
import { Checkout } from '../Containers/Checkout';
import { Payment } from '../Containers/Payment';
import { Form2 } from '../Components/Form2';
import { PayInfo } from '../Containers/PayInfo';
import { PayCheck } from '../Containers/PayCheck';

function App() {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<div className="App">
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/ProductList" element={<ProductList />} />
					<Route
						path="/ProductList/:type"
						element={<ProductList />}
					/>
					<Route exact path="/Cart" element={<Cart />} />
					<Route exact path="/Checkout" element={<Checkout />} />
					<Route
						exact
						path="/Checkout/Payment"
						element={<Payment />}
					/>
					<Route exact path="/Checkout/form" element={<Form2 />} />
					<Route
						exact
						path="/Checkout/form/payinfo"
						element={<PayInfo />}
					/>
					<Route
						exact
						path="/Checkout/form/payinfo/paycheck"
						element={<PayCheck />}
					/>
				</Routes>
				<Footer />
			</div>
		</AppContext.Provider>
	);
}

export default App;
