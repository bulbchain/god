import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle, TypeH2} from "react-bootstrap-icons"
import logo from '/images/logo.png';
// import pepeHigh from '/images/pepeHigh.png';
// import HomeExperience from "./HomeExperience";
// import LogoShowcase from "./LogoShowcase";
import { useNavigate } from "react-router-dom";
import { RickExperience } from "./RickExperience";
// import AnimatedCounter from "./AnimatedCounter";

 const About=()=>{
    const navigate = useNavigate();
    return (
        <section className="bannerrick" id='#'> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} m1d={12} xl={12}>
                {/* <span className="tagline">Bigger  Better Stronger</span> */}
                <h1>{'About Zeus'}<span className="wrap"></span></h1>
                {/* <h2>{'About Fred the Fish Coin'}<span className="wrap">!</span></h2> */}
                <p>
Welcome to the deep end of decentralized fun.

Zeus, the mighty god of the sea in Greek mythology, was a central figure in ancient Greek culture and coinage. As one of the Twelve Olympians, Zeus ruled over the oceans, wielding his iconic trident, which symbolized his power to create storms, earthquakes, and calm waters. He was also associated with horses, earning the title Zeus Hippios.</p>
                {/* <button className="pointer-events-auto" onClick={() => {navigate('/game')}} >Let's Play<ArrowRightCircle size={25}/></button> */}
                </Col>
            </Row>
        </Container>
        
      
        </section>
        
        
    )
 }
 export default About;