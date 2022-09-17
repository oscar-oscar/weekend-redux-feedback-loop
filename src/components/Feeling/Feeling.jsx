import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';//allows us to navigate to another page

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
            <h3>How are you feeling?</h3>
            <p> Choose between 0 - 5.
                <br />
                <br />
                0 = Feeling down. 5 = Feeling great!</p>
            <div>
                {/* Step 3: getter/setter 
            getter: {feeling} setter {handleChange} */}
                <input value={feeling} onChange={handleChange} className="input" type="number" min={0} max={5} />
                <button onClick={() => history.push('/understanding')} className="button">Next</button>
            </div>
        </>
    )
}

export default Feeling;



