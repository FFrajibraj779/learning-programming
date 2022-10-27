
import React from 'react';
import { Image } from 'react-bootstrap';
import Pdf from "react-to-pdf";


const ref = React.createRef();

const CourseDetails = ({ singleData }) => {

  console.log(singleData);
  const { img, description, title, price } = singleData;
  return (


    <div>

      <div ref={ref}>

        <div>
          <div className=' d-lg-flex  details m-5 gap-3'>
            <div className='col-5'>
              <Image style={{ height: "300px", width: "300px" }} src={img}></Image>
            </div>

            <div className=''>
              <h1>{title} </h1>

              {
                description.length > 700 ? <p>{description.slice(0, 644)}</p> : <p>{description}</p>
              }
              <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf} className='pdf'>download pdf</button>}
              </Pdf>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default CourseDetails;