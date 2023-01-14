import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Error from './components/Error/Error'
import Header from './utils/Header/Header'
import Footer from './utils/Footer/Footer'

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
       <Footer/>
    </div>
  );
}

export default App;
