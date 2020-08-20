import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Link from "../components/Link"
import { Paper, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '612px',
    height: '792px',
    display: 'grid',
    placeItems: 'center'
  },
}))

export default function Index() {

  const classes = useStyles()

  return (
    <Box align="center">
      <Paper square className={classes.paper}>
        <Box
          width="600px"
          height="780px"
          border="3px solid"
          borderRadius="10px"
        >
          <Grid container>
            <Grid item sm={4}>test</Grid>
            <Grid item sm={8}>test</Grid>
          </Grid>
        </Box>
      </Paper>{" "}
    </Box>
  )
}
