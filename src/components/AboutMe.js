import React from 'react'
import { Box, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}))

const AboutMe = () => {

    const classes = useStyles()

    return (
      <Box>
        <Box marginLeft="5px" bgcolor="background.paper" borderRadius='10px' p={1}>
          <Avatar size="large" className={classes.large}></Avatar>
          <Box>
            <Typography className="section-title" variant="subtitle2">
              About me
            </Typography>
            <Typography variant="body2" align="justify" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sodales consectetur tellus. Vestibulum urna risus, efficitur vitae
              malesuada nec, faucibus nec felis. Nulla et consectetur risus.
              Quisque ac vulputate leo. Donec nec auctor mauris. Nulla hendrerit
              laoreet elementum.
            </Typography>
          </Box>
        </Box>
      </Box>
    )
}

export default AboutMe
