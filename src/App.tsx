import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { AuthRoutes } from './app/modules/auth/auth.routes'
import LoginPage from './app/modules/auth/login.page'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: AuthRoutes.LOGIN,
    element: <LoginPage />
  },
])

function App() {

  return (
    <RouterProvider router={routes} />
  )
}

export default App;
