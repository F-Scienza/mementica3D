import './App.css';
import AppContext from '../Context/AppContext'
import useInitialState from '../Hooks/useInitialState';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../Containers/Home.jsx'
import { Cart } from '../Containers/Cart/'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import { NotFound }  from '../Containers/NotFound';
import { ProductList } from '../Containers/ProductList'
import { Checkout } from '../Containers/Checkout'
import { Payment } from '../Containers/Payment'
import Form2 from '../Components/Form2';
function App() {
	const initialState = useInitialState()
    return (
			<AppContext.Provider value={initialState}>
				<div className="App">
					<Header />
					<Routes>
						<Route exact path="/mementica3d" element={<Home />} />
						<Route path="*" element={<NotFound />} />
						<Route path="/mementica3d/ProductList" element={<ProductList />} />
						<Route path="/mementica3d/ProductList/:type" element={<ProductList />} />
						<Route exact path="/mementica3d/Cart" element={<Cart />} />
						<Route exact path="/mementica3d/Checkout" element={<Checkout />} />
						<Route exact path="/mementica3d/Checkout/Payment" element={<Payment />} />
						<Route exact path="/mementica3d/Checkout/form2" element={<Form2/>} />

						{/*
						<Route path='/Login' element={<Loguin/>}/>
						<Route path='/Checkout/PayForm/Payment' element={< />}/>
						*/}
					</Routes>
					<Footer />
				</div>
			</AppContext.Provider>
		);
}

export default App;
