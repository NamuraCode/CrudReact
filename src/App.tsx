import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Error from './components/Error/Error'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <Error />,
    },
  ]);

  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
