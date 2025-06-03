// import React, { useState } from "react";
// import { Container, Form, Button, Row, Col, Card, ListGroup, Alert, Modal } from "react-bootstrap";
// import Header from "../components/Header";

// const CalorieCalculator = () => {
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("male");
//   const [activity, setActivity] = useState(1.2);
//   const [calories, setCalories] = useState(null);
//   const [recommendations, setRecommendations] = useState(null);
//   const [error, setError] = useState("");
//   const [showRecommendations, setShowRecommendations] = useState(false);

//   const calculateCalories = (e) => {
//     e.preventDefault();
//     setError(""); // Reset error state

//     if (!weight || !height || !age) {
//       setError("Please fill in all fields!");
//       return;
//     }

//     let bmr;
//     if (gender === "male") {
//       bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
//     } else {
//       bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
//     }

//     const totalCalories = Math.round(bmr * activity);
//     setCalories(totalCalories);

//     let foodRecommendations;
//     if (activity < 1.55) {
//       foodRecommendations = {
//         eat: ["Oats", "Eggs", "Lean meats", "Vegetables", "Nuts", "Greek yogurt", "Fruits"],
//         avoid: ["Fast food", "Sugary drinks", "Refined carbs", "Processed snacks", "Deep-fried foods"],
//       };
//     } else {
//       foodRecommendations = {
//         eat: ["Brown rice", "Quinoa", "Lean chicken", "Salmon", "Almonds", "Sweet potatoes", "Protein shakes"],
//         avoid: ["Sugary cereals", "White bread", "Soda", "Alcohol", "Artificially sweetened drinks"],
//       };
//     }

//     setRecommendations(foodRecommendations);
//     setShowRecommendations(true); // Show the recommendations modal
//   };

//   const handleCloseModal = () => setShowRecommendations(false); // Close the modal

//   return (
//         <>
//                     <Header  />
//               <Container className="pt-5 ">
//                 <Row className="justify-content-center mt-5">
//                   <Col md={6} sm={12}>
//                     <Card className="shadow-lg border-0 rounded-3">
//                       <Card.Body className="p-4">
//                         <h2 className="text-center text-primary mb-4 fw-bold">Calorie Calculator</h2>
          
//                         {error && <Alert variant="danger">{error}</Alert>}
          
//                         <Form onSubmit={calculateCalories}>
//                           <Form.Group className="mb-3">
//                             <Form.Label className="fw-semibold text-white">Weight (kg)</Form.Label>
//                             <Form.Control
//                               type="number"
//                               placeholder="Enter weight"
//                               value={weight}
//                               onChange={(e) => setWeight(e.target.value)}
//                               required
//                             />
//                           </Form.Group>
          
//                           <Form.Group className="mb-3">
//                             <Form.Label className="fw-semibold text-white">Height (cm)</Form.Label>
//                             <Form.Control
//                               type="number"
//                               placeholder="Enter height"
//                               value={height}
//                               onChange={(e) => setHeight(e.target.value)}
//                               required
//                             />
//                           </Form.Group>
          
//                           <Form.Group className="mb-3">
//                             <Form.Label className="fw-semibold text-white">Age</Form.Label>
//                             <Form.Control
//                               type="number"
//                               placeholder="Enter age"
//                               value={age}
//                               onChange={(e) => setAge(e.target.value)}
//                               required
//                             />
//                           </Form.Group>
          
//                           <Form.Group className="mb-3">
//                             <Form.Label className="fw-semibold text-white">Gender</Form.Label>
//                             <Form.Select value={gender} onChange={(e) => setGender(e.target.value)} required>
//                               <option value="male">Male</option>
//                               <option value="female">Female</option>
//                             </Form.Select>
//                           </Form.Group>
          
//                           <Form.Group className="mb-3">
//                             <Form.Label className="fw-semibold text-white">Activity Level</Form.Label>
//                             <Form.Select value={activity} onChange={(e) => setActivity(Number(e.target.value))} required>
//                               <option value="1.2">Sedentary (little or no exercise)</option>
//                               <option value="1.375">Lightly active (light exercise/sports 1-3 days/week)</option>
//                               <option value="1.55">Moderately active (moderate exercise 3-5 days/week)</option>
//                               <option value="1.725">Very active (hard exercise 6-7 days a week)</option>
//                               <option value="1.9">Super active (very intense exercise daily)</option>
//                             </Form.Select>
//                           </Form.Group>
          
