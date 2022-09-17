import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Support = () => {
    const history = useHistory();
    const support = useSelector(store => store.support);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value });
    }

    return (
        <>
            <h3>How well are you being supported?</h3>
            <p> Choose between 0 - 5.
                <br />
                <br />
                0 = Not well at all.  5 = Extremely well </p>
            <div>

                <input value={support} onChange={handleChange} className="input" type="number" min={0} max={5} />
                <button onClick={() => history.push('/comments')} className="button">Next</button>
            </div>
        </>
    )
}

export default Support;