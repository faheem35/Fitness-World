
// import { useEffect, useRef, useState } from "react"
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
// import { Container, Button, Row, Col, Card, Alert, Badge } from "react-bootstrap"
// import { toast } from "react-toastify"
// import "bootstrap/dist/css/bootstrap.min.css"

// // Function to generate a random ID
// function randomID(len = 5) {
//   let result = ""
//   const chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP"
//   const maxPos = chars.length

//   for (let i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos))
//   }
//   return result
// }

// // Function to check if the current time is within the allowed ranges (7-9 AM or 7-9 PM)
// function isWithinAllowedTime() {
//   const now = new Date()
//   const hours = now.getHours()

//   // Morning session: 7 AM to 9 AM (hours 7-8)
//   const isMorningSession = hours >= 7 && hours < 9

//   // Evening session: 7 PM to 9 PM (hours 19-20)
//   const isEveningSession = hours >= 19 && hours < 21

//   return isMorningSession || isEveningSession
// }

// // Function to get the next available session time
// function getNextSessionTime() {
//   const now = new Date()
//   const hours = now.getHours()

//   // If before morning session
//   if (hours < 7) {
//     return "morning session at 7:00 AM"
//   }
//   // If between morning and evening sessions
//   else if (hours >= 9 && hours < 19) {
//     return "evening session at 7:00 PM"
//   }
//   // If after evening session
//   else {
//     // Create tomorrow's date for morning session
//     const tomorrow = new Date()
//     tomorrow.setDate(tomorrow.getDate() + 1)
//     return "morning session tomorrow at 7:00 AM"
//   }
// }

// const UserTrainerInteraction = () => {
//   const [joined, setJoined] = useState(false)
//   const [currentTime, setCurrentTime] = useState(new Date())
//   const [showTimeAlert, setShowTimeAlert] = useState(false)
//   const meetingContainerRef = useRef(null)
//   const roomID = "trainingRoom123" // Fixed Room ID for consistency

//   // Fitness-inspired color theme
//   const theme = {
//     primary: "#f43f5e", // Rose-500 (energetic red)
//     primaryLight: "#fb7185", // Rose-400
//     primaryDark: "#e11d48", // Rose-600
//     secondary: "#fb923c", // Orange-400
//     gradient: "linear-gradient(to right, #f43f5e, #fb923c)", // Rose to Orange gradient
//     gradientAlt: "linear-gradient(135deg, #e11d48, #f97316)", // Darker gradient
//     lightBg: "#fff1f2", // Rose-50
//     lightBorder: "#fecdd3", // Rose-200
//     success: "#22c55e", // Green-500
//     error: "#ef4444", // Red-500
//     textPrimary: "#0f172a", // Slate-900
//     textSecondary: "#475569", // Slate-600
//     textLight: "#94a3b8", // Slate-400
//   }

