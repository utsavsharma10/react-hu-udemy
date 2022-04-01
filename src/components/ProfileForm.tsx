//@ts-ignore
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, RadioGroup
} from "@mui/material";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import React, { useState } from "react";

const ProfileForm = () => {
  const [dname, setDname] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [about, setAbout] = useState("");
  const [type, setType] = useState("");
  const [role, setRole] = useState("");
  const [expertise, setExpertise] = useState("");
  const [experience, setExperience] = useState("");
  
  const [dnameError, setDnameError] = useState(false);
  const [fnameError, setFnameError] = useState(false);
  const [aboutError, setAboutError] = useState(false);
  const [roleError, setRoleError] = useState(false);
  const [areaOfInterestError, setAreaOfInterestError] = useState(false);
  const [areaOfInterest, setAreaOfInterest] = useState<string[]>([]);

  const handleAoiChange = (e: any) => {
    const index = areaOfInterest.indexOf(e.target.value);
    if (index === -1) {
      setAreaOfInterest([...areaOfInterest, e.target.value]);
    } else {
      setAreaOfInterest(
        areaOfInterest.filter((interest) => interest !== e.target.value)
      );
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setDnameError(false);
    setFnameError(false);
    setAboutError(false);
    setRoleError(false);

    if (dname === "") {
      setDnameError(true);
    }
    if (fname === "") {
      setFnameError(true);
    }
    if (about === "") {
      setAboutError(true);
    }
    if (areaOfInterest.length === 0) {
      setAreaOfInterestError(true);
    }
    if (role === "") {
      setRoleError(true);
    }
    if (dname && fname && about && type && areaOfInterest) {
      console.log("DisplayName:",dname);
      console.log("First name:", fname);
      console.log("Last name:", lname);
      console.log("About:", about);
      console.log("Type:", type);
      console.log("Are of interest:", areaOfInterest)     
      console.log("Role:", role); 
      console.log("Experience:", experience);
      console.log("Expertise:", expertise);
    }
  };

  return (
    <Box sx={{border: "1px solid #E0E0E0", padding: "0.75rem"}}>
      <form action="" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            onChange={(e) => setDname(e.target.value)}
            sx={{
              marginTop: 2,
              marginBottom: 2,
              width: "25%",
              display: "inline-block",
            }}
            InputLabelProps={{
              shrink: true,
            }}
            label="Display Name"
            variant="standard"
            required
            fullWidth
            error={dnameError}
          />
          <TextField
            onChange={(e) => setFname(e.target.value)}
            sx={{
              marginTop: 2,
              marginBottom: 2,
              width: "25%",
              display: "inline-block",
            }}
            InputLabelProps={{
              shrink: true,
            }}
            label="First Name"
            variant="standard"
            required
            fullWidth
            error={fnameError}
          />
          <TextField
            onChange={(e) => setLname(e.target.value)}
            sx={{
              marginTop: 2,
              marginBottom: 2,
              width: "25%",
              display: "inline-block",
            }}
            InputLabelProps={{
              shrink: true,
            }}
            label="Last Name"
            variant="standard"
            fullWidth
          />
        </Box>
        <TextField
          onChange={(e) => setAbout(e.target.value)}
          sx={{
            marginTop: 2,
            marginBottom: 2,
            width: "62.5%",
            display: "block",
          }}
          InputLabelProps={{
            shrink: true,
          }}
          label="About yourself"
          multiline
          rows={6}
          fullWidth
          variant="standard"
          required
          error={aboutError}
        />
        <Box>
          <FormControl>
            <FormLabel>Your Area of Interest</FormLabel>
            <FormGroup>
              <FormControlLabel
                value="designer"
                control={
                  <Checkbox
                    checked={areaOfInterest.includes("designer")}
                    onChange={handleAoiChange}
                  />
                }
                label="Designer"
                labelPlacement="end"
              />
              <FormControlLabel
                value="developer"
                control={
                  <Checkbox
                    checked={areaOfInterest.includes("developer")}
                    onChange={handleAoiChange}
                  />
                }
                label="Developer"
                labelPlacement="end"
              />
              <FormControlLabel
                value="project manager"
                control={
                  <Checkbox
                    checked={areaOfInterest.includes("project manager")}
                    onChange={handleAoiChange}
                  />
                }
                label="Project Manager"
                labelPlacement="end"
              />
              <FormControlLabel
                value="sales"
                control={
                  <Checkbox
                    checked={areaOfInterest.includes("sales")}
                    onChange={handleAoiChange}
                  />
                }
                label="Sales"
                labelPlacement="end"
              />
            </FormGroup>
          </FormControl>
        </Box>

        <Box>
          <FormControl>
            <FormLabel>Are you a student or a professional</FormLabel>
            <RadioGroup row onChange={(e) => setType(e.target.value)}>
              <FormControlLabel
                value="student"
                control={<Radio />}
                label="Student"
              />
              <FormControlLabel
                value="professional"
                control={<Radio />}
                label="Professional"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{ border: "1px solid #E0E0E0", padding: "0.5rem" }}>
          <Box>
            <FormControl>
              <FormLabel>How much of experience you have?</FormLabel>
              <RadioGroup row onChange={(e) => setExperience(e.target.value)}>
                <FormControlLabel
                  value="0-5"
                  control={<Radio />}
                  label="0-5 Years"
                />
                <FormControlLabel
                  value="5-10"
                  control={<Radio />}
                  label="5-10 Years"
                />
                <FormControlLabel
                  value="10+"
                  control={<Radio />}
                  label="10 & above"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>What is you expertise</FormLabel>
              <RadioGroup row onChange={(e) => setExpertise(e.target.value)}>
                <FormControlLabel
                  value="java"
                  control={<Radio />}
                  label="Java"
                />
                <FormControlLabel
                  value="react"
                  control={<Radio />}
                  label="React"
                />
                <FormControlLabel
                  value="backend"
                  control={<Radio />}
                  label="Backend"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <TextField
            onChange={(e) => setRole(e.target.value)}
            sx={{
              marginTop: 2,
              marginBottom: 2,
              width: "25%",
              display: "inline-block",
            }}
            InputLabelProps={{
              shrink: true,
            }}
            label="Mention your role"
            variant="standard"
            fullWidth
            error={roleError}
          />
        </Box>

        {/* <Box sx={{}}> */}
          <Button
            type="submit"
            variant="contained"
            sx={{display:"flex", marginLeft: "auto", marginTop: "0.5rem"}}
            endIcon={<KeyboardArrowRightIcon />}
          >
            Save
          </Button>
        {/* </Box> */}
      </form>
    </Box>
  );
};

export default ProfileForm;
