import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/home/HomePage'
import PicturePage from '../pages/picture/PicturePage'

export default createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/picture/:pictureId",
    element: <PicturePage />,
  },
])