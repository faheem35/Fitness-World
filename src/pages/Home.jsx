// import React from 'react';
// import { Link } from 'react-router-dom';
// import landingImg from '../assets/landingImage2.jpg';
// import { Container, Row, Col, Card } from 'react-bootstrap';

// const Home = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <div
//         className="d-flex justify-content-center align-items-center min-vh-100 text-white  "
//         style={{
//           backgroundImage: `url(${landingImg})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           filter: 'brightness(80%)',
//         }}
//       >
//         <Container >
//           <Row className="justify-content-center ">
//             <Col lg={6} className="p-4 rounded shadow bg-dark bg-opacity-75 text-center">
//               <h1 className="display-3">
//                 <i className="fa-solid fa-dumbbell"></i> Fitness World
//               </h1>
//               <p className="text-center fs-5 fw-light">
//   Your fitness journey starts here! Access expert workout plans, video tutorials, and much more to achieve your health goals. Let’s build a stronger, healthier you—one step at a time!
// </p>


// {
//                 localStorage.getItem("token")?
//                 <Link to={'/workout'} className='btn btn-danger'>Let's Start Your Day</Link>
//                 :
//                 <Link to={'/login'} className='btn btn-danger'>Start to explore</Link>
//               }

//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Image Section */}
//       {/* <div>
//         <img width={'100%'} src="https://wallpapercave.com/wp/wp8235128.jpg" alt="Fitness" />
//       </div> */}

//       {/* Features Section */}
//       <div className="pt-5  bg-black" >
//         <Container className='py-5'>
//           <h1 className="text-warning mb-4 text-center ">Features</h1>
//           <Row>
//             <Col md={4} className="mb-4">
//               <Card className="h-100">
//                 <Card.Img height={'280px'} variant="top" src="https://www.teahub.io/photos/full/276-2763842_cardio-workout-full-hd-gym-workout-hd.jpg" />
//                 <Card.Body className='bg-secondary text-white'>
//                   <Card.Title >All Muscle Training</Card.Title>
//                   <Card.Text>
//                     Comprehensive workout routines targeting all muscle groups, helping you build strength and endurance.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4} className="mb-4">
//               <Card className="h-100">
//                 <Card.Img height={'280px'} variant="top" src="https://wallpapercave.com/wp/wp2483009.jpg" />
//                 <Card.Body className='bg-secondary text-white'>
//                   <Card.Title>Video Tutorials</Card.Title>
//                   <Card.Text >
//                     Watch expert-led workout tutorials at your convenience. Perfect for beginners and experienced individuals.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4} className="mb-4">
//               <Card className="h-100">
//                 <Card.Img height={'280px'} variant="top" src="https://wallpapercave.com/wp/wp4595589.jpg" />
//                 <Card.Body className='bg-secondary text-white'>
//                   <Card.Title>Simple and Effective</Card.Title>
//                   <Card.Text>
//                     Get a streamlined approach to workouts with minimal time, maximizing results in the shortest period.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Need of Workout Section */}


//  <div
//   className="py-5 bg-black"
  
// >
 

//         <Container fluid >
//           <Row className="border border-white m-5 p-5 bg-black text-white rounded">
//             <Col lg={6} >
//               <h4 className="text-center mb-4 mt-3 fw-bold text-danger">Why Workout?</h4>
//               <div className='d-flex '>
//                 <i class="fa-regular fa-circle-dot me-3"></i>
//                 <p>
//                   Regular workouts are essential for maintaining a healthy body and mind. They improve cardiovascular health, build muscle strength, boost mental clarity, and help manage stress. 
//                 </p>
//               </div>

//               <div className='d-flex'>
//                 <i class="fa-regular fa-circle-dot me-3"></i>
//                 <p>
//                   Exercise not only helps you look good but also makes you feel great. It’s the key to enhancing overall well-being, maintaining a healthy weight, and preventing chronic illnesses.
//                 </p>
//               </div>

//               <div className='d-flex '>
//                 <i class="fa-regular fa-circle-dot me-3"></i>
//                 <p>
//                   Whether you're looking to lose weight, gain muscle, or just stay fit, a proper workout routine is the foundation of a healthy lifestyle.
//                 </p>
//               </div>

