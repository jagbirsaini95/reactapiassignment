
import './App.css';
import { Card, Row, Col,Form } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Image from './Image';
function App() {
  const [search, setsearch] = useState('');
  // const [filteredPosts, setFilteredPosts] = useState([]);

  const [user, setuser] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(response => {
        return setuser(response);
      })
  }, [])

  useEffect(() => {
    user.filter((user) => user.name.match(search) !==null);
    // user.filter((user) =>user.name.indexOf(search)!==-1)

  }, [user,search]);

  const handleSearchChange = (event) => {
    setsearch(event.target.value);
  };

  return (
    <div align="center">
      {/* <div>{q.map((value,i)=>{
            return <li key={i}>{value.name}</li>
      })}</div> */}
      {/* <input value={search} onChange={handleSearchChange} placeholder="search by name"/> */}
        <div>
      <Form.Control xs={8} type="text" className="cardsize" value={search} onChange={handleSearchChange} placeholder="search by name" />

          {user.map((user) => {
            return (
              <div key={user.id} className="cardsize">
                <Card style={{ width: '70rem'}}>
                  <Row >
                    <Col>
                      {/* <Card.Img src={`https://avatars.dicebear.com/v2/avataaars/${user.usersname}.svg?options[mood][
]=happy`}  /> */}
                      <Image username={user.username}/>
                    </Col>
                    <Col xs={9}>
                      <Card.Body align="left">
                          <Card.Title> <h2>{user.name}</h2></Card.Title>
                          <div><strong>Email:</strong> {user.email}</div>
                          <div><strong>Phone:</strong> {user.phone}</div>
                          <div><strong>Company:</strong>{user.company.name}</div>
                          <div><strong>Website:</strong> {user.website}</div>
                          <div><strong>Address:</strong> {user.address.street + ', ' + user.address.suite + ', ' + user.address.city + ', ' + user.address.zipcode}</div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </div>
            )
          })}

        </div>
      
      {/* {
     filteritem= user.filter((user,index) => {
       if(user.name.indexOf(search)!==-1)
         return user
}) */}
    </div>
  );
}

export default App;
