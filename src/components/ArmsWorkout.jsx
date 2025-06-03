
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Spinner } from 'react-bootstrap';
import { allWorkoutsUsersideAPI } from '../services/allAPI';
import SERVER_URL from '../services/serverURL';
import './WorkoutStyles.css';
import Header from './Header';

const ArmsWorkout = () => {
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
        const filteredData = result.data.filter(item => item.muscleName.trim() === 'Arms');
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
          <h1>Arms Workouts</h1>
          <p>Build impressive biceps and triceps with these arm workouts</p>
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
              <p>No Arms workouts found</p>
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

export default ArmsWorkout;
