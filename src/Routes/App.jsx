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
function App() {
	const initialState = useInitialState()
    return (
			<AppContext.Provider value={initialState}>
				<div className="App">
					<Header />
					<Routes>
						<Route exact path="/mementica3d" element={<Home />} />
						<Route path="*" element={<NotFound />} />
						<Route path="/ProductList" element={<ProductList />} />
						<Route path="/ProductList/:type" element={<ProductList />} />
						<Route exact path="/Cart" element={<Cart />} />
						<Route exact path="/Checkout" element={<Checkout />} />
						<Route exact path="/Checkout/Payment" element={<Payment />} />
						{/*
						<Route path='/Login' element={<Loguin/>}/>
						<Route path='/MoldesResina' element={<Resina />}/>
						<Route path='/MoldesVelas' element={<Velas />}/>
						<Route path='/3D' element={<Impresion />}/>
						<Route path='/Outlet' element={<Outlet />}/>
						<Route path='/Checkout/PayForm' element={< />}/>
						<Route path='/Checkout/PayForm/Payment' element={< />}/>
						*/}
					</Routes>
					<Footer />
				</div>
			</AppContext.Provider>
		);
}

export default App;