//                           <Button variant="success" type="submit" className="w-100 py-2 my-2">
//                             Calculate
//                           </Button>
//                         </Form>
          
//                         {calories && (
//                           <Card className="mt-4 text-center bg-success text-white p-3 rounded-3">
//                             <h4>Estimated Daily Calories</h4>
//                             <h2>{calories} kcal</h2>
//                           </Card>
//                         )}
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 </Row>
          
//                 {/* Modal for Food Recommendations */}
//                 <Modal show={showRecommendations} onHide={handleCloseModal} centered>
//                   <Modal.Header closeButton>
//                     <Modal.Title>Food Recommendations</Modal.Title>
//                   </Modal.Header>
//                   <Modal.Body>
//                     <Row>
//                       <Col md={6}>
//                         <h5 className="text-success fw-bold">✅ Foods to Eat</h5>
//                         <ListGroup>
//                           {recommendations?.eat.map((food, index) => (
//                             <ListGroup.Item key={index}>{food}</ListGroup.Item>
//                           ))}
//                         </ListGroup>
//                       </Col>
//                       <Col md={6}>
//                         <h5 className="text-danger fw-bold">❌ Foods to Avoid</h5>
//                         <ListGroup>
//                           {recommendations?.avoid.map((food, index) => (
//                             <ListGroup.Item key={index}>{food}</ListGroup.Item>
//                           ))}
//                         </ListGroup>
//                       </Col>
//                     </Row>
//                   </Modal.Body>
//                   <Modal.Footer>
//                     <Button variant="secondary" onClick={handleCloseModal}>
//                       Close
//                     </Button>
//                   </Modal.Footer>
//                 </Modal>
//               </Container>
//         </>
//   );
// };

// export default CalorieCalculator;




// import React, { useState } from "react";
// import { Container, Form, Button, Row, Col, Card, ListGroup, Alert, Modal } from "react-bootstrap";
// import Header from "../components/Header";

// const CalorieCalculator = () => {
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("male");
//   const [activity, setActivity] = useState(1.2);
//   const [calories, setCalories] = useState(null);
//   const [recommendations, setRecommendations] = useState(null);
//   const [error, setError] = useState("");
//   const [showCaloriesModal, setShowCaloriesModal] = useState(false);
//   const [showRecommendations, setShowRecommendations] = useState(false);

//   const calculateCalories = (e) => {
//     e.preventDefault();
//     setError("");

//     if (!weight || !height || !age) {
//       setError("Please fill in all fields!");
//       return;
//     }

//     let bmr;
//     if (gender === "male") {
//       bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
//     } else {
//       bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
//     }

//     const totalCalories = Math.round(bmr * activity);
//     setCalories(totalCalories);

//     let foodRecommendations;
//     if (activity < 1.55) {
//       foodRecommendations = {
//         eat: ["Oats", "Eggs", "Lean meats", "Vegetables", "Nuts", "Greek yogurt", "Fruits"],
//         avoid: ["Fast food", "Sugary drinks", "Refined carbs", "Processed snacks", "Deep-fried foods"],
//       };
//     } else {
//       foodRecommendations = {
//         eat: ["Brown rice", "Quinoa", "Lean chicken", "Salmon", "Almonds", "Sweet potatoes", "Protein shakes"],
//         avoid: ["Sugary cereals", "White bread", "Soda", "Alcohol", "Artificially sweetened drinks"],
//       };
//     }

//     setRecommendations(foodRecommendations);
//     setShowCaloriesModal(true); // Open Calories modal first
//   };

//   const handleCloseCaloriesModal = () => {
//     setShowCaloriesModal(false);
//     setShowRecommendations(true); // Open food recommendations modal
//   };

//   const handleCloseRecommendationsModal = () => setShowRecommendations(false);

//   return (
//     <>
//       <Header />
//      <div className="bg-black" style={{minHeight:"75vh"}}>
//         <Container className="pt-5 ">
//           <Row className="justify-content-center mt-5">
//             <Col md={6} sm={12}>
//               <Card className="shadow-lg border-0 rounded-3">
//                 <Card.Body className="p-4">
//                   <h2 className="text-center text-warning mb-4 fw-bold">Calorie Calculator</h2>
  
