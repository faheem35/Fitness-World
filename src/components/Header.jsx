// import React, { useContext } from 'react'
// import { Container, Navbar } from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom'
// import { tokenAuthContext } from '../contexts/AuthContextAPI'



// const Header = () => {

//   const navigate =useNavigate()

//   const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext)


//   const logout =()=>{
//     localStorage.clear()
//     setIsAuthorised(false)
//     alert("logging out!...")
//     navigate('/')
//   }

//   return (
//     <Navbar className="border  position-fixed w-100 z-3 bg-danger">
//       <Container >

//       <Link to={'/'} style={{ textDecoration: 'none' }}>
//           <Navbar.Brand  className='fw-bolder text-black '>
//           <i class="fa-solid fa-dumbbell me-2"></i>
//             Fitness World
//           </Navbar.Brand>
//         </Link>

//         <Link to={'/'} className='text-white text-decoration-none'>Home</Link>
//         <Link to={'/workout'} className='text-white text-decoration-none'>Workouts</Link>
//         <Link to={'/bmiCalc'} className='text-white text-decoration-none'>BMI Calculator</Link>
//         <Link to={'/calorieCalc'} className='text-white text-decoration-none'>Calorie Calculator</Link>


       
          
//             <button onClick={logout} className='btn   text-decoration-none ' >Logout <i className="fa-solid fa-right-from-bracket"></i></button>
       
        
//       </Container>
//     </Navbar>
//   )
// }

// export default Header




// import React, { useContext } from 'react'
// import { Container, Navbar, Nav, Button } from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom'
// import { tokenAuthContext } from '../contexts/AuthContextAPI'

// const Header = () => {
//   const navigate = useNavigate()
//   const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext)

//   const logout = () => {
//     localStorage.clear()
//     setIsAuthorised(false)
//     alert("Logging out!...") 
//     navigate('/')
//   }

//   return (
//     <Navbar expand="lg" className="border position-fixed w-100 z-3 bg-danger">
//       <Container>
//         {/* Brand */}
//         <Navbar.Brand as={Link} to="/" className="fw-bolder text-black">
//           <i className="fa-solid fa-dumbbell me-2"></i> Fitness World
//         </Navbar.Brand>

//         {/* Toggler Button */}
//         <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />

//         {/* Navbar Items */}
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="m-auto">
//             {/* <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link> */}
//             <Nav.Link as={Link} to="/workout" className="text-white me-3">Workouts</Nav.Link>
//             <Nav.Link as={Link} to="/chat" className="text-white me-3">FitBuddy</Nav.Link>
//             <Nav.Link as={Link} to="/bmiCalc" className="text-white me-3">BMI Calculator</Nav.Link>
//             <Nav.Link as={Link} to="/calorieCalc" className="text-white">Calorie Calculator</Nav.Link>
//             <Nav.Link as={Link} to="/userTrainerInteraction" className="text-white">Trainer Session</Nav.Link>
//           </Nav>

//           {/* Logout Button */}
//           <Button variant="dark" className="ms-lg-3 mt-2 mt-lg-0" onClick={logout}>
//             Logout <i className="fa-solid fa-right-from-bracket"></i>
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }

// export default Header





import { useContext, useState, useEffect } from "react"
import { Container, Navbar, Nav, Button } from "react-bootstrap"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { tokenAuthContext } from "../contexts/AuthContextAPI"
import './Header.css'
import { toast } from "react-toastify"

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const logout = () => {
    localStorage.clear()
    setIsAuthorised(false)
    toast("Logging out!...")
    navigate("/")
  }

  // Check if a nav link is active
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <Navbar
      expand="lg"
      className={`position-fixed w-100 z-3 py-2 ${scrolled ? "navbar-scrolled shadow-sm" : ""}`}
      style={{
        background: "#ffffff", // White background
        transition: "all 0.3s ease",
      }}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
          <i 
            className="fa-solid fa-dumbbell me-2" 
            style={{ 
              fontSize: "1.5rem", 
              color: "#e63946" // Red icon
            }}
          ></i>
          <span
            style={{
              fontSize: "1.4rem",
              color: "#e63946", // Red text
              fontWeight: "700",
            }}
          >
            Fitness World
          </span>
        </Navbar.Brand>

        {/* Toggler Button */}
        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          className="border-0 shadow-none" 
          style={{ color: "#e63946" }} 
        />

        {/* Navbar Items */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            {navItems.map((item, index) => (
              <Nav.Link
                key={index}
                as={Link}
                to={item.path}
                className={`mx-1 px-3 py-2 nav-link-custom ${isActive(item.path) ? "active-link" : ""}`}
                style={{
                  position: "relative",
                  fontWeight: isActive(item.path) ? "600" : "500",
                  color: isActive(item.path) ? "#e63946" : "#333333",
                  transition: "all 0.2s ease",
                }}
              >
                <i className={`${item.icon} me-2`} style={{ color: isActive(item.path) ? "#e63946" : "#666666" }}></i>
                {item.label}
                {isActive(item.path) && (
                  <div
                    className="active-indicator"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "50%",
                      transform: "translateX(-50%)",
                      height: "3px",
                      width: "30px",
                      backgroundColor: "#e63946", // Red indicator
                      borderRadius: "10px",
                    }}
                  ></div>
                )}
              </Nav.Link>
            ))}
          </Nav>

          {/* Logout Button */}
          <Button
            variant="danger"
            className="ms-lg-3 mt-2 mt-lg-0 d-flex align-items-center"
            onClick={logout}
            style={{
              borderRadius: "50px",
              padding: "0.5rem 1.2rem",
              fontWeight: "500",
              backgroundColor: "#e63946",
              border: "none",
              transition: "all 0.3s ease",
            }}
          >
            Logout
            <i className="fa-solid fa-right-from-bracket ms-2"></i>
          </Button>
        </Navbar.Collapse>
      </Container>

      
    </Navbar>
  )
}

// Navigation items array for cleaner code
const navItems = [
  { label: "Workouts", path: "/workout", icon: "fa-solid fa-dumbbell" },
  { label: "FitBuddy", path: "/chat", icon: "fa-solid fa-comment-dots" },
  { label: "BMI Calculator", path: "/bmiCalc", icon: "fa-solid fa-calculator" },
  { label: "Calorie Calculator", path: "/calorieCalc", icon: "fa-solid fa-fire" },
  { label: "Trainer Session", path: "/userTrainerInteraction", icon: "fa-solid fa-user-group" },
]

export default Header
