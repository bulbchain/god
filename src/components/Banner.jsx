import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle, TypeH2} from "react-bootstrap-icons"
import logo from '/images/logo.png';
// import pepeHigh from '/images/pepeHigh.png';
// import HomeExperience from "./HomeExperience";
// import LogoShowcase from "./LogoShowcase";
import { useNavigate } from "react-router-dom";
import { FishExperience } from "./FishExperience";
// import AnimatedCounter from "./AnimatedCounter";

 const Banner=()=>{
    const navigate = useNavigate();
    return (
        <section className="banner" id="home"> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
                <span className="tagline">Run Jump Play !</span>
                <h1>{'Zeus'}<span className="wrap">!</span></h1>
                <p>Welcome to the deep end of decentralized fun. Zeus, the mighty god of the sea in Greek mythology, was a central figure in ancient Greek culture and coinage. As one of the Twelve Olympians, Zeus ruled over the oceans, wielding his iconic trident, which symbolized his power to create storms, earthquakes, and calm waters. He was also associated with horses, earning the title Zeus Hippios.</p>
                <button className="pointer-events-auto " onClick={() => {navigate('/game')}} >
                    Let's Play
                    <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={6}>
                {/* <img src={logo} alt="Header img"/> */}

                <div>
                    <FishExperience/>
                </div>

                {/* <figure>
                <div className="hero-3d-layout ">
                <HomeExperience/>
                </div>
                </figure> */}

                </Col>
            </Row>
        </Container>
        
      
        </section>
        
        
    )
 }
 export default Banner;