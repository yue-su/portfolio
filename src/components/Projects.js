import React from 'react'
import { Box, Typography } from '@material-ui/core'
import ToysOutlinedIcon from "@material-ui/icons/ToysOutlined"

const Projects = () => {
    return (
      <Box
        bgcolor="background.default"
        height="350px"
        margin="5px"
        borderRadius="10px"
      >
        <Box display="flex" justifyContent="space-between">
          <ToysOutlinedIcon className="section-icon" />
          <Typography variant="subtitle2" className="section-title">
            Project
          </Typography>
        </Box>
      </Box>
    )
}

export default Projects
