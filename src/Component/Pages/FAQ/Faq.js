import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div>

            <div className='accordian m-5'>
                <h4 className='text-capitalize'>Frequently asked question  </h4>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h5>Will this program help me in my career?</h5></Accordion.Header>
                        <Accordion.Body>
                            There are two primary reasons for choosing an online course - it can help you learn a new hobby or it can help you grow in your career. Most people tend to fall into the latter category, where they choose courses that can eventually help them get ahead in their career, a reason why programming, management, and digital marketing courses are often the most popular online courses. This is commonly the first question that you should ask yourself when selecting a course for upskilling - will this help me be better at my job and grow further in my career. If the answer is yes, then you should definitely take up the course.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h5>How much do courses cost?</h5></Accordion.Header>
                        <Accordion.Body>
                            Even when it comes to education and training, people want to be careful with their money. Some people are on a tight budget. Others just want to be mindful of what they spend. Either way, everyone is going to want to know how much online courses are going to cost. If you have a set list of prices, provide those here. You can also advise whether there are payment plans or financial assistance, or if you work with any type of student loan funding.

                            This is also a great place to link to your pricing page or to course pages where you list the course requirements and costs, allowing people to further their research without having to find the information on their own.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h5>Do I receive a certificate at the end of the course?</h5></Accordion.Header>
                        <Accordion.Body>
                            Yes. All of our online programmes offer a Certificate of Attendance and Academic Progress Report. The certificates are Digital Badges that confirm the name of the online English course that you attended along with the number of hours of study that you have completed. Your Digital Badge can be attached to your CV and social media profiles.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><h5>What will learn in this course?</h5></Accordion.Header>
                        <Accordion.Body>
                            in this course you learn html, css , javascript, bootstrap, react js, python .
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header><h5>What is the duration of this course?</h5></Accordion.Header>
                        <Accordion.Body>
                            Duration   is extremely important, especially for professionals who are learning along with their full-time job. Courses can be anywhere between 1 to 12 months, sometimes even longer, which should be comfortable for the student. Degree-based courses are often longer, as they need to include a comprehensive learning experience within the online course. Make sure you are comfortable with the duration of the online class before you sign up for it lest you end up having to drop if halfway through.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header><h5>Is the course pre-recorded or includes live classes?</h5></Accordion.Header>
                        <Accordion.Body>
                            The answer to this question lies in your preference and comfortability. If you prefer courses that are pre-recorded, then ensure that the online course you select is pre-recorded and has a great customer help section for your questions. However, if you learn in an interactive setting, you will need to select courses that include live online classes. Simplilearn offers a blend of recorded and live classes to give you the best of both worlds for an optimized learning experience
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header><h5>What will I gain by the end of this course?</h5></Accordion.Header>
                        <Accordion.Body>
                            The point of this question is to understand what you want from the course in addition to the knowledge. Would you like accreditation, a degree, a certificate, maybe all? For example, Simplilearn has programs that offer a certificate of learning and also programs that offer Post Graduate and Masters degrees from well-known national and international universities. It is important to know exactly what your end goal is before you even start your online course.
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>

        </div>
    );
};

export default Faq;