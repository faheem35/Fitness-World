

// import React, { useState } from 'react';
// import { FloatingLabel, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { trainerLoginAPI } from '../services/allAPI';

// const TrainerAuth = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     try {
//       const response = await trainerLoginAPI({ email, password });
//       if (response.status === 200) {
//         localStorage.setItem("trainerToken", response.data.token);
       
//         navigate("/trainerHome");
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed. Try again.");
//     }
//   };

//   return (
//     <div style={{ minHeight: '100vh', width: '100%',background: 'linear-gradient(to bottom, white,rgb(151, 58, 58))'
//     }} className='d-flex justify-content-center align-items-center ' >
//       <div className='container d-flex justify-content-center'>
//         <div className='card shadow p-4 w-50 text-center bg-black rounded'>
//           <div className='row align-items-center'>
//             <h1 className='my-3 text-danger'><i className="fa-solid fa-dumbbell"></i> Fitness World</h1>
//             <h5 className='text-center text-white mb-3'>Trainer Panel</h5>

//             {error && <p className="text-danger">{error}</p>} {/* Show error messages */}

//             <Form onSubmit={handleLogin}>
//               <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
//                 <Form.Control 
//                   type="email" 
//                   placeholder="name@example.com" 
//                   value={email} 
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </FloatingLabel>

//               <FloatingLabel controlId="floatingPassword" label="Password">
//                 <Form.Control 
//                   type="password" 
//                   placeholder="Password" 
//                   value={password} 
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </FloatingLabel>

//               <div className='mt-3 d-flex justify-content-center'>
//                 <button type="submit" className='btn btn-danger mb-2 d-flex '>
//                   Login  
//                 </button>
//                 {/* <button type="submit" className='btn btn-danger mb-2 w-25 d-flex justify-content-center align-items-center'>
//   Login  
// </button> */}

//               </div>

              
//             </Form>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrainerAuth;






