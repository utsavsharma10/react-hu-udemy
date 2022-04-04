import { Box } from "@mui/system";
import React from 'react';
import Banner from './Banner';
import ProfileForm from './ProfileForm';

const Profile = () => {
  let bannerText  = "My Profile" as const;
  return (
    <>
      <Box sx={{mx: "6rem"}}><Banner bannerText={bannerText}/></Box>
      <Box sx={{mx: "6rem"}}><ProfileForm></ProfileForm></Box>
    </>
  )
}

export default Profile;