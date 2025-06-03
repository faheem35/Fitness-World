
// import React, { useEffect, useRef, useState } from "react";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// function randomID(len = 5) {
//   let result = "";
//   const chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
//   for (let i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return result;
// }

// // Function to check if the current time is within the allowed range (8 AM - 10 AM)
// function isWithinAllowedTime() {
//   const now = new Date();
//   const hours = now.getHours();
//   return hours >= 8 && hours < 10; // 8 AM to 10 AM
// }

// const TrainerHome = () => {
//   const [joined, setJoined] = useState(false);
//   const meetingContainerRef = useRef(null);
//   const roomID = "trainingRoom123"; // Fixed Room ID for consistency

//   const joinMeeting = () => {
//     if (!isWithinAllowedTime()) {
//       alert("You can only join between 8 AM and 10 AM.");
//       return;
//     }

//     const appID = 691848548;
//     const serverSecret = "f21303cc94bab5be58a0f42d20a537e3";

//     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//       appID,
//       serverSecret,
//       roomID,
//       randomID(5),
//       randomID(5)
//     );

//     const zp = ZegoUIKitPrebuilt.create(kitToken);

//     zp.joinRoom({
//       container: meetingContainerRef.current,
//       scenario: { mode: ZegoUIKitPrebuilt.GroupCall },
//     });

//     setJoined(true);
//   };

//   return (
//     <div style={{ width: "100vw", height: "100vh", textAlign: "center" }}>
//       {!joined ? (
//         <button onClick={joinMeeting} style={{ padding: "10px 20px", fontSize: "16px" }}>
//           Join Meeting
//         </button>
//       ) : (
//         <div className="myCallContainer" ref={meetingContainerRef} style={{ width: "100%", height: "100%" }}></div>
//       )}
//     </div>
//   );
// };

// export default TrainerHome;


// import React, { useEffect, useRef, useState } from "react";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
// import { Container, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// function randomID(len = 5) {
//   let result = "";
//   const chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
//   for (let i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return result;
// }

// // Function to check if the current time is within the allowed range (8 AM - 10 AM)
// function isWithinAllowedTime() {
//   const now = new Date();
//   const hours = now.getHours();
//   return hours >= 7 && hours < 16; // 8 AM to 10 AM
// }

// const TrainerHome = () => {
//   const [joined, setJoined] = useState(false);
//   const meetingContainerRef = useRef(null);
//   const roomID = "trainingRoom123"; // Fixed Room ID for consistency

//   const joinMeeting = () => {
//     if (!isWithinAllowedTime()) {
//       alert("You can only join between 8 AM and 10 AM.");
//       return;
//     }

//     const appID = 691848548;
//     const serverSecret = "f21303cc94bab5be58a0f42d20a537e3";

//     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//       appID,
//       serverSecret,
//       roomID,
//       randomID(5),
//       randomID(5)
//     );

//     const zp = ZegoUIKitPrebuilt.create(kitToken);

//     zp.joinRoom({
//       container: meetingContainerRef.current,
//       scenario: { mode: ZegoUIKitPrebuilt.GroupCall },
//     });

//     setJoined(true);
//   };

//   return (
//     <Container fluid className="d-flex justify-content-center align-items-center vh-100 text-center">
      
//       {!joined ? (
//         <Button variant="primary" onClick={joinMeeting} className="px-4 py-2 fs-5">
//           Join Session 
//         </Button>
//       ) : (
//         <div ref={meetingContainerRef} className="w-100 h-100"></div>
//       )}
//     </Container>
//   );
// };

// export default TrainerHome;




"use client"

