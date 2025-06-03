// import React, { useEffect, useState } from 'react';
// import { userlistAPI } from '../services/allAPI';

// const AdminUserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await userlistAPI();
//         console.log("API Response:", response);
//         if (response?.data?.allUsers) {
//           setUsers(response.data.allUsers);
//         } else {
//           setError("No users found");
//         }
//       } catch (err) {
//         console.error("Error fetching users:", err);
//         setError("Failed to fetch users");
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2>User List</h2>
//       {error && <p className="text-danger">{error}</p>}
//       {users.length > 0 ? (
//         <table className="table table-striped mt-3">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th> 
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={user._id}>
//                 <td>{index + 1}</td>
//                 <td>{user.firstName}</td>
//                 <td>{user.lastName}</td>
//                 <td>{user.email}</td>
//                   <td>{user.status}</td>
//                   <td></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No users found</p>
//       )}
//     </div>
//   );
// };

// export default AdminUserManagement;

// import React, { useEffect, useState } from 'react';
// import { userlistAPI, usereditAPI } from '../services/allAPI';

// const AdminUserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await userlistAPI();
//       console.log("API Response:", response);
//       if (response?.data?.allUsers) {
//         setUsers(response.data.allUsers);
//       } else {
//         setError("No users found");
//       }
//     } catch (err) {
//       console.error("Error fetching users:", err);
//       setError("Failed to fetch users");
//     }
//   };

//   const handleUserStatusChange = async (userId, currentStatus) => {
//     const newStatus = currentStatus === "inactive" ? "active" : "inactive";

//     try {
//       await usereditAPI(userId, { status: newStatus });
//       setUsers((prevUsers) =>
//         prevUsers.map((user) =>
//           user._id === userId ? { ...user, status: newStatus } : user
//         )
//       );
//     } catch (error) {
//       console.error("Error updating user status:", error);
//       setError("Failed to update user status");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>User List</h2>
//       {error && <p className="text-danger">{error}</p>}
//       {users.length > 0 ? (
//         <table className="table table-striped mt-3">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th> 
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={user._id}>
//                 <td>{index + 1}</td>
//                 <td>{user.firstName}</td>
//                 <td>{user.lastName}</td>
//                 <td>{user.email}</td>
//                 <td>{user.status}</td>
//                 <td>
//                   <button
//                     className={`btn ${user.status === "inactive" ? "btn-success" : "btn-danger"}`}
//                     onClick={() => handleUserStatusChange(user._id, user.status)}
//                   >
//                     {user.status === "inactive" ? "Activate" : "Deactivate"}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No users found</p>
//       )}
//     </div>
//   );
// };

// export default AdminUserManagement;


// import React, { useEffect, useState } from 'react';
// import { userlistAPI, usereditAPI } from '../services/allAPI';

// const AdminUserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await userlistAPI();
//       console.log("API Response:", response);
//       if (response?.data?.allUsers) {
//         setUsers(response.data.allUsers);
//       } else {
//         setError("No users found");
//       }
//     } catch (err) {
//       console.error("Error fetching users:", err);
//       setError("Failed to fetch users");
//     }
//   };

//   const handleUserStatusChange = async (userId, currentStatus) => {
//     const newStatus = currentStatus === "inactive" ? "active" : "inactive";

//     try {
//       await usereditAPI(userId, { status: newStatus });
//       setUsers((prevUsers) =>
//         prevUsers.map((user) =>
//           user._id === userId ? { ...user, status: newStatus } : user
//         )
//       );
//     } catch (error) {
//       console.error("Error updating user status:", error);
//       setError("Failed to update user status");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className='text-warning mb-5'>User Management</h2>
//       {error && <p className="text-danger">{error}</p>}
//       {users.length > 0 ? (
//         <table className="table table-striped mt-3">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th> 
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={user._id}>
//                 <td>{index + 1}</td>
//                 <td>{user.firstName}</td>
//                 <td>{user.lastName}</td>
//                 <td>{user.email}</td>
//                 <td>{user.status}</td>
//                 <td>
//                   <button
//                     className={`btn ${user.status === "inactive" ? "btn-success" : "btn-danger"}`}
//                     onClick={() => handleUserStatusChange(user._id, user.status)}
//                   >
//                     {user.status === "inactive" ? "Unblock" : "Block"}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No users found</p>
//       )}
//     </div>
//   );
// };

