// import React, { useState } from "react";
// import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
// import Header from "../components/Header";

// const BMICalculator = () => {
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [gender, setGender] = useState("male");
//   const [bmi, setBmi] = useState(null);
//   const [status, setStatus] = useState("");
//   const [statusColor, setStatusColor] = useState("");

//   const calculateBMI = (e) => {
//     e.preventDefault();
//     if (weight && height) {
//       const heightInMeters = height / 100;
//       const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
//       setBmi(bmiValue);
//       determineStatus(bmiValue);
//     }
//   };

//   const determineStatus = (bmiValue) => {
//     if (bmiValue < 18.5) {
//       setStatus("Underweight");
//       setStatusColor("warning");
//     } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
//       setStatus("Normal weight");
//       setStatusColor("success");
//     } else if (bmiValue >= 25 && bmiValue < 29.9) {
//       setStatus("Overweight");
//       setStatusColor("primary");
//     } else {
//       setStatus("Obese");
//       setStatusColor("danger");
//     }
//   };

//   return (
//           <>
//             <Header  />
            
//               <Container className="pt-5 d-flex justify-content-center pb-5">
//                 <Card className="p-4 shadow-lg my-5" style={{ maxWidth: "400px", width: "100%", borderRadius: "15px" }}>
//                   <h2 className="text-center mb-4 text-primary" style={{ fontWeight: "bold" }}>BMI Calculator</h2>
//                   <Form onSubmit={calculateBMI}>
//                     {/* Gender Selection */}
//                     <Form.Group className="mb-3">
//                       <Form.Label className="fw-semibold text-white">Gender</Form.Label>
//                       <Row>
//                         <Col>
//                           <Form.Check
//                             type="radio"
//                             label="Male"
//                             name="gender"
//                             value="male"
//                             checked={gender === "male"}
//                             onChange={(e) => setGender(e.target.value)}
//                           />
//                         </Col>
//                         <Col>
//                           <Form.Check
//                             type="radio"
//                             label="Female"
//                             name="gender"
//                             value="female"
//                             checked={gender === "female"}
//                             onChange={(e) => setGender(e.target.value)}
//                           />
//                         </Col>
//                       </Row>
//                     </Form.Group>
          
//                     {/* Weight Input */}
//                     <Form.Group className="mb-3">
//                       <Form.Label className="fw-semibold text-white">Weight (kg)</Form.Label>
//                       <Form.Control
//                         type="number"
//                         placeholder="Enter weight"
//                         value={weight}
//                         onChange={(e) => setWeight(e.target.value)}
//                         required
//                       />
//                     </Form.Group>
          
//                     {/* Height Input */}
//                     <Form.Group className="mb-3">
//                       <Form.Label className="fw-semibold text-white">Height (cm)</Form.Label>
//                       <Form.Control
//                         type="number"
//                         placeholder="Enter height"
//                         value={height}
//                         onChange={(e) => setHeight(e.target.value)}
//                         required
//                       />
//                     </Form.Group>
          
//                     {/* Calculate Button */}
//                     <Button variant="success" type="submit" className="w-100 text-white">
//                       Calculate BMI
//                     </Button>
//                   </Form>
          
//                   {/* BMI Result */}
//                   {bmi && (
//                     <Card className={`mt-4 text-center text-white bg-${statusColor} p-3 rounded`}>
//                       <h4 className="mb-1">Your BMI: {bmi}</h4>
//                       <p className="mb-0 fw-bold">{status}</p>
//                     </Card>
//                   )}
//                 </Card>
//               </Container>
//           </>
//   );
// };

// export default BMICalculator;



// import React, { useState } from "react";
// import { Container, Form, Button, Card, Row, Col, Modal } from "react-bootstrap";
// import Header from "../components/Header";

// const BMICalculator = () => {
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [gender, setGender] = useState("male");
//   const [bmi, setBmi] = useState(null);
//   const [status, setStatus] = useState("");
//   const [statusColor, setStatusColor] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const calculateBMI = (e) => {
//     e.preventDefault();
//     if (weight && height) {
//       const heightInMeters = height / 100;
//       const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
//       setBmi(bmiValue);
//       determineStatus(bmiValue);
//       setShowModal(true);
//     }
//   };

