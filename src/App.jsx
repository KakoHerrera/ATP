import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Singles from './pages/Singles';
import Doubles from './pages/Doubles';
import RootLayout from './components/RootLayout';
const router = createBrowserRouter([
 {
   path: '/',
   element: <RootLayout />,
   children: [
     {
       path: '/',
       element: <Singles />,
     },
     {
       path: '/Doubles',
       element: <Doubles />,
     },
   ],
 },
]);
const App = () => {
   return (
       <RouterProvider router={router} />
   );
}
export default App;
