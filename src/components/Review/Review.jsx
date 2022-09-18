import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

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
            history.push('/');
        }).catch((error) => {
            console.log(error);
            alert('something went wrong in axios Submit')
        })
    }

    return ( //display score
        <>
            <h2>Survery Review</h2>
            <div>
                <div style={{ margin: '20px 10px', fontSize: '1.4em' }}>
                    <div>Your feelings: {feeling}</div>
                    <div>Your understanding of the material {understanding}</div>
                    <div>Your rating of the support recieved: {support}</div>
                    <div>Comments: {comments}</div>
                </div>
                <button onClick={handleSubmit} className="button">Submit</button>
            </div>
        </>
    )
}

export default Review;