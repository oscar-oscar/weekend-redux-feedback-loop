import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Understanding = () => {
    const history = useHistory();
    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value });
    }

    return (
        <>
        <h3>How are you understanding the material?</h3>
            <p> Choose between 0 - 5.
                <br />
                <br />
                0 = Not well at all.  5 = Extremely well </p>
            <div>
            <input value={understanding} onChange={handleChange} className="input" type="number" min={0} max={5} />
                <button onClick={() => history.push('/supported')} className="button">Next</button>
            </div>
        
        </>
    )
}

export default Understanding;