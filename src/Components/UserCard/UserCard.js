
import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './UserCard.css'

const UserCard = ({user}) => {
    return (
        <div >
            <Card className="card">
 
  <Card.Body>
      <span className="profile">{user.username[0]}</span>
    <Card.Title>{user.username}</Card.Title>
    <Card.Text>
        <p> {user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
    </Card.Text>
    <Link to={`/${user.id}`}><Button  class="btn btn-outline-primary">Go somewhere</Button></Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default UserCard
