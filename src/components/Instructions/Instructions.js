import React from "react";
import { Jumbotron } from 'reactstrap';
import "./Instructions.css";

const Instructions = (props) => (
    <div className="jumbo">
       
            <h3 className=" animated fadeInDown instructions">{props.message}</h3>
        
    </div>
);

export default Instructions;