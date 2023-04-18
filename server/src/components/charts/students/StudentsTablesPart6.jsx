import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const StudentsTablesPart6 = ({ data }) => {
  const createData = (
    question,
    No,
    GADOrientation,
    GenderSensitivityTraining,
    GenderMainstreaming,
    GADPlanningAndBudgeting,
    GADAnalaysisTools,
    HarmonizedGenderAndDevelopmentGuidelines,
    GenderMainstreamingEvaluationFramework,
    Others
  ) => ({
    question,
    No,
    GADOrientation,
    GenderSensitivityTraining,
    GenderMainstreaming,
    GADPlanningAndBudgeting,
    GADAnalaysisTools,
    HarmonizedGenderAndDevelopmentGuidelines,
    GenderMainstreamingEvaluationFramework,
    Others,
  });

  const datatable = data.map((row) => {
    const [
      No,
      GADOrientation,
      GenderSensitivityTraining,
      GenderMainstreaming,
      GADPlanningAndBudgeting,
      GADAnalaysisTools,
      HarmonizedGenderAndDevelopmentGuidelines,
      GenderMainstreamingEvaluationFramework,
      Others,
    ] = row.value.split(',').map((val) => parseInt(val));
    return createData(
      row.name,
      No,
      GADOrientation,
      GenderSensitivityTraining,
      GenderMainstreaming,
      GADPlanningAndBudgeting,
      GADAnalaysisTools,
      HarmonizedGenderAndDevelopmentGuidelines,
      GenderMainstreamingEvaluationFramework,
      Others
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Questions</TableCell>
            <TableCell align="right">No.</TableCell>
            <TableCell align="right">GAD Orientation</TableCell>
            <TableCell align="right">Gender Sensitivity Training</TableCell>
            <TableCell align="right">Gender Mainstreaming</TableCell>
            <TableCell align="right">GAD Planning & Budgeting</TableCell>
            <TableCell align="right">GAD Analysis Tools</TableCell>
            <TableCell align="right">Harmonized Gender and Development Guidelines</TableCell>
            <TableCell align="right">Gender Mainstreaming Evaluation Framework</TableCell>
            <TableCell align="right">Others</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datatable.map((row) => (
            <TableRow key={row.question}>
              <TableCell component="th" scope="row">
                {row.question}
              </TableCell>
              <TableCell align="right">{row.No}</TableCell>
              <TableCell align="right">{row.GADOrientation}</TableCell>
              <TableCell align="right">{row.GenderSensitivityTraining}</TableCell>
              <TableCell align="right">{row.GenderMainstreaming}</TableCell>
              <TableCell align="right">{row.GADPlanningAndBudgeting}</TableCell>
              <TableCell align="right">{row.GADAnalaysisTools}</TableCell>
              <TableCell align="right">{row.HarmonizedGenderAndDevelopmentGuidelines}</TableCell>
              <TableCell align="right">{row.GenderMainstreamingEvaluationFramework}</TableCell>
              <TableCell align="right">{row.Others}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentsTablesPart6;