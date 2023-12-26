import React from 'react';
import ReactDOM from 'react-dom';


function Animal(){
return <h1>Tiger is the National Animal of India</h1>

}
 
function Bird(){
return<h2>Peacock is the National Bird of India</h2>

}

function Flower(props){

const printThis = props.printThis;

if(printThis){
    return<Animal/>;
}
    return<Bird/>
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<Flower printThis= {false}/>)