//                   {error && <Alert variant="danger">{error}</Alert>}
  
//                   <Form onSubmit={calculateCalories}>
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
  
//                     <Form.Group className="mb-3">
//                       <Form.Label className="fw-semibold text-white">Age</Form.Label>
//                       <Form.Control
//                         type="number"
//                         placeholder="Enter age"
//                         value={age}
//                         onChange={(e) => setAge(e.target.value)}
//                         required
//                       />
//                     </Form.Group>
  
//                     <Form.Group className="mb-3">
//                       <Form.Label className="fw-semibold text-white">Gender</Form.Label>
//                       <Form.Select value={gender} onChange={(e) => setGender(e.target.value)} required>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                       </Form.Select>
//                     </Form.Group>
  
//                     <Form.Group className="mb-3">
//                       <Form.Label className="fw-semibold text-white">Activity Level</Form.Label>
//                       <Form.Select value={activity} onChange={(e) => setActivity(Number(e.target.value))} required>
//                         <option value="1.2">Sedentary (little or no exercise)</option>
//                         <option value="1.375">Lightly active (light exercise/sports 1-3 days/week)</option>
//                         <option value="1.55">Moderately active (moderate exercise 3-5 days/week)</option>
//                         <option value="1.725">Very active (hard exercise 6-7 days a week)</option>
//                         <option value="1.9">Super active (very intense exercise daily)</option>
//                       </Form.Select>
//                     </Form.Group>
  
//                     <Button variant="info" type="submit" className="w-100 py-2 my-2">
//                       Calculate
//                     </Button>
//                   </Form>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
  
//           {/* Modal for Estimated Daily Calories */}
//           <Modal show={showCaloriesModal} onHide={() => setShowCaloriesModal(false)} centered>
//             <Modal.Header closeButton>
//               <Modal.Title>Estimated Daily Calories</Modal.Title>
//             </Modal.Header>
//             <Modal.Body className="text-center bg-success ">
//               <h2 className="text-white fw-bold">{calories} kcal</h2>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="primary" onClick={handleCloseCaloriesModal}>
//                 Next
//               </Button>
//             </Modal.Footer>
//           </Modal>
  
//           {/* Modal for Food Recommendations */}
//           <Modal show={showRecommendations} onHide={handleCloseRecommendationsModal} centered>
//             <Modal.Header closeButton>
//               <Modal.Title className="text-warning">Food Recommendations</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Row>
//                 <Col md={6}>
//                   <h5 className="text-success fw-bold">✅ Foods to Eat</h5>
//                   <ListGroup>
//                     {recommendations?.eat.map((food, index) => (
//                       <ListGroup.Item key={index}>{food}</ListGroup.Item>
//                     ))}
//                   </ListGroup>
//                 </Col>
//                 <Col md={6}>
//                   <h5 className="text-danger fw-bold">❌ Foods to Avoid</h5>
//                   <ListGroup>
//                     {recommendations?.avoid.map((food, index) => (
//                       <ListGroup.Item key={index}>{food}</ListGroup.Item>
//                     ))}
//                   </ListGroup>
//                 </Col>
//               </Row>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="primary" onClick={handleCloseRecommendationsModal}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </Container>
//      </div>
//     </>
//   );
// };

// export default CalorieCalculator;



import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card, ListGroup, Alert, Modal, Badge } from "react-bootstrap";
import { FaWeight, FaRulerVertical, FaBirthdayCake, FaVenus, FaMars, FaRunning, FaUtensils, FaFire, FaLeaf } from "react-icons/fa";
import Header from "../components/Header";

const CalorieCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState(1.2);
  const [calories, setCalories] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [error, setError] = useState("");
  const [showCaloriesModal, setShowCaloriesModal] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const calculateCalories = (e) => {
    e.preventDefault();
    setError("");

    if (!weight || !height || !age) {
      setError("Please fill in all fields!");
      return;
    }

    let bmr;
    if (gender === "male") {
      bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
    } else {
      bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
    }

    const totalCalories = Math.round(bmr * activity);
    setCalories(totalCalories);

    let foodRecommendations;
    if (activity < 1.55) {
      foodRecommendations = {
        eat: ["Oats", "Eggs", "Lean meats", "Vegetables", "Nuts", "Greek yogurt", "Fruits"],
        avoid: ["Fast food", "Sugary drinks", "Refined carbs", "Processed snacks", "Deep-fried foods"],
      };
    } else {
      foodRecommendations = {
        eat: ["Brown rice", "Quinoa", "Lean chicken", "Salmon", "Almonds", "Sweet potatoes", "Protein shakes"],
        avoid: ["Sugary cereals", "White bread", "Soda", "Alcohol", "Artificially sweetened drinks"],
      };
    }

    setRecommendations(foodRecommendations);
    setShowCaloriesModal(true); // Open Calories modal first
  };

  const handleCloseCaloriesModal = () => {
    setShowCaloriesModal(false);
    setShowRecommendations(true); // Open food recommendations modal
  };

  const handleCloseRecommendationsModal = () => setShowRecommendations(false);

  // Activity level descriptions with icons
  const activityLevels = [
    { value: 1.2, label: "Sedentary", description: "Little or no exercise", icon: "🧘" },
    { value: 1.375, label: "Lightly Active", description: "Light exercise 1-3 days/week", icon: "🚶" },
    { value: 1.55, label: "Moderately Active", description: "Moderate exercise 3-5 days/week", icon: "🏊" },
    { value: 1.725, label: "Very Active", description: "Hard exercise 6-7 days/week", icon: "🏃" },
    { value: 1.9, label: "Super Active", description: "Very intense exercise daily", icon: "🏋️" }
  ];

  return (
    <>
      <Header />
      <div 
        style={{ 
          minHeight: "100vh", 
          background: `url("https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80") no-repeat center center fixed`,
          backgroundSize: "cover",
          padding: "60px 0",
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
            background: "linear-gradient(135deg, rgba(44, 62, 80, 0.85) 0%, rgba(76, 161, 175, 0.85) 100%)",
            zIndex: 1
          }}
        ></div>
        
        <Container style={{ position: "relative", zIndex: 2 }}>
          {/* Decorative elements */}
          <div className="position-absolute d-none d-lg-block" style={{ top: "40px", right: "10%", zIndex: 0 }}>
            <div style={{ 
              width: "100px", 
              height: "100px", 
              borderRadius: "50%", 
              border: "2px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)"
            }}></div>
          </div>
          <div className="position-absolute d-none d-lg-block" style={{ bottom: "60px", left: "5%", zIndex: 0 }}>
            <div style={{ 
              width: "150px", 
              height: "150px", 
              borderRadius: "50%", 
              border: "2px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)"
            }}></div>
          </div>
          
          <Row className="justify-content-center">
            <Col lg={8} md={10} sm={12}>
              <div className="text-center mb-4">
                <h1 className="text-white fw-light mt-3" style={{ letterSpacing: "1px" }}>
                  <FaLeaf className="me-2 " style={{ verticalAlign: "middle" }} />
                  Daily Nutrition Calculator
                </h1>
                <p className="text-white-50" style={{ maxWidth: "600px", margin: "0 auto" }}>
                  Discover your optimal daily calorie intake based on your personal metrics and activity level
                </p>
              </div>
              
              <Card 
                className="shadow-lg border-0" 
                style={{ 
                  borderRadius: "20px", 
                  overflow: "hidden",
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(10px)"
                }}
              >
                <div className="bg-primary text-white p-4 text-center">
                  <h2 className="mb-1 fw-bold">
                    <FaFire className="me-2" />
                    Calorie Calculator
                  </h2>
                  <p className="mb-0 text-white-50">Find your personalized daily calorie needs</p>
                </div>
                
                <Card.Body className="p-4">
                  {error && (
                    <Alert variant="danger" className="d-flex align-items-center">
                      <i className="fas fa-exclamation-circle me-2"></i>
                      {error}
                    </Alert>
                  )}
  
                  <Form onSubmit={calculateCalories}>
                    <Row className="mb-4">
                      <Col md={6} className="mb-3 mb-md-0">
                        <Card 
                          onClick={() => setGender("male")}
                          className={`h-100 text-center p-3 cursor-pointer ${gender === "male" ? "border-primary" : "border"}`}
                          style={{ 
                            borderRadius: "12px", 
                            cursor: "pointer",
                            borderWidth: gender === "male" ? "2px" : "1px",
                            transition: "all 0.2s ease",
                            background: gender === "male" ? "rgba(13, 110, 253, 0.05)" : "white"
                          }}
                        >
                          <div className="d-flex flex-column align-items-center justify-content-center h-100">
                            <FaMars size={30} className="mb-2 text-primary" />
                            <div className="fw-bold">Male</div>
                          </div>
                          <Form.Check
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === "male"}
                            onChange={(e) => setGender(e.target.value)}
                            className="d-none"
                          />
                        </Card>
                      </Col>
                      <Col md={6}>
                        <Card 
                          onClick={() => setGender("female")}
                          className={`h-100 text-center p-3 cursor-pointer ${gender === "female" ? "border-primary" : "border"}`}
                          style={{ 
                            borderRadius: "12px", 
                            cursor: "pointer",
                            borderWidth: gender === "female" ? "2px" : "1px",
                            transition: "all 0.2s ease",
                            background: gender === "female" ? "rgba(13, 110, 253, 0.05)" : "white"
                          }}
                        >
                          <div className="d-flex flex-column align-items-center justify-content-center h-100">
                            <FaVenus size={30} className="mb-2 text-danger" />
                            <div className="fw-bold">Female</div>
                          </div>
                          <Form.Check
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={(e) => setGender(e.target.value)}
                            className="d-none"
                          />
                        </Card>
                      </Col>
                    </Row>
  
                    <Row>
                      <Col md={4} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-semibold d-flex align-items-center">
                            <FaWeight className="me-2 text-primary" /> Weight (kg)
                          </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required
                            className="py-2"
                            style={{ borderRadius: "10px" }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-semibold d-flex align-items-center">
                            <FaRulerVertical className="me-2 text-primary" /> Height (cm)
                          </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            required
                            className="py-2"
                            style={{ borderRadius: "10px" }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4} className="mb-3">
                        <Form.Group>
                          <Form.Label className="fw-semibold d-flex align-items-center">
                            <FaBirthdayCake className="me-2 text-primary" /> Age
                          </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            className="py-2"
                            style={{ borderRadius: "10px" }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
  
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold d-flex align-items-center">
                        <FaRunning className="me-2 text-primary" /> Activity Level
                      </Form.Label>
                      <div className="activity-selector">
                        {activityLevels.map((level) => (
                          <Card 
                            key={level.value}
                            onClick={() => setActivity(level.value)}
                            className={`mb-2 cursor-pointer ${activity === level.value ? "border-primary" : "border"}`}
                            style={{ 
                              borderRadius: "10px", 
                              cursor: "pointer",
                              borderWidth: activity === level.value ? "2px" : "1px",
                              transition: "all 0.2s ease",
                              background: activity === level.value ? "rgba(13, 110, 253, 0.05)" : "white"
                            }}
                          >
                            <Card.Body className="py-2 px-3">
                              <div className="d-flex align-items-center">
                                <div className="me-3 fs-4">{level.icon}</div>
                                <div>
                                  <div className="fw-bold">{level.label}</div>
                                  <div className="text-muted small">{level.description}</div>
                                </div>
                                {activity === level.value && (
                                  <Badge bg="primary" className="ms-auto">Selected</Badge>
                                )}
                              </div>
                            </Card.Body>
                          </Card>
                        ))}
                      </div>
                    </Form.Group>
  
                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="w-100 py-3 mt-2"
                      style={{ 
                        borderRadius: "10px",
                        fontWeight: "600",
                        fontSize: "1.1rem",
                        background: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)",
                        border: "none",
                        boxShadow: "0 4px 15px rgba(44, 62, 80, 0.35)"
                      }}
                    >
                      <FaFire className="me-2" /> Calculate Calories
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
              
              {/* Elegant tagline */}
              <div className="text-center mt-4">
                <p className="text-white" style={{ fontWeight: "300", letterSpacing: "1px", opacity: "0.8" }}>
                  "Let food be thy medicine and medicine be thy food" — Hippocrates
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Modal for Estimated Daily Calories */}
      <Modal 
        show={showCaloriesModal} 
        onHide={() => setShowCaloriesModal(false)} 
        centered
        size="md"
        contentClassName="border-0 rounded-4 overflow-hidden"
      >
        <div className="position-relative">
          <div 
            className="position-absolute top-0 start-0 end-0 text-center py-4"
            style={{ 
              background: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)",
              borderRadius: "16px 16px 0 0"
            }}
          >
            <h4 className="text-white mb-0 fw-light" style={{ letterSpacing: "1px" }}>Your Daily Calorie Needs</h4>
          </div>
          
          <Modal.Body className="pt-5 pb-4 px-4">
            <div className="text-center mt-4 pt-3">
              <div 
                className="mx-auto mb-4 d-flex flex-column justify-content-center align-items-center"
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)",
                  boxShadow: "0 10px 25px rgba(44, 62, 80, 0.35)"
                }}
              >
                <div className="display-4 fw-light text-white mb-0">{calories}</div>
                <div className="text-white opacity-75">calories</div>
              </div>
              
              <Card 
                className="border-0 mb-4" 
                style={{ 
                  borderRadius: "12px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
                }}
              >
                <Card.Body className="p-3">
                  <div className="d-flex justify-content-between mb-2">
                    <div>To maintain weight:</div>
                    <div className="fw-bold">{calories} calories/day</div>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <div>To lose weight:</div>
                    <div className="fw-bold text-warning">{calories - 500} calories/day</div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>To gain weight:</div>
                    <div className="fw-bold text-success">{calories + 500} calories/day</div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Modal.Body>
          
          <Modal.Footer className="border-0 justify-content-center pb-4">
            <Button 
              variant="light" 
              onClick={() => setShowCaloriesModal(false)}
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
                background: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)",
                border: "none",
                boxShadow: "0 4px 15px rgba(44, 62, 80, 0.35)"
              }}
              className="px-4 py-2"
              onClick={handleCloseCaloriesModal}
            >
              <FaUtensils className="me-2" /> See Food Recommendations
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
  
      {/* Modal for Food Recommendations */}
      <Modal 
        show={showRecommendations} 
        onHide={handleCloseRecommendationsModal} 
        centered
        size="lg"
        contentClassName="border-0 rounded-4 overflow-hidden"
      >
        <div className="position-relative">
          <div 
            className="position-absolute top-0 start-0 end-0 text-center py-4"
            style={{ 
              background: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)",
              borderRadius: "16px 16px 0 0"
            }}
          >
            <h4 className="text-white mb-0 fw-light" style={{ letterSpacing: "1px" }}>
              <FaUtensils className="me-2" />
              Personalized Food Recommendations
            </h4>
          </div>
          
          <Modal.Body className="pt-5 pb-4 px-4 mt-4">
            <Row className="mt-3">
              <Col md={6} className="mb-4 mb-md-0">
                <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: "15px", overflow: "hidden" }}>
                  <Card.Header className="bg-success text-white py-3">
                    <h5 className="mb-0 fw-bold">
                      <span className="me-2">✅</span> Foods to Include
                    </h5>
                  </Card.Header>
                  <Card.Body className="p-0">
                    <ListGroup variant="flush">
                      {recommendations?.eat.map((food, index) => (
                        <ListGroup.Item key={index} className="py-3 d-flex align-items-center">
                          <div className="food-icon me-3 text-success">🥗</div>
                          {food}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: "15px", overflow: "hidden" }}>
                  <Card.Header className="bg-danger text-white py-3">
                    <h5 className="mb-0 fw-bold">
                      <span className="me-2">❌</span> Foods to Limit
                    </h5>
                  </Card.Header>
                  <Card.Body className="p-0">
                    <ListGroup variant="flush">
                      {recommendations?.avoid.map((food, index) => (
                        <ListGroup.Item key={index} className="py-3 d-flex align-items-center">
                          <div className="food-icon me-3 text-danger">🍔</div>
                          {food}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="mt-4 text-center text-muted">
              <p className="mb-0">
                <small>These recommendations are general guidelines. For personalized nutrition advice, consult with a registered dietitian.</small>
              </p>
            </div>
          </Modal.Body>
          
          <Modal.Footer className="border-0 justify-content-center pb-4">
            <Button 
              variant="light" 
              onClick={handleCloseRecommendationsModal}
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
                background: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)",
                border: "none",
                boxShadow: "0 4px 15px rgba(44, 62, 80, 0.35)"
              }}
              className="px-4 py-2"
              onClick={handleCloseRecommendationsModal}
            >
              Got It
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default CalorieCalculator;