import './App.css';
import { Routes, Route } from "react-router-dom";
import { Header } from './Components/Header'
import { Footer } from './Components/Footer/Index';
import { Home } from './Routes/Home'
import { Cart } from './Routes/Cart'

function App() {
    return (
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path='/Cart' element={<Cart />}/>
					{/*
					<Route path='/Login' element={<Loguin/>}/>
					<Route path='/ProductList' element={<ProductList />}/>
					<Route path='/MoldesResina' element={<Resina />}/>
					<Route path='/MoldesVelas' element={<Velas />}/>
					<Route path='/3D' element={<Impresion />}/>
					<Route path='/Outlet' element={<Outlet />}/>
					<Route path='/Checkout' element={<Checkout />}/>
					<Route path='/Checkout/PayForm' element={< />}/>
					<Route path='/Checkout/PayForm/Payment' element={< />}/>
					*/}
				</Routes>
				<Footer />
			</div>
		);
}

export default App;