//   // Styles object
//   const styles = {
//     pageWrapper: {
//       minHeight: "100vh",
//       background: "linear-gradient(135deg, #fff1f2 0%, #fff7ed 100%)", // Rose-50 to Orange-50
//       padding: "20px 0",
//       position: "relative", // Added for absolute positioning of back button
//     },
//     backButton: {
//       position: "fixed", // Changed to fixed to position relative to viewport
//       top: "20px",
//       left: "20px",
//       zIndex: 1000, // Higher z-index to ensure it's above everything
//       background: theme.gradient,
//       border: "none",
//       borderRadius: "50%",
//       width: "45px",
//       height: "45px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       color: "white",
//       fontSize: "1.2rem",
//       cursor: "pointer",
//       transition: "all 0.3s ease",
//       boxShadow: "0 4px 15px rgba(244, 63, 94, 0.3)",
//     },
//     backButtonHover: {
//       transform: "translateY(-2px) scale(1.05)",
//       boxShadow: "0 6px 18px rgba(244, 63, 94, 0.4)",
//     },
//     contentContainer: {
//       height: "100vh",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       padding: "20px",
//     },
//     mainCard: {
//       borderRadius: "20px",
//       overflow: "hidden",
//       boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
//       border: "none",
//       maxWidth: "900px",
//       margin: "0 auto",
//     },
//     cardHeader: {
//       background: theme.gradient,
//       color: "white",
//       padding: "25px",
//       position: "relative",
//       overflow: "hidden",
//     },
//     headerCircle1: {
//       position: "absolute",
//       width: "150px",
//       height: "150px",
//       borderRadius: "50%",
//       background: "rgba(255, 255, 255, 0.1)",
//       top: "-75px",
//       right: "-50px",
//     },
//     headerCircle2: {
//       position: "absolute",
//       width: "100px",
//       height: "100px",
//       borderRadius: "50%",
//       background: "rgba(255, 255, 255, 0.1)",
//       bottom: "-50px",
//       left: "-25px",
//     },
//     cardBody: {
//       padding: "30px",
//     },
//     timeDisplay: {
//       fontSize: "0.9rem",
//       color: theme.textSecondary,
//       marginBottom: "15px",
//     },
//     joinButton: {
//       background: theme.gradient,
//       border: "none",
//       borderRadius: "50px",
//       padding: "12px 40px",
//       fontSize: "1.1rem",
//       fontWeight: "600",
//       boxShadow: `0 4px 15px rgba(244, 63, 94, 0.3)`,
//       transition: "all 0.3s ease",
//       marginTop: "20px",
//     },
//     joinButtonHover: {
//       transform: "translateY(-3px)",
//       boxShadow: `0 8px 20px rgba(244, 63, 94, 0.4)`,
//     },
//     sessionInfo: {
//       background: theme.lightBg,
//       borderRadius: "15px",
//       padding: "20px",
//       marginBottom: "25px",
//       border: `1px solid ${theme.lightBorder}`,
//     },
//     sessionBadge: {
//       background: theme.primary,
//       color: "white",
//       fontWeight: "500",
//       padding: "5px 12px",
//       borderRadius: "20px",
//     },
//     timeAlert: {
//       borderRadius: "12px",
//       marginBottom: "20px",
//       border: "none",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
//     },
//     meetingContainer: {
//       height: "80vh",
//       width: "100%",
//       borderRadius: "15px",
//       overflow: "hidden",
//       boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
//     },
//     statusIndicator: {
//       display: "inline-block",
//       width: "10px",
//       height: "10px",
//       borderRadius: "50%",
//       marginRight: "8px",
//     },
//     statusActive: {
//       backgroundColor: theme.success,
//     },
//     statusInactive: {
//       backgroundColor: theme.error,
//     },
//     timeSlots: {
//       display: "flex",
//       gap: "10px",
//       flexWrap: "wrap",
//       marginTop: "15px",
//     },
//     timeSlot: {
//       background: "rgba(244, 63, 94, 0.1)",
//       border: "1px solid rgba(244, 63, 94, 0.2)",
//       borderRadius: "50px",
//       padding: "8px 15px",
//       fontSize: "0.9rem",
//       color: theme.primary,
//       display: "flex",
//       alignItems: "center",
//     },
//     nextSession: {
//       fontStyle: "italic",
//       marginTop: "15px",
//       color: theme.textSecondary,
//     },
//     iconContainer: {
//       width: "60px",
//       height: "60px",
//       borderRadius: "50%",
//       background: "rgba(255, 255, 255, 0.2)",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       marginBottom: "15px",
//     },
//     infoRow: {
//       display: "flex",
//       alignItems: "center",
//       marginBottom: "10px",
//     },
//     infoIcon: {
//       width: "30px",
//       height: "30px",
//       borderRadius: "50%",
//       background: "rgba(244, 63, 94, 0.1)",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       marginRight: "10px",
//       color: theme.primary,
//     },
//   }

//   // Update current time every minute
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date())
//     }, 60000)

//     return () => clearInterval(timer)
//   }, [])

//   const formatTime = (date) => {
//     return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
//   }

//   const joinMeeting = () => {
//     if (!isWithinAllowedTime()) {
//       setShowTimeAlert(true)
//       setTimeout(() => setShowTimeAlert(false), 5000)
//       return
//     }

//     const appID = 691848548
//     const serverSecret = "f21303cc94bab5be58a0f42d20a537e3"

