import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Error from './components/Error/Error'
import Header from './utils/Header/Header'

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
        <Header/>
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
