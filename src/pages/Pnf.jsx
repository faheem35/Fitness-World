// import React from 'react'

// const Pnf = () => {
//   return (
//     <div>page not found</div>
//   )
// }

// export default Pnf



"use client"
import { Container, Row, Col, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const Pnf = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.1)",
          top: "-150px",
          left: "-150px",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.1)",
          bottom: "-100px",
          right: "-100px",
        }}
      ></div>

      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}
      >
        <Row className="w-100">
          <Col lg={6} className="d-flex align-items-center justify-content-center">
            <div className="text-center text-lg-start text-white p-4">
              <h1 style={{ fontSize: "120px", fontWeight: "900", lineHeight: "1", marginBottom: "0" }}>404</h1>
              <h2 style={{ fontSize: "2rem", fontWeight: "300", marginBottom: "20px" }}>Lost in space?</h2>
              <p style={{ fontSize: "1.1rem", marginBottom: "30px", opacity: "0.8" }}>
                The page you're looking for has drifted into another dimension.
              </p>
              <Button
                variant="light"
                size="lg"
                className="px-4 py-2 shadow-sm"
                style={{ borderRadius: "30px", fontWeight: "600" }}
                onClick={() => (window.location.href = "/")}
              >
                Take Me Home
              </Button>
            </div>
          </Col>
          <Col lg={6} className="d-flex align-items-center justify-content-center">
            <div className="p-4 d-none d-lg-block">
              {/* ASCII art spaceship/astronaut as a creative element */}
              <pre
                style={{
                  color: "white",
                  fontSize: "1rem",
                  lineHeight: "1.2",
                  textAlign: "center",
                  fontFamily: "monospace",
                }}
              >
                {`
      .
     .'.
     |o|
    .'o'.
    |.-.|
    '   '
     ( )
      )
     ( )
`}
              </pre>
              <div
                style={{
                  fontSize: "100px",
                  textAlign: "center",
                  color: "white",
                  marginTop: "20px",
                }}
                className="floating-astronaut"
              >
                👨‍🚀
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Add floating animation with standard CSS */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          .floating-astronaut {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  )
}

export default Pnf
