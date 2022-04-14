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

function App() {
	const initialState = useInitialState()
    return (
			<AppContext.Provider value={initialState}>
				<div className="App">
					<Header />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/Cart" element={<Cart />} />
						<Route path="*" element={<NotFound />} />
						<Route path="/ProductList" element={<ProductList />} />
						<Route path="/ProductList/:type" element={<ProductList />} />
						{/*
						<Route path='/Login' element={<Loguin/>}/>
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
			</AppContext.Provider>
		);
}

export default App;