//   const determineStatus = (bmiValue) => {
//     if (bmiValue < 18.5) {
//       setStatus("Underweight");
//       setStatusColor("warning");
//     } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
//       setStatus("Normal weight");
//       setStatusColor("success");
//     } else if (bmiValue >= 25 && bmiValue < 29.9) {
//       setStatus("Overweight");
//       setStatusColor("primary");
//     } else {
//       setStatus("Obese");
//       setStatusColor("danger");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="bg-black d-flex align-items-center" style={{ minHeight: "75vh" }}>
//         <Container className="d-flex justify-content-center  pt-5">
//           <Card className="p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%", borderRadius: "15px" }}>
//             <h2 className="text-center mb-4 text-primary" style={{ fontWeight: "bold" }}>BMI Calculator</h2>
//             <Form onSubmit={calculateBMI}>
//               {/* Gender Selection */}
//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-semibold text-white">Gender</Form.Label>
//                 <Row>
//                   <Col>
//                     <Form.Check
//                       type="radio"
//                       label="Male"
//                       name="gender"
//                       value="male"
//                       checked={gender === "male"}
//                       onChange={(e) => setGender(e.target.value)}
//                     />
//                   </Col>
//                   <Col>
//                     <Form.Check
//                       type="radio"
//                       label="Female"
//                       name="gender"
//                       value="female"
//                       checked={gender === "female"}
//                       onChange={(e) => setGender(e.target.value)}
//                     />
//                   </Col>
//                 </Row>
//               </Form.Group>
  
//               {/* Weight Input */}
//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-semibold text-white">Weight (kg)</Form.Label>
//                 <Form.Control
//                   type="number"
//                   placeholder="Enter weight"
//                   value={weight}
//                   onChange={(e) => setWeight(e.target.value)}
//                   required
//                 />
//               </Form.Group>
  
//               {/* Height Input */}
//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-semibold text-white">Height (cm)</Form.Label>
//                 <Form.Control
//                   type="number"
//                   placeholder="Enter height"
//                   value={height}
//                   onChange={(e) => setHeight(e.target.value)}
//                   required
//                 />
//               </Form.Group>
  
//               {/* Calculate Button */}
//               <Button variant="success" type="submit" className="w-100 text-white">
//                 Calculate BMI
//               </Button>
//             </Form>
//           </Card>
//         </Container>
//       </div>

//       {/* BMI Result Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>BMI Result</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className={`text-center text-white bg-${statusColor} p-3 rounded`}>
//           <h4 className="mb-1">Your BMI: {bmi}</h4>
//           <p className="mb-0 fw-bold">{status}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default BMICalculator;


