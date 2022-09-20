import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const ProgressBar = ({ step }) => {
    const steps = [
        'Question 1',
        'Question 2',
        'Question 3',
        'Review',
        'Submit'
    ];
    return (
        <>
            {/* MUI Stepper */}
            <Box sx={{  width: '100%' , fontSize: '2.5rem'  }}>
                {/* Array index is one less than the step number */}
                <Stepper activeStep={step - 1} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </>
    );
}

export default ProgressBar;