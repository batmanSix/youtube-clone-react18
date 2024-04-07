import { useCallback, useRef, useState } from 'react'

import { Box, ThemeProvider } from '@mui/material'
// import { MaterialDesignContent, SnackbarProvider } from 'notistack'
// import { QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { styled } from '@mui/material/styles'
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import useInForeground from '@/hooks/useInForeground'
import useCreateTheme from '@/hooks/useCreateTheme'
import { useAppStore } from '@/store/app'
import Layout from '.'



function App() {
  const { theme } = useCreateTheme()
  const { showNowPlayingBar } = useAppStore()

  const cacheOpacity = useRef(0)
  const appRef = useRef<HTMLDivElement>()
  const overlayContent = useRef<HTMLDivElement>()
  const [showBTT, setShowBTT] = useState(false)
  const { isActive: atHome } = useInForeground('home')

  const handleMainScroll = useCallback((instance: any, e: any) => {
    const scrollTop = e.target.scrollTop
    if (!overlayContent.current)
      overlayContent.current = e.target as HTMLDivElement

    const opacity = getOpacity(scrollTop, 64 + 56, 56)
    if (Number(cacheOpacity.current).toPrecision(2) !== Number(opacity).toPrecision(2)) {
      requestAnimationFrame(() => {
        appRef.current && appRef.current.style.setProperty('--top-bar-opacity', `${Number(opacity).toPrecision(2)}`)
      })
    }
    setShowBTT(scrollTop > 56)
    cacheOpacity.current = opacity
  }, [atHome])


  return (
    <ThemeProvider theme={theme}>
      <Box
        ref={appRef}
        id='app-container'
        sx={{
          bgcolor: theme.palette.surface.main,
          color: theme.palette.onSurface.main,
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
    </ThemeProvider>
  )
}

export function getOpacity(current: number, range = 1, offset = 0) {
  // Check if n is greater than t, return 1
  if (offset > range)
    return 1

  // Calculate normalized value
  let opacity = (current - offset) / (range - offset)

  // Handle NaN (Not a Number)
  if (Number.isNaN(opacity))
    opacity = 1

  // Ensure the normalized value is between 0 and 1
  return Math.min(Math.max(opacity, 0), 1)
}

export default App
