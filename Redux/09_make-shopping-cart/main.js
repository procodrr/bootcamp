import { createRoot } from 'react-dom/client'
import App from './App'
import { store } from './store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Provider } from './my-react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
])

createRoot(document.querySelector('#root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
