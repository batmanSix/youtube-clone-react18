import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/material/Button';
import Nav from "@/components/Nav";
import Box from '@mui/material/Box'
// import Main from './layout/Main'
import Header from '@/components/Header'
import Layout from '.';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box
        id='app-container'
        sx={{
          height: '100vh',
          width: '100vw',
          transform: 'scale(1)',
          overflowY: 'hidden',
          overflowX: 'hidden',
          boxSizing: 'border-box',
          display: 'grid',
          gap: 1,
          gridTemplateAreas: '"left-nav main" "now-playing-bar now-playing-bar"',
          gridTemplateRows: '1fr auto',
          gridTemplateColumns: 'auto 1fr',
          transition: 'border-width .3s ease',
        }}
      >

        <Header />
        <Nav />
        <Layout></Layout>
      </Box>
    </>
  )
}

export default App
