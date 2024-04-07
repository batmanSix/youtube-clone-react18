import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import SearchBar from '@/components/SearchBar'
// import Account from '@/components/Account'
import { useAppStore } from '@/store/app'
import SearchToggle from '@/components/SearchToggle'
import NavigateButton from '@/components/NavigateButton'
import DarkModeToggle from './DarkModeToggle'

export default function Header() {
  const theme = useTheme()
  const { showSearch } = useAppStore()
  return <Box
    className='flex gap-2 items-center drag-area'
    sx={{
      height: 78,
      zIndex: 2,
      gridArea: 'main',
      pr: 1.5,
      position: 'relative',
    }}
  >
    <Box sx={{
      height: 44,
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      gap: 1,
    }}>
      <NavigateButton />
      {
        showSearch && <SearchBar />
      }
      <div className='flex-auto'></div>
      <SearchToggle />
      <DarkModeToggle />
      {/* <Account /> */}
    </Box>
    <Box sx={{
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      transition: 'background-color,opacity .25s',
      bgcolor: theme.palette.surface.main,
      opacity: 'var(--top-bar-opacity, 0)',
      zIndex: -1,
    }}></Box>

    {/* <Account /> */}
  </Box>
}
