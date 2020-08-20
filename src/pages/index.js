import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Link from "../components/Link"
import { Paper, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Title from "../components/Title"
import AboutMe from "../components/AboutMe"
import Contact from "../components/Contact"
import SkillSet from "../components/SkillSet"
import Projects from "../components/Projects"
import WorkHistory from "../components/WorkHistory"
import '../Styles/index.css'

const useStyles = makeStyles((theme) => ({
  bcg: {
    backgroundColor: '#E9ECEF',
  },

  paper: {
    width: '612px',
    height: '792px',
    display: 'grid',
    placeItems: 'center',
    backgroundImage: 'linear-gradient(149.67deg, rgb(248, 249, 250) 33.71%, rgb(233, 236, 239) 76.53%, rgb(248, 249, 250) 98.85%)'
  },

}))

export default function Index() {

  const classes = useStyles()

  return (
    <Box align="center" className={classes.bcg} py={4} height='100vh'>
      <Paper square className={classes.paper} elevation={5}>
        <Box
          width="600px"
          height="780px"
          border="3px solid"
          borderRadius="10px"
        >
          <Grid container>
            <Grid item sm={4}>
              <Box display='flex' flexDirection='column' height='780px'>
                <Title />
                <AboutMe />
                <Contact />
              </Box>
            </Grid>
            <Grid item sm={8}>
              <Box display='flex' flexDirection='column' height='780px'>
                <SkillSet />
                <Projects />
                <WorkHistory />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  )
}
