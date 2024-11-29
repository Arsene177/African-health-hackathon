import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Pnav from "../Components/Pnav";

// Material-UI imports
import {
  Typography,
  TextField,
  Fab,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  Checkbox,
  ListItemButton,
  Rating,
  LinearProgress,
  Snackbar,
  Alert,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import MedicationIcon from "@mui/icons-material/Medication";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Import Back Icon

import "../CSS/FollowUp.css";
import "../CSS/Patient.css";

const FollowUp = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [progress, setProgress] = useState(0);
  const [checked, setChecked] = useState([]);
  const [symptomsList, setSymptomsList] = useState([{ symptom: "", severity: 0 }]);
  const [send, setSend] = useState(false);

  const handleBack = () => {
    navigate("/Patient"); // Navigate to /Patient page
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    setProgress((newChecked.length / 4) * 100); // Adjust progress calculation
  };

  const handleSymptomChange = (index, field, value) => {
    const newSymptomsList = [...symptomsList];
    newSymptomsList[index][field] = value;
    setSymptomsList(newSymptomsList);
  };

  const handleAddSymptom = () => {
    setSymptomsList([...symptomsList, { symptom: "", severity: 0 }]);
  };

  const handleSend = () => {
    if (symptomsList.some((item) => !item.symptom || item.severity === 0)) {
      alert("Please fill in all symptoms and select severity levels.");
      return;
    }
    setSend(true);
    setSymptomsList([{ symptom: "", severity: 0 }]);
    setProgress(0);
  };

  const handleSnackbarClose = () => {
    setSend(false);
  };

  return (
    <div>
      <Pnav />

      {/* Back Button */}
      <Box display="flex" alignItems="center" padding={2}>
        <Button
          startIcon={<ArrowBackIcon />}
          variant="outlined"
          color="primary"
          onClick={handleBack}
        >
          Back
        </Button>
      </Box>

      <div className="fcontain">
        <div className="followUpContainer">
          <Typography fontWeight={900} paddingLeft={15}>
            Medication Follow Up
          </Typography>
          <div className="followUpBox">
            <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
              {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                  <ListItem
                    key={value}
                    secondaryAction={
                      <Checkbox
                        edge="end"
                        onChange={handleToggle(value)}
                        checked={checked.includes(value)}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    }
                    disablePadding
                  >
                    <ListItemButton>
                      <MedicationIcon />
                      <ListItemText
                        id={labelId}
                        primary={`Medication ${value + 1}`}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            <Box width={300} paddingTop={5}>
              <Typography fontWeight={700}>Daily Progression</Typography>
              <Box sx={{ width: "100%", mt: 2 }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box>
              <Typography sx={{ mt: 1 }}>{`${progress.toFixed(
                0
              )}%`}</Typography>
            </Box>
          </div>
        </div>

        <div className="symptoms">
          <Typography fontWeight={900} paddingBottom={5}>
            Symptoms Follow Up
          </Typography>
          <Typography variant="h6" gutterBottom>
            Enter Your Symptoms
          </Typography>
          {symptomsList.map((item, index) => (
            <div key={index}>
              <TextField
                id={`symptom-input-${index}`}
                label="Symptom"
                value={item.symptom}
                onChange={(e) =>
                  handleSymptomChange(index, "symptom", e.target.value)
                }
                fullWidth
                margin="normal"
              />
              <Box display="flex" alignItems="center" marginTop={2}>
                <Typography variant="body1" style={{ marginRight: "10px" }}>
                  Severity:
                </Typography>
                <Rating
                  value={item.severity}
                  onChange={(event, newValue) =>
                    handleSymptomChange(index, "severity", newValue)
                  }
                  precision={1}
                  max={5}
                />
              </Box>
            </div>
          ))}
          <Box textAlign="center" marginTop={2}>
            <Fab color="primary" onClick={handleAddSymptom}>
              <AddIcon />
            </Fab>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSend}
              style={{ marginLeft: "10px" }}
            >
              Send
            </Button>
          </Box>
        </div>

        <Snackbar
          open={send}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <Alert onClose={handleSnackbarClose} severity="success">
            Symptoms sent successfully!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default FollowUp;