import { useEffect, useRef, useState } from "react"
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
import { Container, Button, Row, Col, Card, Alert, Badge } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function randomID(len = 5) {
  let result = ""
  const chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP"
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

// Function to check if the current time is within the allowed ranges (7-9 AM or 7-9 PM)
function isWithinAllowedTime() {
  const now = new Date()
  const hours = now.getHours()

  // Morning session: 7 AM to 9 AM (hours 7-8)
  const isMorningSession = hours >= 7 && hours < 9

  // Evening session: 7 PM to 9 PM (hours 19-20)
  const isEveningSession = hours >= 19 && hours < 21

  return isMorningSession || isEveningSession
}

// Function to get the next available session time
function getNextSessionTime() {
  const now = new Date()
  const hours = now.getHours()

  // If before morning session
  if (hours < 7) {
    return "morning session at 7:00 AM"
  }
  // If between morning and evening sessions
  else if (hours >= 9 && hours < 19) {
    return "evening session at 7:00 PM"
  }
  // If after evening session
  else {
    // Create tomorrow's date for morning session
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return "morning session tomorrow at 7:00 AM"
  }
}

const TrainerHome = () => {
  const [joined, setJoined] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [showTimeAlert, setShowTimeAlert] = useState(false)
  const meetingContainerRef = useRef(null)
  const roomID = "trainingRoom123" // Fixed Room ID for consistency

  // Styles object
  const styles = {
    pageWrapper: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      padding: "20px 0",
    },
    header: {
      background: "linear-gradient(to right, #ff6b6b, #ff8e8e)",
      color: "white",
      borderRadius: "10px",
      padding: "20px",
      marginBottom: "30px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
    headerTitle: {
      fontWeight: "700",
      marginBottom: "5px",
    },
    headerSubtitle: {
      opacity: "0.9",
      fontSize: "1.1rem",
    },
    mainCard: {
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      border: "none",
    },
    cardHeader: {
      background: "#f8f9fa",
      borderBottom: "1px solid #eee",
      padding: "20px",
    },
    timeDisplay: {
      fontSize: "0.9rem",
      color: "#6c757d",
    },
    joinButton: {
      background: "linear-gradient(to right, #ff6b6b, #ff8e8e)",
      border: "none",
      borderRadius: "8px",
      padding: "12px 30px",
      fontSize: "1.1rem",
      fontWeight: "600",
      boxShadow: "0 4px 12px rgba(255, 107, 107, 0.3)",
      transition: "all 0.3s ease",
    },
    joinButtonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 15px rgba(255, 107, 107, 0.4)",
    },
    sessionInfo: {
      background: "rgba(255, 107, 107, 0.1)",
      borderRadius: "8px",
      padding: "15px",
      marginBottom: "20px",
    },
    sessionBadge: {
      background: "#ff6b6b",
      color: "white",
      fontWeight: "500",
      padding: "5px 10px",
    },
    timeAlert: {
      borderRadius: "8px",
      marginBottom: "20px",
    },
    meetingContainer: {
      height: "75vh",
      width: "100%",
      borderRadius: "10px",
      overflow: "hidden",
    },
    statusIndicator: {
      display: "inline-block",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      marginRight: "8px",
    },
    statusActive: {
      backgroundColor: "#28a745",
    },
    statusInactive: {
      backgroundColor: "#dc3545",
    },
    timeSlots: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginTop: "10px",
    },
    timeSlot: {
      background: "rgba(255, 107, 107, 0.1)",
      border: "1px solid rgba(255, 107, 107, 0.2)",
      borderRadius: "6px",
      padding: "5px 10px",
      fontSize: "0.85rem",
      color: "#ff6b6b",
    },
    nextSession: {
      fontStyle: "italic",
      marginTop: "10px",
    },
  }

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const joinMeeting = () => {
    if (!isWithinAllowedTime()) {
      setShowTimeAlert(true)
      setTimeout(() => setShowTimeAlert(false), 5000)
      return
    }

    const appID = 691848548
    const serverSecret = "f21303cc94bab5be58a0f42d20a537e3"

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5))

    const zp = ZegoUIKitPrebuilt.create(kitToken)

    zp.joinRoom({
      container: meetingContainerRef.current,
      scenario: { mode: ZegoUIKitPrebuilt.GroupCall },
      showScreenSharingButton: true,
    })

    setJoined(true)
  }

  const isTimeAllowed = isWithinAllowedTime()
  const nextSession = !isTimeAllowed ? getNextSessionTime() : null

  return (
    <div style={styles.pageWrapper}>
      <Container>
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <div style={styles.header}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h1 style={styles.headerTitle}>
                    <i className="fa-solid fa-dumbbell me-2"></i>
                    Fitness World
                  </h1>
                  <p style={styles.headerSubtitle}>Trainer Dashboard</p>
                </div>
                <div className="d-none d-md-block">
                  <div className="text-end">
                    <div
                      style={{
                        ...styles.statusIndicator,
                        ...(isTimeAllowed ? styles.statusActive : styles.statusInactive),
                      }}
                    ></div>
                    <span>{isTimeAllowed ? "Sessions Active" : "Sessions Inactive"}</span>
                    <div style={styles.timeDisplay}>Current time: {formatTime(currentTime)}</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Main Content */}
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <Card style={styles.mainCard}>
              <Card.Header style={styles.cardHeader}>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <h2 className="mb-0">Live Training Session</h2>
                  <div className="d-block d-md-none mt-2 mt-md-0">
                    <div
                      style={{
                        ...styles.statusIndicator,
                        ...(isTimeAllowed ? styles.statusActive : styles.statusInactive),
                      }}
                    ></div>
                    <span>{isTimeAllowed ? "Active" : "Inactive"}</span>
                  </div>
                </div>
              </Card.Header>
              <Card.Body className="p-4">
                {!joined ? (
                  <>
                    {showTimeAlert && (
                      <Alert variant="danger" style={styles.timeAlert}>
                        <i className="fa-solid fa-clock me-2"></i>
                        Sessions are only available during morning (7:00 AM - 9:00 AM) and evening (7:00 PM - 9:00 PM)
                        hours
                      </Alert>
                    )}

                    <div style={styles.sessionInfo}>
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                        <h5 className="mb-0">Room: trainingRoom123</h5>
                        <Badge style={styles.sessionBadge}>Group Session</Badge>
                      </div>
                      <p className="mb-0">
                        Join the live training session to connect with your clients. You can share your screen,
                        communicate via video/audio, and demonstrate exercises in real-time.
                      </p>

                      <div style={styles.timeSlots}>
                        <div style={styles.timeSlot}>
                          <i className="fa-solid fa-sun me-1"></i> Morning: 7:00 AM - 9:00 AM
                        </div>
                        <div style={styles.timeSlot}>
                          <i className="fa-solid fa-moon me-1"></i> Evening: 7:00 PM - 9:00 PM
                        </div>
                      </div>

                      {!isTimeAllowed && (
                        <p style={styles.nextSession}>
                          <i className="fa-solid fa-arrow-right me-1"></i> Next available: {nextSession}
                        </p>
                      )}
                    </div>

                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <div>
                        <p className="mb-0" style={styles.timeDisplay}>
                          <i className="fa-regular fa-clock me-1"></i>
                          Current time: {formatTime(currentTime)}
                        </p>
                      </div>
                      <Button
                        onClick={joinMeeting}
                        style={styles.joinButton}
                        disabled={!isTimeAllowed}
                        onMouseOver={(e) => {
                          if (isTimeAllowed) {
                            e.currentTarget.style.transform = "translateY(-2px)"
                            e.currentTarget.style.boxShadow = "0 6px 15px rgba(255, 107, 107, 0.4)"
                          }
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "translateY(0)"
                          e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 107, 107, 0.3)"
                        }}
                      >
                        <i className="fa-solid fa-video me-2"></i>
                        Join Session
                      </Button>
                    </div>
                  </>
                ) : (
                  <div style={styles.meetingContainer} ref={meetingContainerRef}></div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TrainerHome
