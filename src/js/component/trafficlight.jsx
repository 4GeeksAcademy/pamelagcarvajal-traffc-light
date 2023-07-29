import React, {useState, useEffect} from "react";
import "../../styles/trafficlight.css";
const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [redOn, setRedOn] = useState (false);
    const [greenOn, setGreenOn] = useState (false);
    const [yellowOn, setYellowOn] = useState(false);
    
    return <>
       <div className="stick row d-flex justify-content-center "></div>
        <div className="container rounded">
            <div className="row d-flex justify-content-center">
                <div className="col d-flex justify-content-center flex-column align-items-center">
                    <div className={!redOn ? "red" : "red on"} onClick={
                        (e) => {setRedOn(!redOn)
                        setGreenOn(false)
                        setYellowOn(false)
                        }}></div>
                       
                    <div className={!yellowOn ? "yellow" : "yellow on"} onClick={
                        (e) => {setYellowOn(!yellowOn)
                            setGreenOn(false)
                            setRedOn(false) 
                        }}></div>
                    <div className={!greenOn ? "green" : "green on"} onClick={
                        (e) => {setGreenOn(!greenOn)
                            setYellowOn(false)
                            setRedOn(false)   
                        }}></div>
                </div>
            </div>
        </div>
    </>
}
export default TrafficLight





// import React, {useState, useEffect} from "react";
// import "../../styles/trafficight.css";


// const TrafficLight =() => {
//     const [color, setColor] = useState("red");
//     const [redOn, setRedOn] = useState(false);
//     const [greenOn, setGreenOn] = useState(false)
//     const [YellowOn, setYellowOn] = useState(false)

//     return <>
//     <div className="container">
//         <div className="row d-flex justify-content-center"> 
//         <div className="col d-flex justify-content-center flex-colum align-items-center">
//             <div className={redOn == false ? "red" : "red on"}
//                 onClick={
//                     (e) => {
//                     setRedOn(!redOn)
//                     setGreenOn(false)
//                     setYellowOn(false)
//                 }
//                 }>
//                 Red
//                 </div> 

//                 <div className="yellow">Yellow</div>

//                 <div className={!greenOn ? "green" : "green on"} onClick={(e) =>{
//                     setGreenOn(!greenOn)
//                     setRedOn(false)
//                     setyellowOn(false)
//                 }}>
//                    Green
//               </div>  
//         </div>

//         </div>
        
//     </div>
    
//     </>

// }

// export default TrafficLight


// import React, {useState, useEffect } from "react"; 
// import "../../styles/trafficlight.css"; 

// const Trafficlight = () => {
//     const [color, setColor] = useState("red");
//     const [redOn, setRedOn] = useState("false");
//     const [greenOn, setGreenOn] = useState("false");
//     const [yellowOn, setYellowOn] = useState("false");

//     return <>
//     <div className="container">
//         <div className="row d-flex justify-content-center">
//             <div className="col d-flex justify-content-center flex-colum align-items-center">
//                 <div className={!redOn ? "red" : "red on" }
//                  onClick={
//                     (e) => {
//                         setRedOn(!redOn) 
//                         setGreenOn(false) 
//                         setYellowOn(false)
//                     }
//                     }>
//                      Red
//                     </div>

//                 <div className={!yellowOn ? "yellow" : "yellow on" }
//                  onClick={
//                     () => {setYellowOn(!yellowOn) 
//                         setGreenOn(false) 
//                         setRedOn(false)
//                     }}>Yellow</div>

//                 <div className={!greenOn ? "green" : "green on" }
//                  onClick={
//                     () => {setGreenOn(!greenOn)
//                         setRedOn(false)
//                         setYellowOn(false)}
//                         }>Green</div>
//             </div>
//         </div>
//     </div>
//     </>


// }
// export default Trafficlight