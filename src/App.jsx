
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './Login'
import Home from './Home'
import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  }
]);

function App() {

  return <RouterProvider router={router} />

}

export default App
