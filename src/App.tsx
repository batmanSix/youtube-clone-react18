import { RouterProvider } from "react-router-dom"
import router from '@/router';
import { MotionLazy } from './components/animate/motion-lazy';
import Layout from "./layout";

function App() {
  return (
    <>
      <MotionLazy>
        <RouterProvider router={router} />
      </MotionLazy>
    </>
  )
}

export default App



