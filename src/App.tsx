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
import CartScreen from './screens/CartScreen';
import StatuteSceen from './screens/StatuteSceen';
import PolicyScreen from './screens/PolicyScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentScreen from './screens/PaymentScreen';
import PasswordRecoveryScreen from './screens/PasswordRecoveryScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import OrdersListScreen from './screens/OrdersListScreen';
import RequireAuth from './components/RequireAuth/RequireAuth';
import RefreshLogin from './components/RefreshLogin.tsx/RefreshLogin';
import OrderInfoScreen from './screens/OrderInfoScreen';
import ChangeAddressScreen from './screens/ChangeAddressScreen';

const router = createBrowserRouter([
  {
    element: <RefreshLogin />,
    children: [
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
            path: '/sklep',
            element: <ShopScreen />,
            children: [
              {
                path: ':category',
                element: <ShopScreen />,
                children: [{ path: ':subcategory', element: <ShopScreen /> }],
              },
              {
                path: '*',
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
          {
            element: <RequireAuth />,
            children: [
              {
                path: '/zamówienia',
                element: <OrdersListScreen />,
              },
              {
                path: '/zamówienia/:page',
                element: <OrdersListScreen />,
              },
              {
                path: '/zamówienie/:id',
                element: <OrderInfoScreen />,
              },
              {
                path: '/adres',
                element: <ChangeAddressScreen />,
              },
            ],
          },
          {
            path: '/koszyk',
            element: <CartScreen />,
          },
          {
            path: '/zamówienie',
            element: <OrderScreen />,
          },
          {
            path: '/płatność/:id',
            element: <PaymentScreen />,
          },
          {
            path: '/ulubione',
            element: <FavoritesScreen />,
          },
          {
            path: '/regulamin',
            element: <StatuteSceen />,
          },
          {
            path: '/polityka',
            element: <PolicyScreen />,
          },
          {
            path: '/odzyskanie',
            element: <PasswordRecoveryScreen />,
          },
          {
            path: '/nowehasło',
            element: <NewPasswordScreen />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
