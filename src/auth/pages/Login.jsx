import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'
import { chekingAuthentication, startGoogleSignIn, startLoginWithEmail } from '../../store/auth'
import { AuthLayout } from '../layout/AuthLayout'

export const Login = () => {

  const { status, errorMessage } = useSelector(state => state.auth)

  const { email, password, onInputChange } = useForm({
    email: '',
    password: '',
  })

  const isAuthenticating = useMemo(() => status === 'cheking', [status])

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(chekingAuthentication())
  }

  const onGoogleSignIn = () => dispatch(startGoogleSignIn())

  const onEmailSignIn = () => dispatch(startLoginWithEmail(email, password))

	return (
		<AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type='email'
              placeholder='email@google.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type='password'
              placeholder='Password'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                fullWidth
                type='submit'
                disabled={isAuthenticating}
                onClick={onEmailSignIn}
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticating}
              >
                <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>

          </Grid>

          <Grid item xs={12} sm={6} display={!!errorMessage ? '' : 'none'}>
              <Alert severity="error" >{errorMessage}</Alert>
          </Grid>

          <Grid container direction="row" justifyContent='end'>
            <Link component={RouterLink} color="inherit" to='/auth/register' >
              Create your account
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
	)
}
