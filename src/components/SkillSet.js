import React from 'react'
import { Box, Typography } from '@material-ui/core'
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined"

const SkillSet = () => {
    return (
      <Box height="250px" marginRight='5px' borderRadius="10px">
        <Box display="flex" justifyContent="space-between">
          <SettingsOutlinedIcon className='section-icon' />
          <Typography variant="subtitle2" className="section-title">
            Skill Set
          </Typography>
            </Box>
            <Box>
                <Box>
                    <Typography>Frontend</Typography>
                </Box>
                <Box>
                    <Typography>Back-end</Typography>
                </Box>
                    <Typography>Framework</Typography>
                <Box>

                </Box>
            </Box>
      </Box>
    )
}

export default SkillSet
