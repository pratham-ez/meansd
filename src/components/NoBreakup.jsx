import React from 'react'
import hmm from '../images/WhatsApp Image 2023-08-13 at 12.04.26.jpg';
import { useNavigate } from "react-router-dom";
const NoBreakup = () => {
    const navigate = useNavigate();
    function breakupKaroge() {
        navigate("/baat");
    }
    function breakupnaiKaroge() {
        navigate("/suno");
    }
    return (
        <div>
            <h1>hmmm , aa gaye wapas shit </h1>
            <div className='button'>
                <button onClick={breakupKaroge}>accha suno</button>
                <button onClick={breakupnaiKaroge}>1 baat batau.?</button>
            </div>
            <img className='bb' src={hmm} alt="" />
        </div>
    )
}

export default NoBreakup