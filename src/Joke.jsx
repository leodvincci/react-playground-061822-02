import "./App.css"
import {useState} from "react";

export function Joke(props){
    const [show,setShow] = useState(false);





    return (
        <div>

            <div onClick={()=>setShow(true) } className={"joke-card"}>

                <div className={"joke-card-container"}>

                    <div className={"joke-body"}>
                        <h2>{props.jokeSetup}</h2>
                    </div>

                    <div  className={"joke-body-2"}>

                        {show && <h3>{props.jokePunchline}</h3>}


                    </div>


                </div>


            </div>

        </div>
    )

}

