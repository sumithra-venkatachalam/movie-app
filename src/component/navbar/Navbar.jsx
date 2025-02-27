import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
// import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function Navbar() { 

    const navigate = useNavigate()

    const homePageNavigation = () => navigate("/")

    const moviesNavigation = () => navigate("/movielisting")
    return(
        <>
            <div className="entireNavbar">
                <h2 className="navText onlyUserName"> <span className="profileIcon">S</span>Sumithra</h2>
                <input className="searchBar" type="text" placeholder="Search..." /> 
                <h3 className="navText" onClick={homePageNavigation}> <FontAwesomeIcon className="navIcon" icon={faHouse} />Home</h3>
                <h3 className="navText" onClick={moviesNavigation}> <FontAwesomeIcon  className="navIcon" icon={faFilm} />Movies</h3>
                <h3 className="navText"> <FontAwesomeIcon className="navIcon" icon={faFilm} />Series</h3>
               {/* <h3 className="navText"> <FontAwesomeIcon className="navIcon" icon={faBookmark} />Saved List</h3> */}
                <h3 className="navText"> <FontAwesomeIcon className="navIcon" icon={faUser} />Profile</h3>
            </div>
        </>
    )
} 
export default Navbar;