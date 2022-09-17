import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Comments = () => {
    const history = useHistory();
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value });
    }

    return (
        <>
            <h3>Are there any comments you want to leave?</h3>
            <p> enter comments below </p>
            <div class="comment-area">
            <input value={comments} onChange={handleChange} className="comments" placeholder="enter comment here" type="text" />
                <button onClick={() => history.push('/review')} className="button">Next</button>
            </div>


        </>
    )
}

export default Comments;