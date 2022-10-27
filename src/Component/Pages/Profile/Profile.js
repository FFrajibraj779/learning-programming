import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../UserContext/UserContext';
import { useContext } from 'react';
import { FaUser } from 'react-icons/fa';

const Profile = () => {
    const { userInfo } = useContext(AuthContext)

    return (
        <div className='profile-container'>


            <Card style={{ width: '18rem' }} className='singleCard'>
                <Card.Img variant="top" src={userInfo?.photoURL ? userInfo?.photoURL : <FaUser />} />
                <Card.Body>
                    <Card.Title>{userInfo?.displayName ? userInfo?.displayName : undefined}</Card.Title>
                    <Card.Text>
                        {
                            userInfo?.email ? userInfo?.email : undefined
                        }
                    </Card.Text>

                </Card.Body>
            </Card>


        </div>
    )
}


export default Profile;