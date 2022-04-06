import React from 'react'
import Header from '../components/commons/Header'
import FormProducts from '../components/FormProducts'
import { Grid } from '@mui/material'

export default function Dashboard() {
  return (
      <>
      <Header/>
      <Grid container spacing={2}>
        <Grid item sx={2} md={4}>Lateral Menu</Grid>
        <Grid item sx={2} md={4}><FormProducts/></Grid>
      </Grid>
      </>
  )
}
