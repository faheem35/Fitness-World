

// import React, { useState } from "react";
// import { Form, Button, Container, Image, Row, Col } from "react-bootstrap";
// import { adminAddWorkoutAPI } from "../services/allAPI";

// const muscleGroups = ["Chest", "Abs", "Legs", "Shoulders"];

// const AdminAddWorkout = () => {
//   const [workoutData, setWorkoutData] = useState({
//     muscleName: "",
//     workoutName: "",
//     count: "",
//     workoutImg: null,
//     preview: "",
//     tutorialLink: "",
//   });

//   const handleMuscleSelect = (muscle) => {
//     setWorkoutData({ ...workoutData, muscleName: muscle });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setWorkoutData({ ...workoutData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       const validTypes = ["image/jpeg", "image/png", "image/gif"];
//       if (!validTypes.includes(file.type)) {
//         alert("Please upload a valid image file (JPEG, PNG, GIF)!");
//         return;
//       }

//       if (file.size > 5 * 1024 * 1024) {
//         alert("File size should be less than 5MB!");
//         return;
//       }

//       const previewUrl = URL.createObjectURL(file);
//       setWorkoutData({ ...workoutData, workoutImg: file, preview: previewUrl });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { muscleName, workoutName, count, tutorialLink, workoutImg } = workoutData;
//     if (muscleName && workoutName && count && tutorialLink && workoutImg) {
//       const reqBody = new FormData();
//       reqBody.append("muscleName", muscleName);
//       reqBody.append("workoutName", workoutName);
//       reqBody.append("count", count);
//       reqBody.append("tutorialLink", tutorialLink);
//       reqBody.append("workoutImg", workoutImg);

//       const token = localStorage.getItem("adminToken");
//       if (token) {
//         const reqHeader = {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         };

