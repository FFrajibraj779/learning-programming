import { useContext } from "react";
import { contentContext } from "../Layout/ContentLayout";
import Content from "../Pages/Content/Content";



const RightsideContainer = () => {
const tutorialData = useContext(contentContext);


    return (
        <div>
           <h1 className="my-4 text-uppercase fw-bold">Best Quality Learning With Us</h1>
           <h3 className="text-capitalize">Choice The package</h3>
       <div className="tutorial-section">
       {
        tutorialData.map(oneData =><Content key={oneData.id} singleData={oneData}></Content>)
       }
       </div>
        </div>
    );
};

export default RightsideContainer;