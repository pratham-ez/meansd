import React from 'react'
import home from '../images/WhatsApp Image 2023-08-13 at 12.04.25.jpg';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    function breakupKaroge() {
        navigate("/breakup");
    }
    function breakupnaiKaroge() {
        navigate("/nobreakup");
    }


    return (
        <div>
            <h1>Kya hai re tumko</h1>
            <div className='button'>
                <button onClick={breakupKaroge}>breakup karoge.?</button>
                <button onClick={breakupnaiKaroge}>sath rahoge  .?</button>
            </div>
            <img className='home' src={home} alt="" />
        </div>
    )
}

export default Home