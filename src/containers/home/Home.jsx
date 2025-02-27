import "./Home.css";
import backgroundImage from '../../assets/bg.jpg';
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import logo from '../../assets/logo.jpg'

function Home() {

    const [email, setEmail] = useState("")

    const inputRef = useRef()

    const Navigate = useNavigate()

    const handleEmailAddress = (e) => {
        setEmail(e.target.value)
    }

    const handleGetStarted = () => {
        if(email.length === 0)
            inputRef.current.focus()
        else
            Navigate("/movielisting")

    }

    return(
        <>
        <div className="parentDiv">
            <img className="homePageBgImage" src={backgroundImage} alt="" />
            <div className="backdrop"></div>
            <div className="entireTextContent">
            <div className="headerContent">
                    <p className="netflixText">NETFLIX</p>
                    <div className="bothButton">
                    <select className="dropdownField" id="languageOption">
                        <option className="options" value="apple">English</option>
                        <option className="options" value="banana">Hindi</option>
                    </select>
                    <button className="topSignInButton">Sign In</button>
                    </div>
            </div>
            
            <div className="homePageCenterContent">
                <h1 className="titleCenterText">Unlimited movies, TV shows and more</h1>
                <p className="enterEmailText">Ready to watch? Enter your email to create or restart your membership.</p>
                
                <div className="inputFields">
                <input onChange={handleEmailAddress} ref={inputRef} className="emailAddressField" type="email" placeholder="Email address" value={email} />
                <button onClick={handleGetStarted} className="getStartedButton">Get Started</button>
                </div>
            </div>
            </div>
           
             
        </div>
        </>
    )
}
export default Home;    