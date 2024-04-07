import { InputBase, Paper } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { m } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
  const theme = useTheme()
  const navigate = useNavigate()
  function handleSearch(e: any) {
    const { code, target } = e
    if (code === 'Enter' && !!target.value)
      navigate(`/search`, { replace: true, state: { query: target.value } })

  }
  return <m.div
    className='no-drag-area'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.3 } }}
  >
    <Paper
      elevation={0}
      sx={{ display: 'flex', alignItems: 'center', bgcolor: theme.palette.surfaceVariant.main, borderRadius: 16, width: 240, height: 42 }}
    >
      <InputBase
        autoFocus
        sx={{ ml: 2, flex: 1, fontSize: 14 }}
        placeholder="搜索"
        inputProps={{ 'aria-label': 'search anything' }}
        onKeyDown={handleSearch}
      />
    </Paper>
  </m.div>
}
