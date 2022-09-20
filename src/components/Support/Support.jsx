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


const Support = () => {
    const history = useHistory();
    const support = useSelector(store => store.support);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value });
    }

    return (
        <>  
            <ProgressBar step={3} />
            <h2>How well are you being supported?</h2>
            <div>
            <FormControl>
                    <Stack spacing={3}>
                        <FormLabel id="demo-controlled-radio-buttons-group" sx={{ color: "#033076", fontSize: "1.5rem" }}> Rate on scale from 0-5</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={support}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="0" control={<Radio />} label={<Typography variant='h5'>Level 0 - Not well at all</Typography>} />
                            <FormControlLabel value="1" control={<Radio />} label={<Typography variant='h5'>Level 1</Typography>} />
                            <FormControlLabel value="2" control={<Radio />} label={<Typography variant='h5'>Level 2</Typography>} />
                            <FormControlLabel value="3" control={<Radio />} label={<Typography variant='h5'>Level 3</Typography>} />
                            <FormControlLabel value="4" control={<Radio />} label={<Typography variant='h5'>Level 4</Typography>} />
                            <FormControlLabel value="5" control={<Radio />} label={<Typography variant='h5'>Level 5 - Extremely well</Typography>} />
                        </RadioGroup>
                        <button onClick={() => history.push('/comments')} className="button">Next</button>
                    </Stack>
                </FormControl>
            </div>
        </>
    )
}

export default Support;