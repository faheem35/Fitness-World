

// import React, { useEffect, useState } from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Header from '../components/Header';
// import { Card, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';



// const Workout = () => {

  

 

//   //getting name from local storage

//   const [userName, setUserName]=useState("")

//   // useEffect(()=>{
//   //   if(localStorage.getItem("user")){
//   //     setUserName(JSON.parse(localStorage.getItem("user")).name.split(" ")[0])
//   //   }
//   // },[])

//   useEffect(() => {
//   const stored = localStorage.getItem("user");
//   if (stored) {
//     const parsed = JSON.parse(stored);
//     // make sure parsed && parsed.name exist
//     if (parsed?.firstName) {
//       setUserName(parsed.firstName.split(" ")[0]);
//     }else{
//       setUserName(parsed.name.split(" ")[0]);
//     }
//   }
// }, []);



//   return (
//     <>
//       <Header />
//       <div style={{ paddingTop: '100px' }} className="container-fluid bg-black ">

//         <h1 className='text-white mb-4'>Welcome <span className="text-warning">{userName},</span></h1>


//         <Container >




//           <Row>
//   {/* col 1 */}
//             <Col><Card style={{ width: '18rem' }} >

           
//                <Link to={"/workout/absWorkout"}>
//                   <Card.Img className='img-fluid' style={{ height: '12rem' }} variant="top" src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2024/04/ab-exercises-scaled.jpg?fit=2560%2C1709&ssl=1" />
           
//                </Link>

//               <Card.Body className='bg-light'>
//                 <Card.Title className='text-black text-center'>Abs</Card.Title>
//               </Card.Body>
//             </Card></Col>
//  {/* col 2 */}
//             <Col><Card style={{ width: '18rem' }}  >

//             <Link to={"/workout/chestWorkout"}>
              
//                   <Card.Img className='img-fluid' style={{ height: '12rem' }} variant="top" src="https://fitclub.in/blog/wp-content/uploads/2023/02/The-Ultimate-Guide-To-Chest-Workout-For-Beginner7.jpg" />
               
//             </Link>

//               <Card.Body className='bg-light'>
//                 <Card.Title className='text-black text-center'>Chest</Card.Title>
//               </Card.Body>
//             </Card></Col>
//  {/* col 3 */}
//             <Col><Card style={{ width: '18rem' }} >

             
//                 <Link to={"/workout/legWorkout"}>
//                   <Card.Img className='img-fluid' style={{ height: '12rem' }} variant="top" src="https://149874912.v2.pressablecdn.com/wp-content/uploads/2023/11/Leg-Day-Workout.jpg" />
                
  
//                 </Link>
//               <Card.Body className='bg-light'>
//                 <Card.Title className='text-black text-center'>Legs</Card.Title>
//               </Card.Body>
//             </Card></Col>


//           </Row>

//           <Row className="mt-5 ">
//     {/* col 4 */}
//             <Col><Card style={{ width: '18rem' }} >

              
//                <Link to={"/workout/shoulderWorkout"}>
//                   <Card.Img className='img-fluid' style={{ height: '12rem' }} variant="top" src="https://cdn.prod.website-files.com/611abd833ca7af7702667729/665bd31f06cc423e5a2bb676_Blog_23_FitResults_CableWorkout.jpg" />
               
//                </Link>

//               <Card.Body className='bg-white'>
//                 <Card.Title className='text-black text-center'>Shoulders</Card.Title>
//               </Card.Body>
//             </Card></Col>
//           </Row>

//         </Container>
//       </div>
//     </>
//   );
 
// };

// export default Workout;


import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Container, Button } from 'react-bootstrap';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Workout.css'

