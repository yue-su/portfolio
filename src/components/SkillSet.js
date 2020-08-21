import React from 'react'
import { Box, Typography } from '@material-ui/core'
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined"

const SkillSet = () => {
    return (
      <Box height="150px" marginRight='5px' borderRadius="10px">
        <Box display="flex" justifyContent="space-between">
          <SettingsOutlinedIcon className='section-icon' />
          <Typography variant="subtitle2" className="section-title">
            Skill Set
          </Typography>
        </Box>
      </Box>
    )
}

export default SkillSet
