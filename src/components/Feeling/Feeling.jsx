import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';//allows us to navigate to another page
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import ProgressBar from '../ProgressBar/ProgressBar';


// Step 1:  setup imports above

const Feeling = () => {
    const history = useHistory();
    // Step 2: setup useSelector and useDispatch
    const feeling = useSelector(store => store.feeling); // calling reducer
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch({ type: 'SET_FEELING', payload: event.target.value });
    }

    return (
        <>
            <ProgressBar step={1} />
            <h2>How are you feeling about today's material?</h2>

            <div>
                {/* Step 3: getter/setter 
            getter: {feeling} setter {handleChange} */}

                <FormControl>
                    <Stack spacing={3}>
                        <FormLabel id="demo-controlled-radio-buttons-group" sx={{ color: "#033076", fontSize: "1.5rem" }}> Rate on scale from 0-5</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={feeling}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="0" control={<Radio />} label={<Typography variant='h5'>Level 0 - Not at all confident</Typography>} />
                            <FormControlLabel value="1" control={<Radio />} label={<Typography variant='h5'>Level 1</Typography>} />
                            <FormControlLabel value="2" control={<Radio />} label={<Typography variant='h5'>Level 2</Typography>} />
                            <FormControlLabel value="3" control={<Radio />} label={<Typography variant='h5'>Level 3</Typography>} />
                            <FormControlLabel value="4" control={<Radio />} label={<Typography variant='h5'>Level 4</Typography>} />
                            <FormControlLabel value="5" control={<Radio />} label={<Typography variant='h5'>Level 5 - Extremely confident</Typography>} />
                        </RadioGroup>
                        <button onClick={() => history.push('/understanding')} className="button">Next</button>
                    </Stack>
                </FormControl>
            </div>
        </>
    )
}

export default Feeling;