//               <p className='text-success mt-3'>
//                 Join our community and embark on a journey toward better health and fitness. Start with small steps and stay consistent—results will follow!
//               </p>
//             </Col>
//             <Col lg={6}>
//             <iframe 
//   width="100%" 
//   height="400" 
//   src="https://www.youtube.com/embed/rBUjOY12gJA?si=rLQj5bJihqA9DQqJ&autoplay=1&mute=1" 
//   title="Workout Video" 
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   allowFullScreen
// />

//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Home;



// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import landingImg from '../assets/landingImage2.jpg';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './Home.css'; // We'll create this for custom styles

// const Home = () => {
//   useEffect(() => {
//     // Initialize AOS animation library
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <div className="fitness-home">
//       {/* Hero Section with Overlay */}
//       <div className="hero-section position-relative">
//         <div 
//           className="hero-background"
//           style={{
//             backgroundImage: `url(${landingImg})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             height: '100vh',
//             width: '100%',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             zIndex: -1,
//           }}
//         ></div>
//         <div className="hero-overlay"></div>
//         <Container className="h-100 d-flex align-items-center">
//           <Row className="justify-content-center w-100">
//             <Col lg={7} className="hero-content text-center" data-aos="fade-up">
//               <div className="hero-card p-5 rounded">
//                 <h1 className="display-3 fw-bold mb-3">
//                   <i className="fa-solid fa-dumbbell me-2"></i> Fitness World
//                 </h1>
//                 <p className="lead mb-4">
//                   Your fitness journey starts here! Access expert workout plans, video tutorials, 
//                   and much more to achieve your health goals. Let's build a stronger, healthier you—one step at a time!
//                 </p>
//                 {localStorage.getItem("token") ? (
//                   <Link to="/workout" className="cta-button btn-lg">
//                     Let's Start Your Day <i className="fa-solid fa-arrow-right ms-2"></i>
//                   </Link>
//                 ) : (
//                   <Link to="/login" className="cta-button btn-lg">
//                     Start to explore <i className="fa-solid fa-arrow-right ms-2"></i>
//                   </Link>
//                 )}
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Features Section */}
//       <div className="features-section py-5">
//         <Container className="py-5">
//           <h2 className="section-title text-center mb-5" data-aos="fade-up">
//             <span className="highlight">Premium</span> Features
//           </h2>
//           <Row>
//             {featuresData.map((feature, index) => (
//               <Col md={4} className="mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
//                 <Card className="feature-card h-100 border-0 shadow">
//                   <div className="feature-img-container">
//                     <Card.Img variant="top" src={feature.image} />
//                     <div className="feature-overlay">
//                       <i className={feature.icon}></i>
//                     </div>
//                   </div>
//                   <Card.Body className="text-center">
//                     <Card.Title className="feature-title">{feature.title}</Card.Title>
//                     <Card.Text>{feature.description}</Card.Text>
//                     {/* <Button variant="outline-danger" className="mt-3 rounded-pill px-4">
//                       Explore 
//                     </Button> */}



//  {localStorage.getItem("token") ? (
                  
//                     <Link to="/workout">
//   <Button variant="outline-danger" className="mt-3 rounded-pill px-4">
//     Explore
//   </Button>
// </Link>
//                 ) : (
                  
//                     <Link to="/login">
//   <Button variant="outline-danger" className="mt-3 rounded-pill px-4">
//     Explore
//   </Button>
// </Link>
//                 )}


                  
                  
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </div>

//       {/* Why Workout Section */}
//       <div className="why-workout-section py-5">
//         <Container>
//           <Row className="workout-info-container m-4 p-5 rounded">
//             <Col lg={6} className="pe-lg-5" data-aos="fade-right">
//               <h3 className="section-subtitle mb-4">
//                 Why <span className="highlight">Workout?</span>
//               </h3>
              
//               {workoutReasons.map((reason, index) => (
//                 <div className="workout-reason d-flex mb-4" key={index}>
//                   <div className="reason-icon me-3">
//                     <i className="fa-regular fa-circle-dot"></i>
//                   </div>
//                   <p>{reason}</p>
//                 </div>
//               ))}

