import {createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import HomePage from './routes/Home';
import ProductsPage from './routes/Products';
import RootLayout from './routes/Root';
import ErrorPage from './routes/Error';
import ProductDetailPage from './routes/ProductDetail';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//   </Route>
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { path: "/", element: <HomePage /> },
      { index: true, element: <HomePage /> },
      { path: "/products", element: <ProductsPage />},
      { path: "/products/:productId", element: <ProductDetailPage />}
    ],
  },
  
]);

// const router = createBrowserRouter(routeDefinitions)

function App() {
  return <RouterProvider router={router} />
}

export default App;