//         try {
//           const result = await adminAddWorkoutAPI(reqBody, reqHeader);
//           if (result.status === 200) {
//             alert("Workout added successfully!");
//             setWorkoutData({
//               muscleName: "",
//               workoutName: "",
//               count: "",
//               workoutImg: null,
//               preview: "",
//               tutorialLink: "",
//             });
//           } else {
//             alert(result.response.data);
//           }
//         } catch (err) {
//           console.error(err);
//         }
//       }
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   return (
//    <div className="bg-dark" style={{minHeight:"100vh"}}>
//       <Container className="pt-4">
//         <h2 className="text-center mb-4 text-danger fw-bold">New Workout</h2>
//         <Form onSubmit={handleSubmit}>
//           <Row className="mb-4 text-center">
//             <Col xs={12}>
//               <Form.Label className="text-white fw-bold">Select Muscle:</Form.Label>
//             </Col>
//             <Col xs={12} className="d-flex flex-wrap justify-content-center gap-2">
//               {muscleGroups.map((muscle) => (
//                 <Button
//                   key={muscle}
//                   variant={workoutData.muscleName === muscle ? "warning" : "outline-secondary"}
//                   onClick={() => handleMuscleSelect(muscle)}
//                 >
//                   {muscle}
//                 </Button>
//               ))}
//             </Col>
//           </Row>
  
//           <Row className="mb-4">
//             <Col md={6} className="mb-3">
//               <Form.Group>
//                 <Form.Label className="text-white">Name of Workout:</Form.Label>
//                 <Form.Control type="text" name="workoutName" value={workoutData.workoutName} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//             <Col md={6} className="mb-3">
//               <Form.Group>
//                 <Form.Label className="text-white">Count of Exercise:</Form.Label>
//                 <Form.Control type="number" name="count" value={workoutData.count} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//           </Row>
  
//           <Row className="mb-4">
//             <Col md={6} className="mb-3">
//               <Form.Group>
//                 <Form.Label className="text-white">Workout Image:</Form.Label>
//                 <Form.Control type="file" onChange={handleFileChange} accept="image/jpeg, image/png, image/gif" required />
//               </Form.Group>
//             </Col>
//             <Col md={6} className="d-flex justify-content-center align-items-center">
//               {workoutData.preview && <Image src={workoutData.preview} alt="Workout" thumbnail width="200px" />}
//             </Col>
//           </Row>
  
//           <Row className="mb-4">
//             <Col xs={12}>
//               <Form.Group>
//                 <Form.Label className="text-white">Demo Tutorial URL:</Form.Label>
//                 <Form.Control type="url" name="tutorialLink" value={workoutData.tutorialLink} onChange={handleChange} required />
//               </Form.Group>
//             </Col>
//           </Row>
  
//           <Row>
//             <Col className="text-center">
//               <Button variant="success" type="submit" className="w-50 w-md-25">
//                 Add Workout
//               </Button>
//             </Col>
//           </Row>
//         </Form>
//       </Container>
//    </div>
//   );
// };

// export default AdminAddWorkout;


"use client"

import { useState } from "react"
import { Form, Button, Container, Image, Row, Col, Card, Badge, InputGroup, Alert } from "react-bootstrap"
import { adminAddWorkoutAPI } from "../services/allAPI"

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
// Import Bootstrap Icons via CDN in your HTML file:
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

const muscleGroups = ["Chest", "Abs", "Legs", "Shoulders", "Arms" , "Glutes", "Back" ,"Full Body"]

const AdminAddWorkout = () => {
  const [workoutData, setWorkoutData] = useState({
    muscleName: "",
    workoutName: "",
    count: "",
    workoutImg: null,
    preview: "",
    tutorialLink: "",
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ text: "", type: "" })
  const [validated, setValidated] = useState(false)

  // Custom styles
  const styles = {
    gradientBackground: {
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      minHeight: "100vh",
    },
    cardHeader: {
      background: "linear-gradient(45deg, #1a1a1a, #343a40)",
      color: "white",
      padding: "1.5rem",
    },
    pulseAnimation: {
      animation: "pulse 1.5s infinite",
      boxShadow: "0 0 0 0 rgba(13, 110, 253, 0.7)",
    },
    imagePreviewContainer: {
      transition: "all 0.3s ease",
      maxWidth: "100%",
      position: "relative",
    },
    imagePreview: {
      maxHeight: "200px",
      objectFit: "contain",
    },
    placeholderContainer: {
      textAlign: "center",
      color: "#6c757d",
      padding: "2rem",
      border: "1px dashed #dee2e6",
      borderRadius: "0.375rem",
      width: "100%",
    },
    placeholderIcon: {
      fontSize: "3rem",
    },
    removeButton: {
      position: "absolute",
      top: "5px",
      right: "5px",
      borderRadius: "50%",
      padding: "0.25rem 0.5rem",
    },
    fileUploadContainer: {
      transition: "all 0.3s ease",
    },
  }

  const handleMuscleSelect = (muscle) => {
    setWorkoutData({ ...workoutData, muscleName: muscle })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setWorkoutData({ ...workoutData, [name]: value })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"]
      if (!validTypes.includes(file.type)) {
        setMessage({ text: "Please upload a valid image file (JPEG, PNG, GIF)!", type: "danger" })
        return
      }
      if (file.size > 5 * 1024 * 1024) {
        setMessage({ text: "File size should be less than 5MB!", type: "danger" })
        return
      }
      const previewUrl = URL.createObjectURL(file)
      setWorkoutData({ ...workoutData, workoutImg: file, preview: previewUrl })
      setMessage({ text: "Image uploaded successfully!", type: "success" })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget

    if (form.checkValidity() === false) {
      e.stopPropagation()
      setValidated(true)
      return
    }

    setValidated(true)
    setLoading(true)

    const { muscleName, workoutName, count, tutorialLink, workoutImg } = workoutData

    if (muscleName && workoutName && count && tutorialLink && workoutImg) {
      const reqBody = new FormData()
      reqBody.append("muscleName", muscleName)
      reqBody.append("workoutName", workoutName)
      reqBody.append("count", count)
      reqBody.append("tutorialLink", tutorialLink)
      reqBody.append("workoutImg", workoutImg)

      const token = localStorage.getItem("adminToken")
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
        try {
          const result = await adminAddWorkoutAPI(reqBody, reqHeader)
          if (result.status === 200) {
            setMessage({ text: "Workout added successfully!", type: "success" })
            setWorkoutData({
              muscleName: "",
              workoutName: "",
              count: "",
              workoutImg: null,
              preview: "",
              tutorialLink: "",
            })
            setValidated(false)
          } else {
            setMessage({ text: result.response.data || "Failed to add workout", type: "danger" })
          }
        } catch (err) {
          console.error(err)
          setMessage({ text: "An error occurred. Please try again.", type: "danger" })
        }
      }
    } else {
      setMessage({ text: "Please fill in all fields.", type: "danger" })
    }

    setLoading(false)
  }

  return (
    <div style={styles.gradientBackground} className="d-flex align-items-center py-5">
      <Container>
        <Card className="shadow-lg border-0 rounded-lg overflow-hidden">
          <Card.Header style={styles.cardHeader}>
            <h2 className="text-center mb-0 fw-bold">
              <i className="bi bi-plus-circle me-2"></i>
              Add New Workout
            </h2>
          </Card.Header>

          <Card.Body className="p-4 p-lg-5">
            {message.text && (
              <Alert
                variant={message.type}
                dismissible
                onClose={() => setMessage({ text: "", type: "" })}
                className="animate__animated animate__fadeIn"
              >
                {message.text}
              </Alert>
            )}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-4">
                <Col>
                  <Form.Group>
                    <Form.Label className="fw-bold mb-3">
                      <Badge bg="dark" className="p-2 me-2">
                        Step 1
                      </Badge>
                      Select Muscle Group:
                      {workoutData.muscleName && (
                        <Badge bg="success" className="ms-2 p-2">
                          {workoutData.muscleName} Selected
                        </Badge>
                      )}
                    </Form.Label>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      {muscleGroups.map((muscle) => (
                        <Button
                          key={muscle}
                          variant={workoutData.muscleName === muscle ? "primary" : "outline-secondary"}
                          className="px-4 py-2 rounded-pill"
                          style={workoutData.muscleName === muscle ? styles.pulseAnimation : {}}
                          onClick={() => handleMuscleSelect(muscle)}
                        >
                          {muscle}
                        </Button>
                      ))}
                    </div>
                    <Form.Control.Feedback type="invalid" className="d-block">
                      {!workoutData.muscleName && "Please select a muscle group"}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">
                      <Badge bg="dark" className="p-2 me-2">
                        Step 2
                      </Badge>
                      Workout Name:
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <i className="bi bi-activity"></i>
                      </InputGroup.Text>
                      <Form.Control
                        className="rounded-end"
                        type="text"
                        name="workoutName"
                        value={workoutData.workoutName}
                        onChange={handleChange}
                        placeholder="e.g., Push-ups"
                        required
                      />
                      <Form.Control.Feedback type="invalid">Please provide a workout name.</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">
                      <Badge bg="dark" className="p-2 me-2">
                        Step 3
                      </Badge>
                      Repetition Count:
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <i className="bi bi-repeat"></i>
                      </InputGroup.Text>
                      <Form.Control
                        className="rounded-end"
                        type="number"
                        name="count"
                        value={workoutData.count}
                        onChange={handleChange}
                        placeholder="e.g., 12"
                        required
                      />
                      <Form.Control.Feedback type="invalid">Please provide a repetition count.</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col lg={6}>
                  <Form.Group className="mb-3" style={styles.fileUploadContainer}>
                    <Form.Label className="fw-bold">
                      <Badge bg="dark" className="p-2 me-2">
                        Step 4
                      </Badge>
                      Upload Image:
                    </Form.Label>
                    <div className="custom-file-upload">
                      <InputGroup>
                        <InputGroup.Text>
                          <i className="bi bi-image"></i>
                        </InputGroup.Text>
                        <Form.Control
                          className="rounded-end"
                          type="file"
                          onChange={handleFileChange}
                          accept="image/jpeg, image/png, image/gif"
                          required={!workoutData.workoutImg}
                        />
                      </InputGroup>
                      <small className="text-muted d-block mt-1">Max file size: 5MB. Formats: JPEG, PNG, GIF</small>
                    </div>
                  </Form.Group>
                </Col>
                <Col lg={6} className="d-flex justify-content-center align-items-center">
                  {workoutData.preview ? (
                    <div style={styles.imagePreviewContainer}>
                      <Image
                        src={workoutData.preview || "/placeholder.svg"}
                        alt="Workout Preview"
                        className="rounded-3 shadow-sm img-thumbnail"
                        style={styles.imagePreview}
                      />
                      <Button
                        variant="danger"
                        size="sm"
                        style={styles.removeButton}
                        onClick={() => setWorkoutData({ ...workoutData, workoutImg: null, preview: "" })}
                      >
                        <i className="bi bi-x"></i>
                      </Button>
                    </div>
                  ) : (
                    <div style={styles.placeholderContainer}>
                      <i className="bi bi-image" style={styles.placeholderIcon}></i>
                      <p className="mt-2">Image preview will appear here</p>
                    </div>
                  )}
                </Col>
              </Row>

              <Row className="mb-4">
                <Col>
                  <Form.Group>
                    <Form.Label className="fw-bold">
                      <Badge bg="dark" className="p-2 me-2">
                        Step 5
                      </Badge>
                      Tutorial Video URL:
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <i className="bi bi-youtube"></i>
                      </InputGroup.Text>
                      <Form.Control
                        className="rounded-end"
                        type="url"
                        name="tutorialLink"
                        value={workoutData.tutorialLink}
                        onChange={handleChange}
                        placeholder="e.g., https://youtube.com/watch?v=example"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid URL for the tutorial video.
                      </Form.Control.Feedback>
                    </InputGroup>
                    <small className="text-muted">Provide a YouTube video link</small>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-4">
                <Col className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    className="py-2 px-5 rounded-pill shadow-sm"
                    disabled={loading}
                    size="lg"
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Processing...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-plus-circle me-2"></i>
                        Add Workout
                      </>
                    )}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>

      {/* Add keyframes for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(13, 110, 253, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(13, 110, 253, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(13, 110, 253, 0);
          }
        }
      `}</style>
    </div>
  )
}

export default AdminAddWorkout