//               <div className="mt-4 p-3 inspiration-box" data-aos="fade-up">
//                 <p className="inspiration-text">
//                   Join our community and embark on a journey toward better health and fitness. 
//                   Start with small steps and stay consistent—results will follow!
//                 </p>
//               </div>
//             </Col>
//             <Col lg={6} className="mt-4 mt-lg-0 video-container" data-aos="fade-left">
//               <div className="video-wrapper">
//                 <iframe 
//                   width="100%" 
//                   height="400" 
//                   src="https://www.youtube.com/embed/rBUjOY12gJA?si=rLQj5bJihqA9DQqJ&autoplay=1&mute=1" 
//                   title="Workout Video" 
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   allowFullScreen
//                 />
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Testimonials Section - New Addition */}
//       <div className="testimonials-section py-5">
//         <Container className="py-5">
//           <h2 className="section-title text-center mb-5" data-aos="fade-up">
//             Success <span className="highlight">Stories</span>
//           </h2>
//           <Row>
//             {testimonials.map((testimonial, index) => (
//               <Col md={4} className="mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
//                 <Card className="testimonial-card h-100 border-0 shadow">
//                   <Card.Body className="text-center p-4">
//                     <div className="testimonial-avatar mb-3">
//                       <img src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
//                     </div>
//                     <Card.Text className="testimonial-text">"{testimonial.text}"</Card.Text>
//                     <h5 className="testimonial-name mt-3">{testimonial.name}</h5>
//                     <p className="testimonial-role">{testimonial.role}</p>
//                     <div className="testimonial-rating mt-2">
//                       {[...Array(5)].map((_, i) => (
//                         <i key={i} className="fa-solid fa-star"></i>
//                       ))}
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </div>

//       {/* Call to Action Section - New Addition */}
//       <div className="cta-section py-5" data-aos="fade-up">
//         <Container className="text-center py-5">
//           <h2 className="cta-title mb-4">Ready to Transform Your Life?</h2>
//           <p className="cta-text mb-4">
//             Join thousands of members who have already changed their lives with our expert-guided fitness programs.
//           </p>
//           <Link to={localStorage.getItem("token") ? '/workout' : '/login'} className="cta-button btn-lg">
//             {localStorage.getItem("token") ? 'View Workouts' : 'Join Now'} <i className="fa-solid fa-arrow-right ms-2"></i>
//           </Link>
//         </Container>
//       </div>
//     </div>
//   );
// };

// // Data for features
// const featuresData = [
//   {
//     title: "All Muscle Training",
//     description: "Comprehensive workout routines targeting all muscle groups, helping you build strength and endurance.",
//     image: "https://www.teahub.io/photos/full/276-2763842_cardio-workout-full-hd-gym-workout-hd.jpg",
//     icon: "fa-solid fa-dumbbell"
//   },
//   {
//     title: "Video Tutorials",
//     description: "Watch expert-led workout tutorials at your convenience. Perfect for beginners.",
//     image: "https://wallpapercave.com/wp/wp2483009.jpg",
//     icon: "fa-solid fa-video"
//   },
//   {
//     title: "Simple and Effective",
//     description: "Get a streamlined approach to workouts with minimal time, maximizing results in the shortest period.",
//     image: "https://wallpapercave.com/wp/wp4595589.jpg",
//     icon: "fa-solid fa-bolt"
//   }
// ];

// // Data for workout reasons
// const workoutReasons = [
//   "Regular workouts are essential for maintaining a healthy body and mind. They improve cardiovascular health, build muscle strength, boost mental clarity, and help manage stress.",
//   "Exercise not only helps you look good but also makes you feel great. It's the key to enhancing overall well-being, maintaining a healthy weight, and preventing chronic illnesses.",
//   "Whether you're looking to lose weight, gain muscle, or just stay fit, a proper workout routine is the foundation of a healthy lifestyle."
// ];

// // Data for testimonials
// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     role: "Lost 30 lbs in 3 months",
//     text: "Fitness World transformed my approach to exercise. The video tutorials made it easy to follow along at home, and I've never felt better!",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     name: "Michael Chen",
//     role: "Gained 15 lbs of muscle",
//     text: "The muscle training programs are incredible. I've seen more progress in 2 months than I did in a year at my old gym.",
//     avatar: "https://randomuser.me/api/portraits/men/32.jpg"
//   },
//   {
//     name: "Emma Rodriguez",
//     role: "Fitness enthusiast",
//     text: "I love how simple yet effective the workouts are. Even with my busy schedule, I can always find time for these routines.",
//     avatar: "https://randomuser.me/api/portraits/women/68.jpg"
//   }
// ];

