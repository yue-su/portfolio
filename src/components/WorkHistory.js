import React from 'react'
import { Box, Typography } from '@material-ui/core'
import TrackChangesOutlinedIcon from "@material-ui/icons/TrackChangesOutlined"

const WorkHistory = () => {
    return (
      <Box flexGrow={1} marginBottom="5px" marginRight="5px" borderRadius="10px">
        <Box display="flex" justifyContent="space-between">
          <TrackChangesOutlinedIcon className="section-icon" />
          <Typography variant="subtitle2" className="section-title">
            Work
          </Typography>
        </Box>
      </Box>
    )
}

export default WorkHistory
