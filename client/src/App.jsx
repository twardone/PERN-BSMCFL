import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'

//this is the route to your pages.
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/about',
    element: (
      <div>
        <h1>About Page</h1>
      </div>
    ),
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
//this makes it so you can utilize this component in the index.html file
export default App
