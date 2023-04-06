import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Cart } from './components/Cart/Cart';
import { ItemDetailsContainer } from './components/ItemDetailsContainer/ItemDetailsContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import { CartProvider } from './context/CartContext';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { AuthProvider } from './context/AuthContext';
import { Profile } from './components/Profile/Profile';
import { LoggedInRoutes } from './routes/LoggedInRoutes';
import { LoggedOutRoutes } from './routes/LoggedOutRoutes';

function App() {
	return (
		<AuthProvider>
			<CartProvider>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path='/' element={<ItemListContainer />} />
						<Route
							path='/category/:categoryId'
							element={<ItemListContainer />}
						/>
						<Route path='/detail/:itemId' element={<ItemDetailsContainer />} />
						<Route path='/cart' element={<Cart />} />

						<Route element={<LoggedOutRoutes />}>
							<Route path='/login' element={<Login />} />
							<Route path='/register' element={<Register />} />
						</Route>

						<Route element={<LoggedInRoutes />}>
							<Route path='/profile' element={<Profile />} />
						</Route>

						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</BrowserRouter>
			</CartProvider>
		</AuthProvider>
	);
}

export default App;