//     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5))

//     const zp = ZegoUIKitPrebuilt.create(kitToken)

//     zp.joinRoom({
//       container: meetingContainerRef.current,
//       scenario: { mode: ZegoUIKitPrebuilt.GroupCall },
//       showScreenSharingButton: true,
//     })

//     setJoined(true)
//   }

//   // Handle back button click
//   const handleBack = () => {
//     // If in a meeting, leave the meeting and return to join screen
//     if (joined) {
//       setJoined(false)
//       return
//     }

//     // Otherwise, navigate back (this would typically use history.goBack() or similar)
//     // For this example, we'll just alert since we don't have actual navigation
//     toast("Navigating back to previous page")
//     // In a real app, you would use something like:
//     window.history.back() 
//     // or router.back() with React Router
//   }

//   const isTimeAllowed = isWithinAllowedTime()
//   const nextSession = !isTimeAllowed ? getNextSessionTime() : null

//   return (
//     <div style={styles.pageWrapper}>
//       {/* Back Button - Now outside the container */}
//       <button
//         style={styles.backButton}
//         onClick={handleBack}
//         onMouseOver={(e) => {
//           e.currentTarget.style.transform = "translateY(-2px) scale(1.05)"
//           e.currentTarget.style.boxShadow = "0 6px 18px rgba(244, 63, 94, 0.4)"
//         }}
//         onMouseOut={(e) => {
//           e.currentTarget.style.transform = "translateY(0) scale(1)"
//           e.currentTarget.style.boxShadow = "0 4px 15px rgba(244, 63, 94, 0.3)"
//         }}
//         aria-label="Go back"
//       >
//         <i className="fa-solid fa-arrow-left"></i>
//       </button>

//       <Container style={styles.contentContainer}>
//         <Row className="justify-content-center">
//           <Col xs={12} lg={10}>
//             <Card style={styles.mainCard}>
//               <Card.Header style={styles.cardHeader}>
//                 <div style={styles.headerCircle1}></div>
//                 <div style={styles.headerCircle2}></div>
//                 <div className="d-flex justify-content-between align-items-center flex-wrap">
//                   <div>
//                     <div style={styles.iconContainer}>
//                       <i className="fa-solid fa-dumbbell fa-2x"></i>
//                     </div>
//                     <h2 className="mb-1" style={{ fontWeight: "700" }}>
//                       Live Training Session
//                     </h2>
//                     <p className="mb-0" style={{ opacity: "0.9" }}>
//                       Connect with your personal trainer in real-time
//                     </p>
//                   </div>
//                   <div className="mt-3 mt-md-0">
//                     <div
//                       style={{
//                         ...styles.statusIndicator,
//                         ...(isTimeAllowed ? styles.statusActive : styles.statusInactive),
//                       }}
//                     ></div>
//                     <span style={{ color: "white", fontWeight: "500" }}>
//                       {isTimeAllowed ? "Session Active" : "Session Inactive"}
//                     </span>
//                   </div>
//                 </div>
//               </Card.Header>

//               <Card.Body style={styles.cardBody}>
//                 {!joined ? (
//                   <>
//                     {showTimeAlert && (
//                       <Alert variant="danger" style={styles.timeAlert}>
//                         <i className="fa-solid fa-circle-exclamation me-2"></i>
//                         Sessions are only available during morning (7:00 AM - 9:00 AM) and evening (7:00 PM - 9:00 PM)
//                         hours
//                       </Alert>
//                     )}

//                     <div style={styles.sessionInfo}>
//                       <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
//                         <h5 className="mb-0" style={{ fontWeight: "600", color: theme.textPrimary }}>
//                           Room: trainingRoom123
//                         </h5>
//                         <Badge style={styles.sessionBadge}>Live Session</Badge>
//                       </div>

//                       <div style={styles.infoRow}>
//                         <div style={styles.infoIcon}>
//                           <i className="fa-solid fa-video"></i>
//                         </div>
//                         <span style={{ color: theme.textPrimary }}>Join live video sessions with your trainer</span>
//                       </div>

