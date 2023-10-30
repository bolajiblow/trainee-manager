import './App.css';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import "./index.css";
import Trainees from './pages/Trainees';
import ViewTrainee from './pages/ViewTrainee';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path : '/trainees',
    element : <Trainees />
  },
  {
    path : '/view-trainee',
    element : <ViewTrainee />
  }
]);
function App() {
  return    <RouterProvider router={router} />
}
export default App;

