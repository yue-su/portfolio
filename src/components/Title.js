import React from "react"
import { Box, Typography } from "@material-ui/core"

const Title = () => {
  return (
    <Box
      height="100px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box align="left">
        <Typography variant="h5">Yue Su</Typography>
        <Typography variant="subtitle2">Web Developer</Typography>
      </Box>
    </Box>
  )
}

export default Title
