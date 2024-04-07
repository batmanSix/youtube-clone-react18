import { RouterProvider } from "react-router-dom"
import router from '@/router';
import { MotionLazy } from './components/animate/motion-lazy';

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