//                       <div style={styles.infoRow}>
//                         <div style={styles.infoIcon}>
//                           <i className="fa-solid fa-comment"></i>
//                         </div>
//                         <span style={{ color: theme.textPrimary }}>Ask questions and get real-time feedback</span>
//                       </div>

//                       <div style={styles.infoRow}>
//                         <div style={styles.infoIcon}>
//                           <i className="fa-solid fa-desktop"></i>
//                         </div>
//                         <span style={{ color: theme.textPrimary }}>View demonstrations and follow along</span>
//                       </div>

//                       <div style={styles.timeSlots}>
//                         <div style={styles.timeSlot}>
//                           <i className="fa-solid fa-sun me-2"></i> Morning: 7:00 AM - 9:00 AM
//                         </div>
//                         <div style={styles.timeSlot}>
//                           <i className="fa-solid fa-moon me-2"></i> Evening: 7:00 PM - 9:00 PM
//                         </div>
//                       </div>

//                       {!isTimeAllowed && (
//                         <p style={styles.nextSession}>
//                           <i className="fa-solid fa-clock me-2"></i> Next available: {nextSession}
//                         </p>
//                       )}
//                     </div>

//                     <div className="d-flex justify-content-between align-items-center flex-wrap">
//                       <div>
//                         <p className="mb-0" style={styles.timeDisplay}>
//                           <i className="fa-regular fa-clock me-1"></i>
//                           Current time: {formatTime(currentTime)}
//                         </p>
//                       </div>
//                       <div className="d-flex justify-content-center w-100 mt-3">
//                         <Button
//                           onClick={joinMeeting}
//                           style={styles.joinButton}
//                           disabled={!isTimeAllowed}
//                           onMouseOver={(e) => {
//                             if (isTimeAllowed) {
//                               e.currentTarget.style.transform = "translateY(-3px)"
//                               e.currentTarget.style.boxShadow = "0 8px 20px rgba(244, 63, 94, 0.4)"
//                             }
//                           }}
//                           onMouseOut={(e) => {
//                             e.currentTarget.style.transform = "translateY(0)"
//                             e.currentTarget.style.boxShadow = "0 4px 15px rgba(244, 63, 94, 0.3)"
//                           }}
//                         >
//                           <i className="fa-solid fa-video me-2"></i>
//                           Join Session Now
//                         </Button>
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <div style={styles.meetingContainer} ref={meetingContainerRef}></div>
//                 )}
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default UserTrainerInteraction



import { useEffect, useRef, useState } from "react"
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
import { Container, Button, Row, Col, Card, Alert, Badge } from "react-bootstrap"
import { toast } from "react-toastify"
import "bootstrap/dist/css/bootstrap.min.css"

// Function to generate a random ID
function randomID(len = 5) {
  let result = ""
  const chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP"
  const maxPos = chars.length

  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return result
}

// Function to check if the current time is within the allowed ranges (7-9 AM or 7-9 PM)
function isWithinAllowedTime() {
  const now = new Date()
  const hours = now.getHours()
  return (hours >= 7 && hours < 9) || (hours >= 19 && hours < 21)
}

// Function to get the next available session time
function getNextSessionTime() {
  const now = new Date()
  const hours = now.getHours()

  if (hours < 7) return "morning session at 7:00 AM"
  if (hours >= 9 && hours < 19) return "evening session at 7:00 PM"

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return "morning session tomorrow at 7:00 AM"
}