// export default AdminUserManagement;

import React, { useEffect, useState } from 'react';
import { userlistAPI, usereditAPI } from '../services/allAPI';
import { 
  Container, 
  Table, 
  Badge, 
  Button, 
  Card, 
  Alert, 
  Spinner, 
  Row, 
  Col 
} from 'react-bootstrap';
import { 
  PersonFillGear, 
  CheckCircleFill, 
  XCircleFill, 
  ArrowClockwise, 
  PersonSlash 
} from 'react-bootstrap-icons';

const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [processingUser, setProcessingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await userlistAPI();
      console.log("API Response:", response);
      if (response?.data?.allUsers) {
        setUsers(response.data.allUsers);
        setError('');
      } else {
        setError("No users found");
      }
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handleUserStatusChange = async (userId, currentStatus) => {
    setProcessingUser(userId);
    const newStatus = currentStatus === "inactive" ? "active" : "inactive";

    try {
      await usereditAPI(userId, { status: newStatus });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, status: newStatus } : user
        )
      );
    } catch (error) {
      console.error("Error updating user status:", error);
      setError("Failed to update user status");
    } finally {
      setProcessingUser(null);
    }
  };

  const getStatusBadge = (status) => {
    if (status === "active") {
      return <Badge bg="success"><CheckCircleFill className="me-1" /> Active</Badge>;
    } else {
      return <Badge bg="danger"><XCircleFill className="me-1" /> Inactive</Badge>;
    }
  };

  return (
    <Container fluid className="py-4">
      <Card 
        className="shadow-sm border-0" 
        style={{ 
          borderRadius: '10px', 
          overflow: 'hidden' 
        }}
      >
        <Card.Header 
         style={{ 
    backgroundColor: "#2c3e50", // Deep blue option
    padding: '20px'
  }}
>
  <Row className="align-items-center ">
    <Col>
      <h2 className="text-white mb-0 d-flex align-items-center">
        <PersonFillGear size={30} className="me-2" /> User Management
      </h2>
    </Col>
            <Col xs="auto">
              <Button 
                variant="light" 
                size="sm" 
                onClick={fetchUsers} 
                disabled={loading}
                className="d-flex align-items-center"
              >
                <ArrowClockwise size={16} className="me-1" /> Refresh
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="p-0 mt-2">
          {error && (
            <Alert variant="danger" className="m-3">
              {error}
            </Alert>
          )}
          
          {loading ? (
            <div className="text-center p-5">
              <Spinner animation="border" variant="primary" />
              <p className="mt-2 text-muted">Loading users...</p>
            </div>
          ) : users.length > 0 ? (
            <div className="table-responsive">
              <Table hover className="mb-0">
                <thead style={{ backgroundColor: '#f8f9fa' }}>
                  <tr>
                    <th className="ps-4">#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <td className="ps-4">{index + 1}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>
                        <span className="text-primary">{user.email}</span>
                      </td>
                      <td>{getStatusBadge(user.status)}</td>
                      <td className="text-center">
                        <Button
                          variant={user.status === "inactive" ? "outline-success" : "outline-danger"}
                          size="sm"
                          onClick={() => handleUserStatusChange(user._id, user.status)}
                          disabled={processingUser === user._id}
                          className="d-inline-flex align-items-center"
                          style={{ 
                            borderRadius: '6px',
                            minWidth: '100px'
                          }}
                        >
                          {processingUser === user._id ? (
                            <>
                              <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                className="me-1"
                              />
                              <span>Processing...</span>
                            </>
                          ) : (
                            <>
                              {user.status === "inactive" ? (
                                <>
                                  <CheckCircleFill className="me-1" /> Unblock
                                </>
                              ) : (
                                <>
                                  <PersonSlash className="me-1" /> Block
                                </>
                              )}
                            </>
                          )}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            <Alert variant="info" className="m-3">
              No users found. Try refreshing the page.
            </Alert>
          )}
        </Card.Body>
        <Card.Footer className="bg-light text-muted small py-3">
          <Row>
            <Col>Total Users: {users.length}</Col>
            <Col xs="auto">
              Active: {users.filter(user => user.status === "active").length} | 
              Inactive: {users.filter(user => user.status === "inactive").length}
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default AdminUserManagement;  