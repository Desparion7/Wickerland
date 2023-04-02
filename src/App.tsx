import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './screens/Layout';
import HomePage from './screens/HomePage';
import ShopScreen from './screens/ShopScreen';
import BlogScreen from './screens/BlogScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ContactScreen from './screens/ContactScreen';
import ArticleScreen from './screens/ArticleScreen';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/sklep',
				element: <ShopScreen />,
				children: [
					{
						path: '*',
						element: <ShopScreen />,
					},
				],
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
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
