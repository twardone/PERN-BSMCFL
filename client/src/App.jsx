import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
} from './pages'

//this is the route to your pages.
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true, //this is the landing page http://localhost:5173/
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
//this makes it so you can utilize this component in the index.html file
export default App