const Workout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed?.firstName) {
        setUserName(parsed.firstName.split(" ")[0]);
      } else if (parsed?.name) {
        setUserName(parsed.name.split(" ")[0]);
      }
    }
  }, []);

  const workoutCategories = [
    {
      id: 1,
      title: "Abs",
      image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2024/04/ab-exercises-scaled.jpg?fit=2560%2C1709&ssl=1",
      link: "/workout/absWorkout",
      description: "Build a strong core with our abs workout routines"
    },
    {
      id: 2,
      title: "Chest",
      image: "https://fitclub.in/blog/wp-content/uploads/2023/02/The-Ultimate-Guide-To-Chest-Workout-For-Beginner7.jpg",
      link: "/workout/chestWorkout",
      description: "Develop upper body strength with chest-focused exercises"
    },
    {
      id: 3,
      title: "Legs",
      image: "https://149874912.v2.pressablecdn.com/wp-content/uploads/2023/11/Leg-Day-Workout.jpg",
      link: "/workout/legWorkout",
      description: "Build powerful legs with our comprehensive leg workouts"
    },
    {
      id: 4,
      title: "Shoulders",
      image: "https://cdn.prod.website-files.com/611abd833ca7af7702667729/665bd31f06cc423e5a2bb676_Blog_23_FitResults_CableWorkout.jpg",
      link: "/workout/shoulderWorkout",
      description: "Sculpt defined shoulders with targeted exercises"
    },
    {
      id: 5,
      title: "Back",
      image: "https://plus.unsplash.com/premium_photo-1683120903102-ca698a2abc20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/workout/backWorkout",
      description: "Strengthen your back muscles with these effective exercises"
    },
    {
      id: 6,
      title: "Arms",
      image: "https://i.pinimg.com/originals/47/4a/d6/474ad688a7f42a3334fc89343cdefb37.jpg",
      link: "/workout/armsWorkout",
      description: "Build impressive biceps and triceps with these arm workouts"
    },
    {
      id: 7,
      title: "Glutes",
      image: "https://img.freepik.com/free-photo/full-shot-fit-woman-training-indoors_23-2150255859.jpg?ga=GA1.1.1906622.1748360936&semt=ais_items_boosted&w=740",
      link: "/workout/GlutesWorkout",
      description: "Build strong, sculpted glutes with focused workouts."
    },
    {
      id: 8,
      title: "Full Body",
      image: "https://s1.1zoom.me/b5050/645/Fitness_Men_Bodybuilding_Workout_Hands_Belly_586682_1920x1200.jpg",
      link: "/workout/FullBodyWorkout",
      description: "Power up your fitness with full body workouts."
    }
  ];

  return (
    <>
      <Header />
      <div className="workout-page bg-dark text-white" style={{ minHeight: '100vh', paddingTop: '100px' }}>
        <Container >
          <div className="welcome-section mb-5">
            <h1 className="display-4 fw-bold">
              Welcome <span className="text-warning">{userName || 'Fitness Enthusiast'}</span>
            </h1>
            <p className="lead text-light opacity-75">Choose your workout category and start your fitness journey today</p>
            <hr className="my-4 bg-warning" style={{ opacity: 0.5 }} />
          </div>

          <Row className="g-4">
            {workoutCategories.map((category) => (
              <Col key={category.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card className="h-100 workout-card border-0 shadow" style={{ transition: 'all 0.3s ease', overflow: 'hidden', borderRadius: '12px' }}>
                  <Link to={category.link} className="text-decoration-none">
                    <div className="card-img-container" style={{ overflow: 'hidden', height: '200px' }}>
                      <Card.Img 
                        variant="top" 
                        src={category.image} 
                        className="img-fluid" 
                        style={{ 
                          height: '100%', 
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease'
                        }} 
                      />
                    </div>
                    <Card.Body className="bg-dark text-white">
                      <Card.Title className="fw-bold text-warning text-center mb-2">{category.title}</Card.Title>
                      <Card.Text className="text-light small text-center">{category.description}</Card.Text>
                      <div className="text-center mt-3">
                        <Button variant="outline-warning" size="sm" className="px-4 rounded-pill">
                          Start Workout
                        </Button>
                      </div>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="mt-5 pt-3 text-center">
            <p className="text-secondary mb-0 pb-1">Ready to push your limits? Select a workout category to begin.</p>
          </div>
        </Container>
      </div>

     
    </>
  );
};

export default Workout;