import React, { useState } from "react";
import { Container, Form, Button, Card, Row, Col, Modal } from "react-bootstrap";
import { FaLeaf } from "react-icons/fa";
import Header from "../components/Header";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("");
  const [showModal, setShowModal] = useState(false);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      determineStatus(bmiValue);
      setShowModal(true);
    }
  };

  const determineStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      setStatus("Underweight");
      setStatusColor("#E5B168"); // Gold
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setStatus("Normal weight");
      setStatusColor("#7FB685"); // Sage green
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setStatus("Overweight");
      setStatusColor("#6A8EAE"); // Steel blue
    } else {
      setStatus("Obese");
      setStatusColor("#C97064"); // Terra cotta
    }
  };

  return (
    <>
      <Header />
      <div 
        style={{ 
          minHeight: "100vh", 
          background: `url("https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80") no-repeat center center fixed`,
          backgroundSize: "cover",
          paddingTop: "200px",
          position: "relative"
        }}
      >
        {/* Overlay to ensure text readability */}
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(41, 50, 65, 0.8) 0%, rgba(72, 85, 99, 0.8) 100%)",
            zIndex: 1
          }}
        ></div>
        
        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row className="justify-content-center">
            <Col md={10} lg={8} xl={7}>
              {/* Decorative elements */}
              <div className="position-absolute d-none d-lg-block" style={{ top: "-30px", left: "-40px", zIndex: 0 }}>
                <div style={{ 
                  width: "120px", 
                  height: "120px", 
                  borderRadius: "50%", 
                  border: "2px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)"
                }}></div>
              </div>
              <div className="position-absolute d-none d-lg-block" style={{ bottom: "-50px", right: "-60px", zIndex: 0 }}>
                <div style={{ 
                  width: "150px", 
                  height: "150px", 
                  borderRadius: "50%", 
                  border: "2px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)"
                }}></div>
              </div>
              
              <Card 
                className="border-0" 
                style={{ 
                  borderRadius: "20px", 
                  overflow: "hidden",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.2), 0 5px 15px rgba(0,0,0,0.1)",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)"
                }}
              >
                <Card.Body className="p-0">
                  <Row className="g-0">
                    {/* Left side - Decorative */}
                    <Col md={5} className="d-none d-md-block">
                      <div 
                        className="h-100 d-flex flex-column justify-content-center align-items-center text-white p-5"
                        style={{ 
                          background: "linear-gradient(135deg, #3C4CAD 0%, #576EE0 100%)",
                          borderRadius: "20px 0 0 20px"
                        }}
                      >
                        <div className="text-center">
                          <div 
                            className="mb-4 mx-auto d-flex align-items-center justify-content-center"
                            style={{
                              width: "80px",
                              height: "80px",
                              borderRadius: "50%",
                              background: "rgba(255,255,255,0.2)"
                            }}
                          >
                            <FaLeaf size={36} />
                          </div>
                          <h3 className="fw-light mb-2" style={{ letterSpacing: "1px" }}>Body Mass Index</h3>
                          <p className="mb-4 opacity-75" style={{ fontSize: "0.9rem" }}>
                            Discover your ideal weight range for optimal health and wellness
                          </p>
                          <div className="mt-4">
                            <div className="d-flex justify-content-between mb-3">
                              <span>Underweight</span>
                              <span>&lt; 18.5</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                              <span>Normal</span>
                              <span>18.5 - 24.9</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                              <span>Overweight</span>
                              <span>25 - 29.9</span>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span>Obese</span>
                              <span>&gt; 30</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    
                    {/* Right side - Form */}
                    <Col md={7}>
                      <div className="p-4 p-lg-5">
                        <h2 
                          className="mb-4 text-center text-md-start" 
                          style={{ 
                            fontWeight: "300", 
                            color: "#3C4CAD",
                            letterSpacing: "1px"
                          }}
                        >
                          Calculate Your BMI
                        </h2>
                        
                        <Form onSubmit={calculateBMI}>
                          {/* Gender Selection */}
                          <Form.Group className="mb-4">
                            <Form.Label 
                              className="text-muted mb-3"
                              style={{ fontSize: "0.9rem", letterSpacing: "0.5px" }}
                            >
                              SELECT GENDER
                            </Form.Label>
                            <div className="d-flex">
                              <Button
                                variant={gender === "male" ? "primary" : "outline-primary"}
                                onClick={() => setGender("male")}
                                className="me-3 flex-grow-1 py-2"
                                style={{ 
                                  borderRadius: "10px",
                                  transition: "all 0.3s ease",
                                  opacity: gender === "male" ? 1 : 0.7
                                }}
                              >
                                Male
                              </Button>
                              <Button
                                variant={gender === "female" ? "primary" : "outline-primary"}
                                onClick={() => setGender("female")}
                                className="flex-grow-1 py-2"
                                style={{ 
                                  borderRadius: "10px",
                                  transition: "all 0.3s ease",
                                  opacity: gender === "female" ? 1 : 0.7
                                }}
                              >
                                Female
                              </Button>
                              <Form.Control
                                type="hidden"
                                name="gender"
                                value={gender}
                              />
                            </div>
                          </Form.Group>
                          
                          {/* Weight Input */}
                          <Form.Group className="mb-4">
                            <Form.Label 
                              className="text-muted mb-2"
                              style={{ fontSize: "0.9rem", letterSpacing: "0.5px" }}
                            >
                              WEIGHT (KG)
                            </Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Enter your weight"
                              value={weight}
                              onChange={(e) => setWeight(e.target.value)}
                              required
                              className="py-3"
                              style={{ 
                                borderRadius: "10px",
                                border: "1px solid #e0e0e0",
                                backgroundColor: "#f8f9fa"
                              }}
                            />
                          </Form.Group>
                          
                          {/* Height Input */}
                          <Form.Group className="mb-4">
                            <Form.Label 
                              className="text-muted mb-2"
                              style={{ fontSize: "0.9rem", letterSpacing: "0.5px" }}
                            >
                              HEIGHT (CM)
                            </Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Enter your height"
                              value={height}
                              onChange={(e) => setHeight(e.target.value)}
                              required
                              className="py-3"
                              style={{ 
                                borderRadius: "10px",
                                border: "1px solid #e0e0e0",
                                backgroundColor: "#f8f9fa"
                              }}
                            />
                          </Form.Group>
                          
                          {/* Calculate Button */}
                          <Button 
                            variant="primary" 
                            type="submit" 
                            className="w-100 py-3 mt-3"
                            style={{ 
                              borderRadius: "10px",
                              background: "linear-gradient(135deg, #3C4CAD 0%, #576EE0 100%)",
                              border: "none",
                              boxShadow: "0 4px 15px rgba(60, 76, 173, 0.35)",
                              fontWeight: "500",
                              letterSpacing: "0.5px"
                            }}
                          >
                            Calculate BMI
                          </Button>
                        </Form>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          {/* Elegant tagline */}
          <Row className="mt-5 justify-content-center">
            <Col md={8} className="text-center">
              <p className="text-white" style={{ fontWeight: "300", letterSpacing: "1px", opacity: "0.8" }}>
                "The first wealth is health" — Ralph Waldo Emerson
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* BMI Result Modal */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        centered
        size="md"
        contentClassName="border-0 rounded-4 overflow-hidden"
        backdropClassName="backdrop-blur"
      >
        <div className="position-relative">
          <div 
            className="position-absolute top-0 start-0 end-0 text-center py-4"
            style={{ 
              background: "linear-gradient(135deg, #3C4CAD 0%, #576EE0 100%)",
              borderRadius: "16px 16px 0 0"
            }}
          >
            <h4 className="text-white mb-0 fw-light" style={{ letterSpacing: "1px" }}>Your BMI Result</h4>
          </div>
          
          <Modal.Body className="pt-5 pb-4 px-4">
            <div className="text-center mt-4 pt-3">
              <div 
                className="mx-auto mb-4 d-flex flex-column justify-content-center align-items-center"
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  background: statusColor,
                  boxShadow: `0 10px 25px ${statusColor}80`
                }}
              >
                <div className="display-4 fw-light text-white mb-0">{bmi}</div>
                <div className="text-white opacity-75">BMI</div>
              </div>
              
              <h3 className="fw-normal mb-3" style={{ color: statusColor }}>{status}</h3>
              
              <Card 
                className="border-0 mb-4" 
                style={{ 
                  borderRadius: "12px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
                }}
              >
                <Card.Body className="p-3">
                  <p className="mb-0 text-center">
                    {bmi < 18.5 && "Your BMI suggests you may be underweight. Consider consulting with a healthcare professional about a balanced nutrition plan to reach a healthy weight."}
                    {bmi >= 18.5 && bmi < 24.9 && "Congratulations! Your BMI falls within the healthy weight range. Maintain your balanced diet and regular physical activity for continued wellness."}
                    {bmi >= 25 && bmi < 29.9 && "Your BMI indicates you may be overweight. Consider incorporating more physical activity and a balanced diet to achieve a healthier weight."}
                    {bmi >= 30 && "Your BMI suggests obesity. It's recommended to consult with a healthcare provider to develop a personalized weight management plan."}
                  </p>
                </Card.Body>
              </Card>
              
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column align-items-center mx-3">
                  <div 
                    style={{ 
                      width: "12px", 
                      height: "12px", 
                      borderRadius: "50%", 
                      backgroundColor: "#E5B168",
                      marginBottom: "8px"
                    }}
                  ></div>
                  <div className="small text-muted">Under</div>
                  <div className="small text-muted">&lt;18.5</div>
                </div>
                <div className="d-flex flex-column align-items-center mx-3">
                  <div 
                    style={{ 
                      width: "12px", 
                      height: "12px", 
                      borderRadius: "50%", 
                      backgroundColor: "#7FB685",
                      marginBottom: "8px"
                    }}
                  ></div>
                  <div className="small text-muted">Normal</div>
                  <div className="small text-muted">18.5-24.9</div>
                </div>
                <div className="d-flex flex-column align-items-center mx-3">
                  <div 
                    style={{ 
                      width: "12px", 
                      height: "12px", 
                      borderRadius: "50%", 
                      backgroundColor: "#6A8EAE",
                      marginBottom: "8px"
                    }}
                  ></div>
                  <div className="small text-muted">Over</div>
                  <div className="small text-muted">25-29.9</div>
                </div>
                <div className="d-flex flex-column align-items-center mx-3">
                  <div 
                    style={{ 
                      width: "12px", 
                      height: "12px", 
                      borderRadius: "50%", 
                      backgroundColor: "#C97064",
                      marginBottom: "8px"
                    }}
                  ></div>
                  <div className="small text-muted">Obese</div>
                  <div className="small text-muted">&gt;30</div>
                </div>
              </div>
            </div>
          </Modal.Body>
          
          <Modal.Footer className="border-0 justify-content-center pb-4">
            <Button 
              variant="light" 
              onClick={() => setShowModal(false)}
              className="px-4 py-2 me-2"
              style={{ 
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
              }}
            >
              Close
            </Button>
            <Button 
              style={{ 
                borderRadius: "10px",
                background: "linear-gradient(135deg, #3C4CAD 0%, #576EE0 100%)",
                border: "none",
                boxShadow: "0 4px 15px rgba(60, 76, 173, 0.35)"
              }}
              className="px-4 py-2"
              onClick={() => setShowModal(false)}
            >
              Got it
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default BMICalculator;