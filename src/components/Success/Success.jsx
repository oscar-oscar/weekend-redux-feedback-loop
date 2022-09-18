import { useHistory } from 'react-router-dom';


const Success = () => {
    
    const history = useHistory();
    

    return (
        <>
            <h3>Thank you for completing the survery!</h3>
            <br />
            <div className="success-page">
                <button onClick={() => history.push('/')} className="button">Start a new survey</button>
            </div>


        </>
    )
}

export default Success;