// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';

// const ProgressBar = ({ step }) => {
//     const steps = [
//         'Enter Name',
//         'Enter Activity',
//         'Enter Minutes',
//         'Enter Miles',
//         'Review'
//     ];
//     return (
//         <>
//             {/* MUI Stepper */}
//             <Box sx={{ width: '100%' }}>
//                 {/* Array index is one less than the step number */}
//                 <Stepper activeStep={step - 1} alternativeLabel>
//                     {steps.map((label) => (
//                         <Step key={label}>
//                             <StepLabel>{label}</StepLabel>
//                         </Step>
//                     ))}
//                 </Stepper>
//             </Box>
//         </>
//     );
// }

// export default ProgressBar;