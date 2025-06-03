// import React, { useEffect, useState } from 'react';
// import {  Col, Container, Row } from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal';
// import { allWorkoutsUsersideAPI } from '../services/allAPI';
// import SERVER_URL from '../services/serverURL';

// const LegWorkout = () => {
         
//           const [allWorkouts, setAllWorkouts] = useState([]);
//           const [show, setShow] = useState(false);
//           const [selectedVideo, setSelectedVideo] = useState("");
        
//           useEffect(() => {
//             getAllWorkouts();
//           }, []);
        
//           const getAllWorkouts = async () => {
//             try {
//               const result = await allWorkoutsUsersideAPI();
//               console.log("API Response:", result);
        
//               if (result.status === 200) {
//                 // Filter chest workouts
//                 const filteredData = result.data.filter(item => item.muscleName.trim() === 'Legs');
//                 console.log("Filtered Data:", filteredData);
//                 setAllWorkouts(filteredData);
//               }
//             } catch (err) {
//               console.log("API Error:", err);
//             }
//           };
        
//           const handleShow = (videoUrl) => {
//             setSelectedVideo(videoUrl);
//             setShow(true);
//           };
        
//           const handleClose = () => {
//                     setSelectedVideo(null); 
//                     setShow(false);
//                   };
                  
        
//           return (
//             <>
//              <div className='bg-black' style={{ minHeight: "75vh" }}>
//                 <h1 className="text-danger text-center py-5">Leg Workouts</h1>
          
//                 {allWorkouts.length > 0 ? (
//                   allWorkouts.map(workout => (
//                     <div key={workout._id} className="border rounded container bg-white my-4">
//                       <Container>
//                         <Row className="align-items-center justify-content-between text-center text-md-start">
//                           {/* Image Section */}
//                           <Col xs={12} md={4} className="d-flex align-items-center justify-content-center justify-content-md-start">
//                             <img
//                               width="100px"
//                               src={`${SERVER_URL}/uploads/${workout?.workoutImg}`}
//                               alt={workout.workoutName}
//                             />
//                           </Col>
          
//                           {/* Text Section */}
//                           <Col xs={12} md={4} className="text-center text-md-start">
//                             <h4 className="text-black mt-4">{workout.workoutName}</h4>
//                             <p className='text-danger fw-bold'>*{workout.count}</p>
//                           </Col>
          
                         
//                            {/* Watch Demo Section */}
//                                        <Col xs={12} md={4} className="text-center text-md-end">
//                                        <p onClick={() => handleShow(workout.tutorialLink)} className="text-primary fw-bold" style={{ cursor: "pointer" }}>
//             Watch Tutorial
//           </p>
          
//                                        </Col>
//                         </Row>
//                       </Container>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="text-white text-center">No workouts found</div>
//                 )}
          
//              </div>
//               {/* Modal for video */}
//               <Modal size="xl" centered show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                   <Modal.Title>Workout Tutorial</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                 {selectedVideo && (
//   <iframe 
//     width="100%" 
//     height="700" 
//     src={selectedVideo} 
//     title="YouTube video player" 
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//     referrerPolicy="strict-origin-when-cross-origin" 
//     allowFullScreen
//   ></iframe>
// )}

        
                 
//                  </Modal.Body>
//               </Modal>
//             </>
//           );
// }

// export default LegWorkout




import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Spinner } from 'react-bootstrap';
import { allWorkoutsUsersideAPI } from '../services/allAPI';
import SERVER_URL from '../services/serverURL';
import './WorkoutStyles.css';
import Header from './Header';

const AbsWorkout = () => {
  const [allWorkouts, setAllWorkouts] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");


  useEffect(() => {
    getAllWorkouts();
  }, []);

  const getAllWorkouts = async () => {
    try {
      setLoading(true);
      const result = await allWorkoutsUsersideAPI();

      if (result.status === 200) {
        // Filter abs workouts
        const filteredData = result.data.filter(item => item.muscleName.trim() === 'Legs');
        setAllWorkouts(filteredData);
      }
    } catch (err) {
      console.log("API Error:", err);
      setError("Failed to load workouts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // const handleShow = (videoUrl) => {
  //   let videoId = "";
  
  //   if (videoUrl.includes("youtu.be")) {
  //     videoId = videoUrl.split("/").pop().split("?")[0]; 
  //   } 
  //   else if (videoUrl.includes("youtube.com/watch")) {
  //     const urlParams = new URLSearchParams(new URL(videoUrl).search);
  //     videoId = urlParams.get("v");
  //   }
  
  //   const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : videoUrl;
  //   setSelectedVideo(embedUrl);
  //   setShow(true);
  // };
  
  const handleShow = (videoUrl, title) => {
  let videoId = "";

  if (videoUrl.includes("youtu.be")) {
    videoId = videoUrl.split("/").pop().split("?")[0];
  } else if (videoUrl.includes("youtube.com/watch")) {
    const urlParams = new URLSearchParams(new URL(videoUrl).search);
    videoId = urlParams.get("v");
  }

  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : videoUrl;
  setSelectedVideo(embedUrl);
  setSelectedTitle(title);
  setShow(true);
};

  const handleClose = () => {
    setSelectedVideo(null); 
    setShow(false);
  };

  return (
    <>
    <Header/>
      <div className="muscle-page pt-5">
        <div className="muscle-header">
          <h1>Leg Workouts</h1>
          <p>Build powerful legs with these comprehensive leg workouts</p>
        </div>
        
        <Container fluid className="muscle-container">
          {loading ? (
            <div className="loading-container">
              <Spinner animation="border" role="status" className="loading-spinner" />
              <p>Loading workouts...</p>
            </div>
          ) : error ? (
            <div className="error-container">
              <p>{error}</p>
              <button onClick={getAllWorkouts} className="retry-btn">Try Again</button>
            </div>
          ) : allWorkouts.length === 0 ? (
            <div className="empty-container">
              <p>No Leg workouts found</p>
            </div>
          ) : (
            <Row className="workout-grid">
              {allWorkouts.map(workout => (
                <Col key={workout._id} xs={12} md={6} lg={4} className="workout-col">
                  <div className="workout-item">
                    <div className="workout-image-wrapper">
                      <img 
                        src={`${SERVER_URL}/uploads/${workout?.workoutImg}`} 
                        alt={workout.workoutName}
                        className="workout-image"
                      />
                      <div className="workout-overlay">
                        <button 
                          className="play-btn"
                         onClick={() => handleShow(workout.tutorialLink, workout.workoutName)}
  
                        >
                          <i className="play-icon">▶</i>
                        </button>
                      </div>
                    </div>
                    <div className="workout-info">
                      <h3>{workout.workoutName}</h3>
                      <div className="workout-meta">
                        <span className="workout-count">{workout.count}</span>
                        <button 
                          className="watch-btn"
                          onClick={() => handleShow(workout.tutorialLink)}
                        >
                          Watch Tutorial
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Container>
  
        <Modal 
          show={show} 
          onHide={handleClose} 
          size="lg" 
          centered
          className="video-modal"
        >
          <Modal.Header closeButton>
           <Modal.Title>{selectedTitle}</Modal.Title>
  
          </Modal.Header>
          <Modal.Body>
            {selectedVideo && (
              <div className="video-container">
                <iframe 
                  src={selectedVideo} 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default AbsWorkout;

 