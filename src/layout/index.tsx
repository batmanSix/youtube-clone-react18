import { useTheme } from '@mui/material'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
// import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import useInForeground from '../hooks/useInForeground'
import { useAppStore } from '../store/app'
import HeaderSpacer from '@/components/HeaderSpacer'

export default function Layout({
  onScroll,
}: {
  onScroll?: (instance: any, e: Event) => void
}) {
  const { rail } = useAppStore()
  const theme = useTheme()
  const { isActive: inDetail } = useInForeground([
    'playlist',
    'album',
    'artist',
    'daily',
    'local-album',
    'video',
    'moods_and_genres_detail',
    'list_collection',
    'cloud',
    'workbench',
    'recent',
    'my_podcast',
    'podcast_detail',
    'podcast_genres',
  ])

  return (
    <Box
      sx={{
        gridArea: 'main',
        overflowY: 'hidden',
        height: '100vh',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.easeIn,
          duration: theme.transitions.duration.complex,
        }),
      }}
      component="main"
      className="hide-scrollbar flex"
    >
      <div className='main-view-container flex-1 min-h-0 relative w-full'>
        <div
          className='h-full'
          defer
          events={{
            scroll: onScroll,
          }}
          options={{
            overflow: {
              x: 'hidden',
            },
            scrollbars: {
              visibility: 'hidden',
            },
          }}>
          {
            !inDetail && <HeaderSpacer></HeaderSpacer>
          }
          <Box
            sx={{
              minHeight: 'calc(((100vh - 64px) - 90px) - 519px)',
              pr: inDetail ? 0 : 0.5,
            }}
          >
            <AnimatePresence mode='wait'>
              <Outlet />
            </AnimatePresence>
          </Box>
        </div>
      </div>

    </Box>
  )
}
