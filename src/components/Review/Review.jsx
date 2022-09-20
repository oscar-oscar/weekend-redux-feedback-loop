import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ProgressBar from '../ProgressBar/ProgressBar';
import Typography from '@mui/material/Typography';
import { display, Stack } from '@mui/system';


const Review = () => {
    //getters
    const history = useHistory();
    const dispatch = useDispatch();
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    // Pass the data to the server
    const handleSubmit = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comments,

            }
        }).then((response) => {
            //clear all reducers
            dispatch({ type: 'CLEAR_ALL' });
            // Navigate to "/" for new survey
            history.push('/success');
        }).catch((error) => {
            console.log(error);
            alert('something went wrong in axios Submit')
        })
    }

    return ( //display scores
        <>
            <ProgressBar step={5} />
            <h2>Review your schores before submission!</h2>
        <div>
            <Stack spacing={3}>
                <Card sx={{ maxWidth: 2000 }}>
                <Typography variant='h5'>
                    <CardContent>
                        Your feelings: {feeling}<br />
                        Your understanding of the material {understanding}<br />
                        Your rating of the support recieved: {support}<br />
                        Comments: {comments}<br />                       
                    </CardContent>
                    <button onClick={handleSubmit} className="reviewButton">Submit</button>
                    </Typography>
                </Card>
                
            </Stack>
            </div>
        </>


    )
}

export default Review;