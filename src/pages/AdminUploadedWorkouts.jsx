// import React, { useContext, useEffect, useState } from "react";
// import { Button, Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { allWorkoutsAPI, removeWorkoutAPI } from "../services/allAPI";
// import SERVER_URL from "../services/serverURL";
// import Edit from "../components/Edit";
// import { editWorkoutResponseContext } from "../contexts/ContextApi";

// const AdminHome = () => {
//   const {editWorkoutResponse, setEditWorkoutResponse}=useContext(editWorkoutResponseContext)

//   const [searchKey, setSearchKey] = useState("");
//   const [allWorkouts, setAllWorkouts] = useState([]);
//   console.log(allWorkouts);

//   useEffect(() => {
//     getAllWorkouts();
//   }, [searchKey,editWorkoutResponse]);

//   const getAllWorkouts = async () => {
//     const token = localStorage.getItem("adminToken");
//     if (token) {
//       const reqHeader = {
//         Authorization: `Bearer ${token}`,
//       };
//       try {
//         const result = await allWorkoutsAPI(searchKey, reqHeader);
//         if (result.status === 200) {
//           setAllWorkouts(result.data);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   const deleteWorkout= async (id)=>{
//     const token = localStorage.getItem('adminToken')
//     if(token){
//       //api call
//       const reqHeader={
//         "Authorization": `Bearer ${token}`
//       }
//       try{
//         await removeWorkoutAPI(id,reqHeader)
//         getAllWorkouts()

//       }catch(err){
//         console.log(err);

//       }
//    }
//   }

//   return (
//     <Container>
//       {/* upload button */}
//       <Link to={"/adminAddWorkout"}>
//         <div className="text-end mt-3">
//           <Button variant="warning">
//             <i className="fa-solid fa-plus rounded-circle bg-white text-black p-2 me-1"></i>{" "}
//             <span className="fw-bold">Upload Workout</span>
//           </Button>
//         </div>
//       </Link>

//       {/* search block */}
//       <div className="d-flex justify-content-between mt-3 mb-3">
//         <h2 className="text-danger ">Uploaded Workouts</h2>
//         <input
//           onChange={(e) => setSearchKey(e.target.value)}
//           placeholder="Search workouts"
//           type="text"
//           className="form-control w-25  "
//           style={{backgroundColor:"pink"}}
//         />
//       </div>



//       {allWorkouts.length > 0 ? (
//         allWorkouts.map(workout => (
//           <Row key={workout?._id} className="p-2 bg-black text-white align-items-center rounded mb-2">
//             <Col md={1} className="text-start">
//               <i className="fa-solid fa-bars"></i>
//             </Col>
//             <Col md={4} className="text-start">
//               <img height={'200px'}
//                 className="w-50"
//                 src={`${SERVER_URL}/uploads/${workout?.workoutImg}`}
//                 alt='no image'
//               />
//             </Col>
//             <Col md={3} className="text-start">
//               <h3 className="mb-0 ">{workout?.workoutName }</h3>
//             </Col>
//             <Col md={2} className="text-center">
//                <Edit workout={workout}/>
//             </Col>
//             <Col md={2} className="text-center">

//               <button onClick={()=>deleteWorkout(workout?._id)} className='btn ' style={{color:"red"}}> <i className='fa-solid fa-trash'></i></button>
//             </Col>
//           </Row>
//         ))
//       ) : (
//         <p className="text-center text-muted">No workouts found.</p>
//       )}
//     </Container>
//   );
// };

// export default AdminHome;


import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row, Form, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { allWorkoutsAPI, removeWorkoutAPI } from "../services/allAPI";
import SERVER_URL from "../services/serverURL";
import Edit from "../components/Edit";
import { editWorkoutResponseContext } from "../contexts/ContextApi";

const AdminUploadedWorkouts = () => {
  const { editWorkoutResponse } = useContext(editWorkoutResponseContext);
  const [searchKey, setSearchKey] = useState("");
  const [allWorkouts, setAllWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllWorkouts();
  }, [searchKey, editWorkoutResponse]);

  const getAllWorkouts = async () => {
    setLoading(true);
    const token = localStorage.getItem("adminToken");
    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await allWorkoutsAPI(searchKey, reqHeader);
        if (result.status === 200) {
          setAllWorkouts(result.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const deleteWorkout = async (id) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      try {
        await removeWorkoutAPI(id, { Authorization: `Bearer ${token}` });
        getAllWorkouts();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const confirmDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteWorkout(id);
    }
  };

  return (
    <Container fluid className="py-4" style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}>
      <Container>
        {/* Header section with title and upload button */}
        <Row className="mb-4 align-items-center">
          <Col>
            <h1 className="fw-bold text-danger mb-0">
              <i className="fa-solid fa-dumbbell me-2"></i>
              Workout Library
            </h1>
            <p className="text-muted mt-2">Manage your workout collection</p>
          </Col>
          <Col xs="auto">
            <Link to="/adminAddWorkout">
              <Button 
                variant="danger" 
                size="lg" 
                className="rounded-pill shadow-sm"
                style={{ transition: "all 0.3s" }}
              >
                <i className="fa-solid fa-plus me-2"></i>
                Upload Workout
              </Button>
            </Link>
          </Col>
        </Row>

        {/* Search bar */}
        <Row className="mb-4">
          <Col md={6} className="mx-auto">
            <Form.Group className="position-relative">
              <Form.Control
                type="text"
                placeholder="Search workouts by name..."
                className="py-3 ps-4 pe-5 rounded-pill shadow-sm border-0"
                onChange={(e) => setSearchKey(e.target.value)}
                style={{ fontSize: "1.1rem" }}
              />
              <i 
                className="fa-solid fa-search position-absolute text-muted" 
                style={{ right: "20px", top: "15px", fontSize: "1.1rem" }}
              ></i>
            </Form.Group>
          </Col>
        </Row>

        {/* Workouts list */}
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="danger" />
            <p className="mt-3 text-muted">Loading workouts...</p>
          </div>
        ) : allWorkouts.length > 0 ? (
          <Row className="g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
            {allWorkouts.map((workout) => (
              <Col key={workout?._id}>
                <Card 
                  className="h-100 border-0 shadow-sm overflow-hidden"
                  style={{ 
                    transition: "transform 0.3s, box-shadow 0.3s",
                    borderRadius: "12px"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Img 
                    variant="top" 
                    src={`${SERVER_URL}/uploads/${workout?.workoutImg}`}
                    style={{ height: "220px", objectFit: "cover" }}
                    alt={workout?.workoutName}
                  />
                  
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold h4 mb-3 text-center">{workout?.workoutName}</Card.Title>
                    
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <Edit workout={workout} />
                      <Button 
                        variant="danger" 
                        size="sm" 
                        className="rounded-circle p-2"
                        onClick={() => confirmDelete(workout?._id, workout?.workoutName)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="text-center py-5 my-4 bg-white rounded-3 shadow-sm">
            <i className="fa-solid fa-dumbbell text-danger" style={{ fontSize: "3rem" }}></i>
            <h3 className="mt-3 mb-2">No workouts found</h3>
            <p className="text-muted mb-4">Try adjusting your search or add a new workout</p>
            <Link to="/adminAddWorkout">
              <Button variant="danger" className="rounded-pill px-4 py-2">
                <i className="fa-solid fa-plus me-2"></i>
                Add Your First Workout
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </Container>
  );
};

export default AdminUploadedWorkouts;