import React from 'react'
import { Box, Typography } from '@material-ui/core'
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import SmartphoneOutlinedIcon from "@material-ui/icons/SmartphoneOutlined"
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import SkillSet from './SkillSet'


const Contact = () => {
    return (
      <Box>
        <Box className="contact-item" bgcolor="background.paper">
          <MailOutlineIcon />
          <Typography variant="body2">su2047@gmail.com</Typography>
        </Box>
        <Box className="contact-item" bgcolor="background.paper">
          <SmartphoneOutlinedIcon />
          <Typography variant="body2">+1 902-403-5928</Typography>
        </Box>
        <Box className="contact-item" bgcolor="background.paper">
          <LinkedInIcon />
          <Typography variant="body2">linkedin.com/in/suxyue/</Typography>
        </Box>
        <Box className="contact-item" bgcolor="background.paper">
          <LanguageOutlinedIcon />
          <Typography variant="body2">www.suyue.me</Typography>
        </Box>
      </Box>
    )
}

export default Contact
