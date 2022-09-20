import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import ProgressBar from '../ProgressBar/ProgressBar';

const Understanding = () => {
    const history = useHistory();
    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value });
    }

    return (
        <>
            <ProgressBar step={2} />
            <h2>How well are you understanding the material?</h2>

            <div>
                <FormControl>
                    <Stack spacing={3}>
                        <FormLabel id="demo-controlled-radio-buttons-group" sx={{ color: "#033076", fontSize: "1.5rem" }}> Rate on scale from 0-5</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={understanding}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="0" control={<Radio />} label={<Typography variant='h5'>Level 0 - No comprehension at all</Typography>} />
                            <FormControlLabel value="1" control={<Radio />} label={<Typography variant='h5'>Level 1</Typography>} />
                            <FormControlLabel value="2" control={<Radio />} label={<Typography variant='h5'>Level 2</Typography>} />
                            <FormControlLabel value="3" control={<Radio />} label={<Typography variant='h5'>Level 3</Typography>} />
                            <FormControlLabel value="4" control={<Radio />} label={<Typography variant='h5'>Level 4</Typography>} />
                            <FormControlLabel value="5" control={<Radio />} label={<Typography variant='h5'>Level 5 - Extremely confident</Typography>} />
                        </RadioGroup>
                        <button onClick={() => history.push('/support')} className="button">Next</button>
                    </Stack>
                </FormControl>
            </div>

        </>
    )
}

export default Understanding;