// export default Home;




import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import landingImg from "../assets/landingimage2.jpg"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import AOS from "aos"
import "aos/dist/aos.css"
import "./Home.css" // We'll create this for custom styles

const Home = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  // Add this new useEffect for the chat icon
  useEffect(() => {
    // Add a small delay before showing the chat icon for a nice entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fitness-home">
      {/* Hero Section with Overlay */}
      <div className="hero-section position-relative">
        <div
          className="hero-background"
          style={{
            backgroundImage: `url(${landingImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></div>
        <div className="hero-overlay"></div>
        <Container className="h-100 d-flex align-items-center">
          <Row className="justify-content-center w-100">
            <Col lg={7} className="hero-content text-center" data-aos="fade-up">
              <div className="hero-card p-5 rounded">
                <h1 className="display-3 fw-bold mb-3">
                  <i className="fa-solid fa-dumbbell me-2"></i> Fitness World
                </h1>
                <p className="lead mb-4">
                  Your fitness journey starts here! Access expert workout plans, video tutorials, and much more to
                  achieve your health goals. Let's build a stronger, healthier you—one step at a time!
                </p>
                {localStorage.getItem("token") ? (
                  <Link to="/workout" className="cta-button btn-lg">
                    Let's Start Your Day <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                ) : (
                  <Link to="/login" className="cta-button btn-lg">
                    Start to explore <i className="fa-solid fa-arrow-right ms-2"></i>
                  </Link>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <div className="features-section py-5">
        <Container className="py-5">
          <h2 className="section-title text-center mb-5" data-aos="fade-up">
            <span className="highlight">Premium</span> Features
          </h2>
          <Row>
            {featuresData.map((feature, index) => (
              <Col md={4} className="mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="feature-card h-100 border-0 shadow">
                  <div className="feature-img-container">
                    <Card.Img variant="top" src={feature.image} />
                    <div className="feature-overlay">
                      <i className={feature.icon}></i>
                    </div>
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="feature-title">{feature.title}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                    {/* <Button variant="outline-danger" className="mt-3 rounded-pill px-4">
                      Explore 
                    </Button> */}

                    {localStorage.getItem("token") ? (
                      <Link to="/workout">
                        <Button variant="outline-danger" className="mt-3 rounded-pill px-4">
                          Explore
                        </Button>
                      </Link>
                    ) : (
                      <Link to="/login">
                        <Button variant="outline-danger" className="mt-3 rounded-pill px-4">
                          Explore
                        </Button>
                      </Link>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Why Workout Section */}
      <div className="why-workout-section py-5">
        <Container>
          <Row className="workout-info-container m-4 p-5 rounded">
            <Col lg={6} className="pe-lg-5" data-aos="fade-right">
              <h3 className="section-subtitle mb-4">
                Why <span className="highlight">Workout?</span>
              </h3>

              {workoutReasons.map((reason, index) => (
                <div className="workout-reason d-flex mb-4" key={index}>
                  <div className="reason-icon me-3">
                    <i className="fa-regular fa-circle-dot"></i>
                  </div>
                  <p>{reason}</p>
                </div>
              ))}

              <div className="mt-4 p-3 inspiration-box" data-aos="fade-up">
                <p className="inspiration-text">
                  Join our community and embark on a journey toward better health and fitness. Start with small steps
                  and stay consistent—results will follow!
                </p>
              </div>
            </Col>
            <Col lg={6} className="mt-4 mt-lg-0 video-container" data-aos="fade-left">
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/rBUjOY12gJA?si=rLQj5bJihqA9DQqJ&autoplay=1&mute=1"
                  title="Workout Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Testimonials Section - New Addition */}
      <div className="testimonials-section py-5">
        <Container className="py-5">
          <h2 className="section-title text-center mb-5" data-aos="fade-up">
            Success <span className="highlight">Stories</span>
          </h2>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col md={4} className="mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="testimonial-card h-100 border-0 shadow">
                  <Card.Body className="text-center p-4">
                    <div className="testimonial-avatar mb-3">
                      <img src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    </div>
                    <Card.Text className="testimonial-text">"{testimonial.text}"</Card.Text>
                    <h5 className="testimonial-name mt-3">{testimonial.name}</h5>
                    <p className="testimonial-role">{testimonial.role}</p>
                    <div className="testimonial-rating mt-2">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Call to Action Section - New Addition */}
      <div className="cta-section py-5" data-aos="fade-up">
        <Container className="text-center py-5">
          <h2 className="cta-title mb-4">Ready to Transform Your Life?</h2>
          <p className="cta-text mb-4">
            Join thousands of members who have already changed their lives with our expert-guided fitness programs.
          </p>
          <Link to={localStorage.getItem("token") ? "/workout" : "/login"} className="cta-button btn-lg">
            {localStorage.getItem("token") ? "View Workouts" : "Join Now"}{" "}
            <i className="fa-solid fa-arrow-right ms-2"></i>
          </Link>
        </Container>
      </div>

      {/* Chat Bot Icon - Updated with better design and floating animation */}
      <div
        className={`chat-bot-container ${isVisible ? "visible" : ""} floating`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <Link to="/chat" className="chat-link">
          <div className={`chat-bot-icon ${isHovered ? "hovered" : ""}`}>
            <i className="fa-solid fa-headset chat-icon"></i>
            {isHovered && <div className="chat-tooltip">Need help? Chat with us!</div>}
          </div>
          <div className={`pulse-effect ${isHovered ? "active" : ""}`}></div>
        </Link> */}

        {localStorage.getItem("token") ? (
                  <Link to="/chat" className="chat-link">
          <div className={`chat-bot-icon ${isHovered ? "hovered" : ""}`}>
            <i className="fa-solid fa-headset chat-icon"></i>
            {isHovered && <div className="chat-tooltip">Need help? Chat with us!</div>}
          </div>
          <div className={`pulse-effect ${isHovered ? "active" : ""}`}></div>
        </Link>
                ) : (
                  <Link to="/login" className="chat-link">
          <div className="chat-bot-icon" >
            <i className="fa-solid fa-headset chat-icon"></i>
           
          </div>
          
        </Link>
                )}

        
      </div>
    </div>
  )
}

// Data for features
const featuresData = [
  {
    title: "Live Training Sessions",
    description:
      "Live Training Sessions that build strength, boost endurance, and target every muscle group.",
    image: "https://www.teahub.io/photos/full/276-2763842_cardio-workout-full-hd-gym-workout-hd.jpg",
    icon: "fa-solid fa-dumbbell",
  },
  {
    title: "Video Tutorials",
    description: "Watch expert-led workout tutorials at your convenience. Perfect for beginners.",
    image: "https://wallpapercave.com/wp/wp2483009.jpg",
    icon: "fa-solid fa-video",
  },
  {
    title: "AI Assistance",
    description: "Smarter workouts with AI assistance—less time, better results.",
    image: "https://wallpapercave.com/wp/wp4595589.jpg",
    icon: "fa-solid fa-bolt",
  },
]

// Data for workout reasons
const workoutReasons = [
  "Regular workouts are essential for maintaining a healthy body and mind. They improve cardiovascular health, build muscle strength, boost mental clarity, and help manage stress.",
  "Exercise not only helps you look good but also makes you feel great. It's the key to enhancing overall well-being, maintaining a healthy weight, and preventing chronic illnesses.",
  "Whether you're looking to lose weight, gain muscle, or just stay fit, a proper workout routine is the foundation of a healthy lifestyle.",
]

// Data for testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Lost 30 lbs in 3 months",
    text: "Fitness World transformed my approach to exercise. The video tutorials made it easy to follow along at home, and I've never felt better!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Chen",
    role: "Gained 15 lbs of muscle",
    text: "The muscle training programs are incredible. I've seen more progress in 2 months than I did in a year at my old gym.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emma Rodriguez",
    role: "Fitness enthusiast",
    text: "I love how simple yet effective the workouts are. Even with my busy schedule, I can always find time for these routines.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
]

export default Home
