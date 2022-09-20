import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
import Container from '@mui/material/Container';
import ProgressBar from '../ProgressBar/ProgressBar';


const Comments = () => {
    const history = useHistory();
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value });
    }

    return (
        <>
            <ProgressBar step={5} />
            <h3>Are there any comments you want to leave?</h3>
            <p> enter comments below </p>
            <div>
                <Container maxWidth="sm">
                    <Stack spacing={3}>
                        <TextField sx={{ width: '50ch' }}
                            id="outlined-multiline-flexible"
                            label="Comment here"
                            multiline
                            maxRows={3}
                            value={comments}
                            onChange={handleChange}
                        />
                        <button onClick={() => history.push('/review')} className="reviewButton">Next</button>
                    </Stack>
                </Container>
            </div>
        </>
    )
}

export default Comments;

