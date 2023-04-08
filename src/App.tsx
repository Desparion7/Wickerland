import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorBoundary from './screens/ErrorBoundary';
import Layout from './screens/Layout';
import HomePage from './screens/HomePage';
import ShopScreen from './screens/ShopScreen';
import BlogScreen from './screens/BlogScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ContactScreen from './screens/ContactScreen';
import ArticleScreen from './screens/ArticleScreen';
import ProductScreen from './screens/ProductScreen';
import SignUpScreen from './screens/SignUpScreen';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '*',
				element: <ErrorBoundary />,
			},
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/sklep/:category?/:subcategory?',
				element: <ShopScreen />,
				children: [
					{
						path: 'szukaj/:search?',
						element: <ShopScreen />,
					},
					{
						path: 'cena/:min?/:max?',
						element: <ShopScreen />,
					},
				],
			},
			{
				path: '/produkt/:name/:id',
				element: <ProductScreen />,
			},
			{
				path: '/blog',
				element: <BlogScreen />,
			},
			{
				path: '/blog/:id',
				element: <ArticleScreen />,
			},
			{
				path: '/onas',
				element: <AboutUsScreen />,
			},
			{
				path: '/kontakt',
				element: <ContactScreen />,
			},
			{
				path: '/rejestracja',
				element: <SignUpScreen />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

// ustawić typ gdy bedzie backend dla product
