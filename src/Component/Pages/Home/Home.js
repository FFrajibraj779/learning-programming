import React from 'react';
import { Button, Image } from 'react-bootstrap';
import img from '../../img/course-2.jpg';
import img2 from '../../img/course.jpg'
import img3 from '../../img/couse-3.jpg';
import { FaAccusoft } from 'react-icons/fa';
const Home = () => {
    return (
        <div>
            <div className='header-container'>
                <div className='home-title'>
                    <h1 > The Best Learning platform <br /> In The world</h1>
                    <p>learning is always fun .  are you ready to learn programme with fun . <br /> let`s join us . in this plateform you find programme releted all topics . <br /> we provide a best quality of learning </p>
                </div>



            </div>
            <div className='d-lg-flex opinion-section'>

                <div className=' leftside-img'>

                    <Image className='bg-image'src={img}></Image>

                    <Image className='front-img'src={img2}></Image>

                    <div className='total'>

                        <p className='text-center'> <span>6+</span> <br /> courses available</p>

                    </div>
                </div>
                <div className='welcome-section'>
                    <h2>welcome to </h2>
                    <h3>learning programing</h3>
                    <p>It's true that you can learn programming languages on your own, but it won't be easy. Coding is a highly technical job that entails different algorithms and complex data structures. On the flip side, learning by yourself allows you to set the pace of your education.
                    </p>
                    <p>
                        Programming has a reputation for being one of the most difficult disciplines to master. Considering how different it is from traditional forms of education, including college degrees in computer science, it's not hard to see why some people have difficulty learning how to code.
                    </p>
                </div>

            </div>

            <div className=' offer-section'>
                <div>
                    <Image className='offer-img' src={img3}></Image>
                </div>

                <div className='offer-desc'>
                    <h3> <FaAccusoft/>are you ready for this offer</h3>
                 <br /> 
                    <span className='student'>
                     <h4 >50% offer for very first</h4>
                     student`s & mentores
                    </span>

                    <div className='offer-btn'>
                    <Button variant="outline-primary">Become a student</Button>{' '}
                    <Button>Become a Teacher</Button>
                    </div>
                </div>

            </div>
        </div>



    );
};

export default Home;