import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'

export const NothigSelectedView = () => {
  return (
    <Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justifyContent='center'
			sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main' }}
    >
      <Grid>
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      </Grid>
      <Grid>
        <Typography color='white' variant='h5'>Select or create an entry</Typography>
      </Grid>

    </Grid>
  )
}
