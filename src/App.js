import './App.css';
import LandingPage from './Pages/LandingPage';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import ResumeBuilderForm from './Pages/ResumeBuilderForm';

const router = createBrowserRouter([
  
    {path:'/', element: <LandingPage/>},
    {path:'/ResumeBuilderForm', element: <ResumeBuilderForm/>},
    // {path:'/about', element: <About/>},
    // {path:'/certificates', element: <Certificates/>}
  
  
])
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
