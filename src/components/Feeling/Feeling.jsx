import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';//allows us to navigate to another page

// Step 1:  setup imports above

const Feeling = () => {
    // const handleKeyDown = event => {
    //     if (event.key === '0') {
    //         return e.preventDefault();
    //     } else if (event.key === '1') {
    //         return e.preventDefault();
    //     }else if (event.key === '2') {
    //         return e.preventDefault();
    //     }else if (event.key === '3') {
    //         return e.preventDefault();
    //     }else if (event.key === '4') {
    //         return e.preventDefault();
    //     }else if (event.key === '5') {
    //         return e.preventDefault();
    //     }else
    //     return alert('only choose 0-5') ;
    // //     if (event.key > 5 ) {
    // //       e.preventDefault();
    // //     }else if (event.key ===)
    // //   };
    // }
      
    
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
                <input value={feeling} onChange={handleChange} className="input" type="number"  min={0} max={5} />
                
                <button onClick={() => history.push('/understanding')} className="button">Next</button>
            </div>
        </>
    )
}

export default Feeling;



