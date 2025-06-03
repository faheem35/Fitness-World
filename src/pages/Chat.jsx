

// // import React, { useState } from "react";
// // import axios from "axios";
// // import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

// // const Chat = () => {
// //   const [messages, setMessages] = useState([]);
// //   const [input, setInput] = useState("");
// //   const [error, setError] = useState(null);

// //   const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
// //   const API_URL = "https://openrouter.ai/api/v1/chat/completions";

// //   const sendMessage = async () => {
// //     if (!input.trim()) return;

// //     const newMessage = { role: "user", content: input };
// //     const updatedMessages = [...messages, newMessage];

// //     setMessages(updatedMessages);
// //     setInput("");
// //     setError(null);

// //     try {
// //       const response = await axios.post(
// //         API_URL,
// //         {
// //           model: "openai/gpt-3.5-turbo",
// //           messages: updatedMessages,
// //         },
// //         {
// //           headers: {
// //             Authorization: `Bearer ${API_KEY}`,
// //             "Content-Type": "application/json",
// //             "HTTP-Referer": window.location.origin,
// //             "X-Title": "My Chatbot",
// //           },
// //         }
// //       );

// //       if (response.data?.choices?.[0]?.message) {
// //         setMessages([...updatedMessages, response.data.choices[0].message]);
// //       } else {
// //         setError("Unexpected API response.");
// //       }
// //     } catch (error) {
// //       console.error("Error fetching response:", error);
// //       setError(
// //         `API Error: ${error.response ? error.response.data.error.message : error.message}`
// //       );
// //     }
// //   };

// //   return (
// //    <div className="bg-black">
// //       <Container fluid className="vh-100 d-flex flex-column justify-content-center">
// //         <Row className="justify-content-center">
// //           <Col xs={12} md={8} lg={6}>
// //             <h2 className="text-center mb-3 text-danger">FitBuddy</h2>
// //             <Card className="chat-box p-3 border rounded overflow-auto bg-dark" style={{ height: "70vh" }}>
// //               {messages.map((msg, index) => (
// //                 <div
// //                   key={index}
// //                   className={`d-flex ${msg.role === "user" ? "justify-content-end" : "justify-content-start"} my-2`}
// //                 >
// //                   <p
// //                     className={`p-2 rounded text-white ${msg.role === "user" ? "bg-secondary" : "bg-warning"}`}
// //                     style={{ maxWidth: "70%", textAlign: "justify", wordBreak: "break-word" }}
// //                   >
// //                     {msg.content}
// //                   </p>
// //                 </div>
// //               ))}
// //             </Card>
// //             {error && <p className="text-danger mt-2 text-center">{error}</p>}
// //           </Col>
// //         </Row>
// //         <Row className="justify-content-center mt-3">
// //           <Col xs={12} md={8} lg={6} className="d-flex">
// //             <Form.Control
// //               type="text"
// //               value={input}
// //               onChange={(e) => setInput(e.target.value)}
// //               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
// //               placeholder="Type a message..."
// //             />
// //             <Button onClick={sendMessage} variant="success" className="ms-2">
// //               Send
// //             </Button>
// //           </Col>
// //         </Row>
// //       </Container>
// //    </div>
// //   );
// // };

// // export default Chat;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
// import Header from "../components/Header";

// const Chat = () => {
//   const [messages, setMessages] = useState([
//     { role: "assistant", content: "👋 Welcome to FitBuddy! Ask me anything about fitness, workouts, or nutrition." }
//   ]);
//   const [input, setInput] = useState("");
//   const [error, setError] = useState(null);

//   const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
//   const API_URL = "https://openrouter.ai/api/v1/chat/completions";

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const newMessage = { role: "user", content: input };
//     const updatedMessages = [...messages, newMessage];

//     setMessages(updatedMessages);
//     setInput("");
//     setError(null);

//     try {
//       const response = await axios.post(
//         API_URL,
//         {
//           model: "openai/gpt-3.5-turbo",
//           messages: updatedMessages,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${API_KEY}`,
//             "Content-Type": "application/json",
//             "HTTP-Referer": window.location.origin,
//             "X-Title": "FitBuddy",
//           },
//         }
//       );