const UserTrainerInteraction = () => {
  const [joined, setJoined] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [showTimeAlert, setShowTimeAlert] = useState(false)
  const meetingContainerRef = useRef(null)
  const roomID = "trainingRoom123"

  const theme = {
    primary: "#f43f5e", primaryLight: "#fb7185", primaryDark: "#e11d48",
    secondary: "#fb923c", gradient: "linear-gradient(to right, #f43f5e, #fb923c)",
    gradientAlt: "linear-gradient(135deg, #e11d48, #f97316)", lightBg: "#fff1f2",
    lightBorder: "#fecdd3", success: "#22c55e", error: "#ef4444",
    textPrimary: "#0f172a", textSecondary: "#475569", textLight: "#94a3b8",
  }

  const styles = {
    pageWrapper: { minHeight: "100vh", background: "linear-gradient(135deg, #fff1f2 0%, #fff7ed 100%)", padding: "20px 0", position: "relative" },
    backButton: {
      position: "fixed", top: "20px", left: "20px", zIndex: 1000,
      background: theme.gradient, border: "none", borderRadius: "50%", width: "45px", height: "45px",
      display: "flex", alignItems: "center", justifyContent: "center",
      color: "white", fontSize: "1.2rem", cursor: "pointer", transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(244, 63, 94, 0.3)"
    },
    contentContainer: {
      height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "20px",
    },
    mainCard: {
      borderRadius: "20px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
      border: "none", maxWidth: "900px", margin: "0 auto",
    },
    cardHeader: {
      background: theme.gradient, color: "white", padding: "25px", position: "relative", overflow: "hidden",
    },
    headerCircle1: {
      position: "absolute", width: "150px", height: "150px", borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.1)", top: "-75px", right: "-50px",
    },
    headerCircle2: {
      position: "absolute", width: "100px", height: "100px", borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.1)", bottom: "-50px", left: "-25px",
    },
    cardBody: { padding: "30px" },
    timeDisplay: {
      fontSize: "0.9rem", color: theme.textSecondary, marginBottom: "15px",
    },
    joinButton: {
      background: theme.gradient, border: "none", borderRadius: "50px", padding: "12px 40px",
      fontSize: "1.1rem", fontWeight: "600", boxShadow: `0 4px 15px rgba(244, 63, 94, 0.3)`, transition: "all 0.3s ease", marginTop: "20px",
    },
    sessionInfo: {
      background: theme.lightBg, borderRadius: "15px", padding: "20px", marginBottom: "25px",
      border: `1px solid ${theme.lightBorder}`,
    },
    sessionBadge: {
      background: theme.primary, color: "white", fontWeight: "500",
      padding: "5px 12px", borderRadius: "20px",
    },
    timeAlert: {
      borderRadius: "12px", marginBottom: "20px", border: "none",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    },
    meetingContainer: {
      height: "80vh", width: "100%", borderRadius: "15px",
      overflow: "hidden", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    },
    statusIndicator: {
      display: "inline-block", width: "10px", height: "10px",
      borderRadius: "50%", marginRight: "8px",
    },
    statusActive: { backgroundColor: theme.success },
    statusInactive: { backgroundColor: theme.error },
    timeSlots: {
      display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "15px",
    },
    timeSlot: {
      background: "rgba(244, 63, 94, 0.1)", border: "1px solid rgba(244, 63, 94, 0.2)",
      borderRadius: "50px", padding: "8px 15px", fontSize: "0.9rem",
      color: theme.primary, display: "flex", alignItems: "center",
    },
    nextSession: { fontStyle: "italic", marginTop: "15px", color: theme.textSecondary },
    iconContainer: {
      width: "60px", height: "60px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.2)",
      display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px",
    },
    infoRow: { display: "flex", alignItems: "center", marginBottom: "10px" },
    infoIcon: {
      width: "30px", height: "30px", borderRadius: "50%", background: "rgba(244, 63, 94, 0.1)",
      display: "flex", alignItems: "center", justifyContent: "center", marginRight: "10px", color: theme.primary,
    },
  }

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

  const joinMeeting = () => {
    if (!isWithinAllowedTime()) {
      setShowTimeAlert(true)
      setTimeout(() => setShowTimeAlert(false), 5000)
      return
    }

    const appID = 691848548
    const serverSecret = "f21303cc94bab5be58a0f42d20a537e3"

    // 👇 Get firstName from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"))
    const firstName = storedUser?.firstName || "Guest"

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5),
      firstName
    )

    const zp = ZegoUIKitPrebuilt.create(kitToken)

    zp.joinRoom({
      container: meetingContainerRef.current,
      scenario: { mode: ZegoUIKitPrebuilt.GroupCall },
      showScreenSharingButton: true,
    })

    setJoined(true)
  }

  const handleBack = () => {
    if (joined) {
      setJoined(false)
      return
    }
    toast("Navigating back to previous page")
    window.history.back()
  }

  const isTimeAllowed = isWithinAllowedTime()
  const nextSession = !isTimeAllowed ? getNextSessionTime() : null

  return (
    <div style={styles.pageWrapper}>
      <button
        style={styles.backButton}
        onClick={handleBack}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-2px) scale(1.05)"
          e.currentTarget.style.boxShadow = "0 6px 18px rgba(244, 63, 94, 0.4)"
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)"
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(244, 63, 94, 0.3)"
        }}
        aria-label="Go back"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <Container style={styles.contentContainer}>
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <Card style={styles.mainCard}>
              <Card.Header style={styles.cardHeader}>
                <div style={styles.headerCircle1}></div>
                <div style={styles.headerCircle2}></div>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <div>
                    <div style={styles.iconContainer}>
                      <i className="fa-solid fa-dumbbell fa-2x"></i>
                    </div>
                    <h2 className="mb-1" style={{ fontWeight: "700" }}>
                      Live Training Session
                    </h2>
                    <p className="mb-0" style={{ opacity: "0.9" }}>
                      Connect with your personal trainer in real-time
                    </p>
                  </div>
                  <div className="mt-3 mt-md-0">
                    <div style={{ ...styles.statusIndicator, ...(isTimeAllowed ? styles.statusActive : styles.statusInactive) }}></div>
                    <span style={{ color: "white", fontWeight: "500" }}>
                      {isTimeAllowed ? "Session Active" : "Session Inactive"}
                    </span>
                  </div>
                </div>
              </Card.Header>

              <Card.Body style={styles.cardBody}>
                {!joined ? (
                  <>
                    {showTimeAlert && (
                      <Alert variant="danger" style={styles.timeAlert}>
                        <i className="fa-solid fa-circle-exclamation me-2"></i>
                        Sessions are only available during morning (7–9 AM) and evening (7–9 PM)
                      </Alert>
                    )}
                    <div style={styles.sessionInfo}>
                      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                        <h5 className="mb-0" style={{ fontWeight: "600", color: theme.textPrimary }}>
                          Room: {roomID}
                        </h5>
                        <Badge style={styles.sessionBadge}>Live Session</Badge>
                      </div>

                      <div style={styles.infoRow}><div style={styles.infoIcon}><i className="fa-solid fa-video"></i></div><span>Join live video sessions with your trainer</span></div>
                      <div style={styles.infoRow}><div style={styles.infoIcon}><i className="fa-solid fa-comment"></i></div><span>Ask questions and get real-time feedback</span></div>
                      <div style={styles.infoRow}><div style={styles.infoIcon}><i className="fa-solid fa-desktop"></i></div><span>View demonstrations and follow along</span></div>

                      <div style={styles.timeSlots}>
                        <div style={styles.timeSlot}><i className="fa-solid fa-sun me-2"></i> Morning: 7:00 AM – 9:00 AM</div>
                        <div style={styles.timeSlot}><i className="fa-solid fa-moon me-2"></i> Evening: 7:00 PM – 9:00 PM</div>
                      </div>

                      {!isTimeAllowed && (
                        <p style={styles.nextSession}>
                          <i className="fa-solid fa-clock me-2"></i> Next available: {nextSession}
                        </p>
                      )}
                    </div>

                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <p className="mb-0" style={styles.timeDisplay}>
                        <i className="fa-regular fa-clock me-1"></i> Current time: {formatTime(currentTime)}
                      </p>
                      <div className="d-flex justify-content-center w-100 mt-3">
                        <Button
                          onClick={joinMeeting}
                          style={styles.joinButton}
                          disabled={!isTimeAllowed}
                          onMouseOver={(e) => {
                            if (isTimeAllowed) {
                              e.currentTarget.style.transform = "translateY(-3px)"
                              e.currentTarget.style.boxShadow = "0 8px 20px rgba(244, 63, 94, 0.4)"
                            }
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = "translateY(0)"
                            e.currentTarget.style.boxShadow = "0 4px 15px rgba(244, 63, 94, 0.3)"
                          }}
                        >
                          <i className="fa-solid fa-video me-2"></i> Join Session Now
                        </Button>
                      </div>
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

export default UserTrainerInteraction
