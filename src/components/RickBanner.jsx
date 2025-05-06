import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle, TypeH2} from "react-bootstrap-icons"
import logo from '/images/logo.png';
// import pepeHigh from '/images/pepeHigh.png';
// import HomeExperience from "./HomeExperience";
// import LogoShowcase from "./LogoShowcase";
import { useNavigate } from "react-router-dom";
import { RickExperience } from "./RickExperience";
// import AnimatedCounter from "./AnimatedCounter";

 const RickBanner=()=>{
    const navigate = useNavigate();
    return (
        <section className="bannerrick" id='about'> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
                {/* <span className="tagline">Bigger  Better Stronger</span> */}
                <h1>{'Zeus'}<span className="wrap"></span></h1>
                <h1>{'History'}<span className="wrap"></span></h1>
                <p>Olympians and a powerful deity in ancient mythology. He was the son of Cronus and Rhea, making him a brother to Poseidon and Hades. When the three brothers divided the world, Zeus was given dominion over the seas
                Zeus wielded a trident, which he used to stir the oceans and create storms. He was also associated with horses, earning the title Zeus Hippios.
                </p>
                {/* <button className="pointer-events-auto" onClick={() => {navigate('/game')}} >Let's Play<ArrowRightCircle size={25}/></button> */}
                </Col>
                <Col xs={12} md={6} xl={6}>
                {/* <img src={logo} alt="Header img"/> */}

                <div>
                    <RickExperience/>
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
 export default RickBanner;