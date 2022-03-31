import React from 'react'
import Banner from './Banner';
import ProfileForm from './ProfileForm';
import { Box } from "@mui/system";

const Profile = () => {
  let bannerText  = "My Profile" as const;
  return (
    <>
      <Box sx={{mx: "8rem"}}><Banner bannerText={bannerText}/></Box>
      <Box sx={{mx: "8rem"}}><ProfileForm></ProfileForm></Box>
    </>
  )
}

export default Profile;