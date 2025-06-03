

// import React, { useState } from 'react';
// import authImg from "../assets/loginRegisterImg-2.jpeg";
// import { FloatingLabel, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { adminLoginAPI } from '../services/allAPI'; 

// const AdminAuth = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); 

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     try {
//       const response = await adminLoginAPI({ email, password });
//       if (response.status === 200) {
//         localStorage.setItem("adminToken", response.data.token); 
//         navigate("/adminHome"); 
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed. Try again.");
//     }
//   };

//   return (
//     <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center'>
//       <div className='container d-flex justify-content-center'>
//         <div className='card shadow p-4 w-50 text-center'>
//           <div className='row align-items-center'>
          
            
            
//               <h1 className='my-3 text-warning'><i className="fa-solid fa-dumbbell"></i> Fitness World</h1>

//   <h5 className='text-center text-secondary mb-2'>Admin Panel</h5>

//               {error && <p className="text-danger">{error}</p>} {/* Show error messages */}

//               <Form onSubmit={handleLogin}>
//                 <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
//                   <Form.Control 
//                     type="email" 
//                     placeholder="name@example.com" 
//                     value={email} 
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </FloatingLabel>

//                 <FloatingLabel controlId="floatingPassword" label="Password">
//                   <Form.Control 
//                     type="password" 
//                     placeholder="Password" 
//                     value={password} 
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </FloatingLabel>

//                 <div className='mt-3 d-flex justify-content-center'>
//                   <button type="submit" className='btn btn-primary mb-2 d-flex '>
//                     Login  
//                   </button>
//                 </div>
//               </Form>

            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminAuth;



// import React, { useState } from 'react';
// import { FloatingLabel, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { adminLoginAPI } from '../services/allAPI';

// const AdminAuth = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     try {
//       const response = await adminLoginAPI({ email, password });
//       if (response.status === 200) {
//         localStorage.setItem("adminToken", response.data.token);
//         // navigate("/adminHome");
//         navigate("/adminUploadedWorkouts");
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
//             <h5 className='text-center text-white mb-3'>Admin Panel</h5>

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

// export default AdminAuth;



import { useState } from "react"
import { FloatingLabel, Form, Container, Row, Col, Card, Alert, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { adminLoginAPI } from "../services/allAPI"

const AdminAuth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  // Style objects
  const styles = {
    wrapper: {
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f8f9fa",
      position: "relative",
      overflow: "hidden",
      padding: "2rem 0",
    },
    shapeTop: {
      position: "absolute",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #ff5252, #b33939)",
      top: "-100px",
      right: "-100px",
      opacity: 0.7,
      zIndex: 0,
    },
    shapeBottom: {
      position: "absolute",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #b33939, #ff5252)",
      bottom: "-100px",
      left: "-100px",
      opacity: 0.7,
      zIndex: 0,
    },
    card: {
      border: "none",
      borderRadius: "15px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      background: "white",
      overflow: "hidden",
      transition: "transform 0.3s ease",
      position: "relative",
      zIndex: 1,
    },
    logoContainer: {
      width: "80px",
      height: "80px",
      background: "linear-gradient(135deg, #ff5252, #b33939)",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto 1rem",
      boxShadow: "0 5px 15px rgba(179, 57, 57, 0.3)",
    },
    logoIcon: {
      color: "white",
      fontSize: "2rem",
    },
    brandTitle: {
      color: "#333",
      fontWeight: 700,
      marginBottom: "0.5rem",
      fontSize: "2.2rem",
    },
    adminSubtitle: {
      color: "#6c757d",
      fontSize: "1rem",
      letterSpacing: "1px",
      textTransform: "uppercase",
      marginBottom: "0",
    },
    formInput: {
      border: "1px solid #e1e1e1",
      borderRadius: "8px",
      transition: "border-color 0.3s ease",
    },
    loginButton: {
      background: "linear-gradient(135deg, #ff5252, #b33939)",
      border: "none",
      borderRadius: "8px",
      padding: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      transition: "all 0.3s ease",
      color: "white",
    },
    footerText: {
      color: "#adb5bd",
      fontSize: "0.8rem",
      marginBottom: "0",
    },
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("") // Clear previous errors
    setIsLoading(true)

    try {
      const response = await adminLoginAPI({ email, password })
      if (response.status === 200) {
        localStorage.setItem("adminToken", response.data.token)
        navigate("/adminUploadedWorkouts")
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div style={styles.wrapper} >
      {/* Decorative shapes */}
      <div style={styles.shapeTop}></div>
      <div style={styles.shapeBottom}></div>

      <Container>
        <Row className="justify-content-center ">
          <Col md={10} lg={8} xl={6}>
            <Card style={styles.card}>
              <Card.Body className="p-4 p-md-5">
                <div className="text-center mb-4">
                  <div style={styles.logoContainer}>
                    <i className="fa-solid fa-dumbbell" style={styles.logoIcon}></i>
                  </div>
                  <h1 style={styles.brandTitle}>Fitness World</h1>
                  <p style={styles.adminSubtitle}>Admin Portal</p>
                </div>

                {error && (
                  <Alert
                    variant="danger"
                    className="text-center mb-4"
                    style={{
                      animation: "fadeIn 0.5s ease-in",
                    }}
                  >
                    {error}
                  </Alert>
                )}

                <Form onSubmit={handleLogin}>
                  <FloatingLabel controlId="floatingInput" label="Email address" className="mb-4">
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={styles.formInput}
                      className="form-control"
                    />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingPassword" label="Password" className="mb-4">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      style={styles.formInput}
                      className="form-control"
                    />
                  </FloatingLabel>

                  <div className="d-grid gap-2 mt-4">
                    <Button
                      type="submit"
                      style={styles.loginButton}
                      disabled={isLoading}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = "linear-gradient(135deg, #b33939, #ff5252)"
                        e.currentTarget.style.boxShadow = "0 5px 15px rgba(179, 57, 57, 0.3)"
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = "linear-gradient(135deg, #ff5252, #b33939)"
                        e.currentTarget.style.boxShadow = "none"
                      }}
                    >
                      {isLoading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Logging in...
                        </>
                      ) : (
                        "Login"
                      )}
                    </Button>
                  </div>
                </Form>

                <div className="text-center mt-4">
                  <p style={styles.footerText}>© 2025 Fitness World. All rights reserved.</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Add keyframes for the fadeIn animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  )
}

export default AdminAuth

