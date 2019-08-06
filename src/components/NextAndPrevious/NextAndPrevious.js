import React, { Component } from 'react';
import {Button} from 'reactstrap';

const NextAndPrevious = ({onClick}) => {
    return ( 
        <div className="button-div">
            <Button className="left-button" onClick={()=>onClick("previous")}>Previous</Button>
            <Button className="right-button" onClick={()=>onClick("next")}>Next</Button>
        </div>
     );
}
 
export default NextAndPrevious;