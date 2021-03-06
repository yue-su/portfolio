import React from "react"
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
    backgroundColor: '#495057',
  },

  paper: {
    width: '768px',
    height: '960px',
    display: 'grid',
    placeItems: 'center',
  },

}))

export default function Index() {

  const classes = useStyles()

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className={classes.bcg}
      height="100vh"
    >
      <Paper square className={classes.paper} elevation={5}>
        <Box
          width="756px"
          height="948px"
          border="3px solid"
          borderRadius="10px"
          bgcolor="background.default"
        >
          <Grid container>
            <Grid item sm={4} xs={12}>
              <Box display="flex" flexDirection="column" height="933px">
                <Title />
                <AboutMe />
                <Contact />
              </Box>
            </Grid>
            <Grid item sm={8} sx={12}>
              <Box
                display="flex"
                flexDirection="column"
                height="933px"
                bgcolor="background.paper"
                margin="5px"
                borderRadius="10px"
              >
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