import { useState } from "react"
import { Form, Container, Row, Col, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { trainerLoginAPI } from "../services/allAPI"

const TrainerAuth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  // Define styles object within the component
  const styles = {
    loginPage: {
      minHeight: "100vh",
      backgroundColor: "#f8f9fa",
      position: "relative",
      overflow: "hidden",
    },
    backgroundShape1: {
      position: "absolute",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #ff6b6b, #ff8e8e)",
      top: "-250px",
      right: "-100px",
      zIndex: 0,
    },
    backgroundShape2: {
      position: "absolute",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #ff6b6b, #ff8e8e)",
      bottom: "-150px",
      left: "-100px",
      zIndex: 0,
      opacity: 0.7,
    },
    patternOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage:
        'url(\'data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fillOpacity="0.1" fillRule="evenodd"/%3E%3C/svg%3E\')',
      zIndex: 0,
    },
    contentContainer: {
      position: "relative",
      zIndex: 1,
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    loginContainer: {
      width: "100%",
      maxWidth: "1000px",
    },
    row: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
    },
    imageCol: {
      padding: 0,
      position: "relative",
      minHeight: "400px",
      background: "linear-gradient(135deg, #ff6b6b, #ff8e8e)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    imageOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
      opacity: 0.2,
    },
    brandContent: {
      position: "relative",
      zIndex: 1,
      padding: "40px",
      color: "white",
      textAlign: "center",
    },
    formCol: {
      padding: "40px",
    },
    formTitle: {
      fontSize: "28px",
      fontWeight: "700",
      marginBottom: "10px",
      color: "#333",
    },
    formSubtitle: {
      fontSize: "16px",
      color: "#777",
      marginBottom: "30px",
    },
    formGroup: {
      marginBottom: "25px",
    },
    formControl: {
      height: "50px",
      borderRadius: "8px",
      border: "2px solid #eee",
      padding: "10px 15px",
      fontSize: "15px",
      transition: "all 0.3s ease",
    },
    formControlFocus: {
      borderColor: "#ff6b6b",
      boxShadow: "0 0 0 0.2rem rgba(255, 107, 107, 0.25)",
    },
    loginBtn: {
      height: "50px",
      borderRadius: "8px",
      background: "#ff6b6b",
      border: "none",
      fontWeight: "600",
      fontSize: "16px",
      transition: "all 0.3s ease",
    },
    loginBtnHover: {
      background: "#ff5252",
      transform: "translateY(-2px)",
      boxShadow: "0 5px 15px rgba(255, 107, 107, 0.4)",
    },
    errorAlert: {
      backgroundColor: "#fff8f8",
      color: "#ff6b6b",
      border: "1px solid #ffe0e0",
      borderRadius: "8px",
      padding: "12px 15px",
      fontSize: "14px",
      marginBottom: "20px",
    },
    iconContainer: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 20px",
    },
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("") // Clear previous errors
    setIsLoading(true)

    try {
      const response = await trainerLoginAPI({ email, password })
      if (response.status === 200) {
        localStorage.setItem("trainerToken", response.data.token)
        navigate("/trainerHome")
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div style={styles.loginPage}>
      {/* <div style={styles.backgroundShape1}></div>
      <div style={styles.backgroundShape2}></div> */}
      <div style={styles.patternOverlay}></div>

      <div style={styles.contentContainer}>
        <Container style={styles.loginContainer}>
          <Row style={styles.row}>
            {/* Left side - Image/Brand */}
            <Col md={5} style={styles.imageCol}>
              <div style={styles.imageOverlay}></div>
              <div style={styles.brandContent}>
                <div style={styles.iconContainer}>
                  <i className="fa-solid fa-dumbbell fa-3x" style={{ color: "white" }}></i>
                </div>
                <h1 style={{ fontWeight: "800", fontSize: "32px", marginBottom: "15px" }}>FITNESS WORLD</h1>
                <p style={{ fontSize: "18px", opacity: "0.9", marginBottom: "25px" }}>Train hard. Transform lives.</p>
                <div
                  style={{
                    padding: "15px 25px",
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "10px",
                    backdropFilter: "blur(5px)",
                  }}
                >
                  <p style={{ fontSize: "15px", marginBottom: "0" }}>
                    "The difference between the impossible and the possible lies in determination."
                  </p>
                  <p style={{ fontSize: "14px", marginTop: "10px", opacity: "0.8" }}>— Tommy Lasorda</p>
                </div>
              </div>
            </Col>

            {/* Right side - Login Form */}
            <Col md={7} style={styles.formCol}>
              <h2 style={styles.formTitle}>Welcome Back!</h2>
              <p style={styles.formSubtitle}>Sign in to access your trainer dashboard</p>

              {error && <div style={styles.errorAlert}>{error}</div>}

              <Form onSubmit={handleLogin}>
                <Form.Group style={styles.formGroup}>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.formControl}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#ff6b6b"
                      e.target.style.boxShadow = "0 0 0 0.2rem rgba(255, 107, 107, 0.25)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#eee"
                      e.target.style.boxShadow = "none"
                    }}
                  />
                </Form.Group>

                <Form.Group style={styles.formGroup}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.formControl}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#ff6b6b"
                      e.target.style.boxShadow = "0 0 0 0.2rem rgba(255, 107, 107, 0.25)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#eee"
                      e.target.style.boxShadow = "none"
                    }}
                  />
                </Form.Group>

                <div className="d-grid mt-4">
                  <Button
                    type="submit"
                    style={styles.loginBtn}
                    disabled={isLoading}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "#ff5252"
                      e.currentTarget.style.transform = "translateY(-2px)"
                      e.currentTarget.style.boxShadow = "0 5px 15px rgba(255, 107, 107, 0.4)"
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "#ff6b6b"
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.boxShadow = "none"
                    }}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default TrainerAuth