//       if (response.data?.choices?.[0]?.message) {
//         setMessages([...updatedMessages, response.data.choices[0].message]);
//       } else {
//         setError("Unexpected API response.");
//       }
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setError(
//         `API Error: ${error.response ? error.response.data.error.message : error.message}`
//       );
//     }
//   };

//   return (
//   <>
//       <Header />
//       <div className="bg-black text-white pt-3">
//         <Container fluid className="vh-100 d-flex flex-column justify-content-center">
//           <Row className="justify-content-center">
//             <Col xs={12} md={8} lg={6}>
//               <h2 className="text-center mb-3 text-warning fw-bold">🏋️ FitBuddy</h2>
//               <Card className="chat-box p-3 border rounded overflow-auto bg-black" style={{ height: "70vh" }}>
//                 {messages.map((msg, index) => (
//                   <div
//                     key={index}
//                     className={`d-flex ${msg.role === "user" ? "justify-content-end" : "justify-content-start"} my-2`}
//                   >
//                     <p
//                       className={`p-2 rounded ${msg.role === "user" ? " text-white" : "bg-secondary text-white"}`}
//                       style={{ maxWidth: "70%", textAlign: "justify", wordBreak: "break-word" }}
//                     >
//                       {msg.content}
//                     </p>
//                   </div>
//                 ))}
//               </Card>
//               {error && <p className="text-danger mt-2 text-center">{error}</p>}
//             </Col>
//           </Row>
//           <Row className="justify-content-center mt-3">
//             <Col xs={12} md={8} lg={6} className="d-flex">
//               <Form.Control
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//                 placeholder="Ask about workouts, diet, or fitness tips..."
//               />
//               <Button onClick={sendMessage} variant="success" className="ms-2">
//                 Send
//               </Button>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//   </>
//   );
// };

// export default Chat;



import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { Container, Row, Col, Form, Button, Card, Spinner, Badge, InputGroup, Alert } from "react-bootstrap"
import { toast } from "react-toastify"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPaperPlane,
  faDumbbell,
  faHeartPulse,
  faAppleWhole,
  faFire,
  faCircleUser,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons"
import "./Chat.css"

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Welcome to FitBuddy! I'm your personal fitness assistant. Ask me anything about workouts, nutrition, or wellness tips.",
    },
  ])
  const [input, setInput] = useState("")
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const chatBoxRef = useRef(null)

  const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY
  const API_URL = "https://openrouter.ai/api/v1/chat/completions"

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    if (messagesEndRef.current && chatBoxRef.current) {
      // Scroll only the chat box, not the entire page
      chatBoxRef.current.scrollTop = messagesEndRef.current.offsetTop
    }
  }

  const sendMessage = async () => {
    if (!input.trim()) return

    const newMessage = { role: "user", content: input }
    const updatedMessages = [...messages, newMessage]

    setMessages(updatedMessages)
    setInput("")
    setError(null)
    setIsLoading(true)

    try {
      const response = await axios.post(
        API_URL,
        {
          model: "openai/gpt-3.5-turbo",
          messages: updatedMessages,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": window.location.origin,
            "X-Title": "FitBuddy",
          },
        },
      )

      if (response.data?.choices?.[0]?.message) {
        setMessages([...updatedMessages, response.data.choices[0].message])
      } else {
        setError("Unexpected API response.")
      }
    } catch (error) {
      console.error("Error fetching response:", error)
      setError(`API Error: ${error.response ? error.response.data.error.message : error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  // Quick suggestion buttons
  const suggestions = [
    { text: "Workout plan", icon: faDumbbell },
    { text: "Nutrition tips", icon: faAppleWhole },
    { text: "Cardio advice", icon: faHeartPulse },
    { text: "Weight loss", icon: faFire },
  ]

  const handleSuggestion = (text) => {
    setInput(text)
  }

  const handleBack = () => {
    // alert("Navigating back to previous page")
     toast("Navigating back to previous page")
    
    window.history.back()
  }

  return (
    <>
      {/* Back button outside the container */}
      <Button className="back-button-fixed" onClick={handleBack} aria-label="Go back">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>

      <div className="chat-container">
        <Container fluid className="vh-100 d-flex flex-column">
          <Row className="justify-content-center flex-grow-1">
            <Col xs={12} md={10} lg={8} xl={6} className="d-flex flex-column chat-column">
              <div className="chat-header py-3">
                <div className="text-center">
                  <h1 className="mb-0">
                    <FontAwesomeIcon icon={faDumbbell} className="me-2" bounce />
                    <span className="gradient-text">FitBuddy</span>
                  </h1>
                  <p className="text-muted mb-0">Your AI Fitness Companion</p>
                </div>
              </div>

              <Card className="chat-box flex-grow-1 border-0 shadow-lg">
                <Card.Body className="chat-messages p-4" ref={chatBoxRef}>
                  <div className="messages-container">
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`message-container ${msg.role === "user" ? "user-message" : "assistant-message"}`}
                      >
                        <div className="message-avatar">
                          {msg.role === "user" ? (
                            <FontAwesomeIcon icon={faCircleUser} />
                          ) : (
                            <span className="assistant-avatar">🤖</span>
                          )}
                        </div>
                        <div className={`message-bubble ${msg.role === "user" ? "user-bubble" : "assistant-bubble"}`}>
                          {msg.content}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="message-container assistant-message">
                        <div className="message-avatar">
                          <span className="assistant-avatar">🤖</span>
                        </div>
                        <div className="message-bubble assistant-bubble typing-indicator">
                          <Spinner animation="grow" size="sm" />
                          <Spinner animation="grow" size="sm" />
                          <Spinner animation="grow" size="sm" />
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </Card.Body>

                {error && (
                  <Alert variant="danger" className="m-2 mb-0">
                    {error}
                  </Alert>
                )}

                <div className="suggestion-container px-3 py-2">
                  {suggestions.map((suggestion, index) => (
                    <Badge key={index} className="suggestion-badge" onClick={() => handleSuggestion(suggestion.text)}>
                      <FontAwesomeIcon icon={suggestion.icon} className="me-1" />
                      {suggestion.text}
                    </Badge>
                  ))}
                </div>

                <Card.Footer className="p-3 border-0 bg-transparent">
                  <InputGroup>
                    <Form.Control
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                      placeholder="Ask about workouts, diet, or fitness tips..."
                      className="message-input"
                    />
                    <Button
                      onClick={sendMessage}
                      variant="primary"
                      className="send-button"
                      disabled={isLoading || !input.trim()}
                    >
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </Button>
                  </InputGroup>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Chat
