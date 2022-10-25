import React from "react";

// const Route       = ReactRouterDOM.Route;
// const Link        = ReactRouterDOM.Link;
// const HashRouter  = ReactRouterDOM.HashRouter;        Moved to app.js
// const UserContext = React.createContext(null);

function Card(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className="col d-flex justify-content-center">
    <div className={classes()} style={{width: props.cardWidth, position: "relative"}}>
      <div className="card-header text-center bg-danger text-white">{props.header}</div>
      <div className="card-body border border-dark border-top-0">
        {props.title && (<h5 className="card-title text-center">{props.title}</h5>)}
        {props.text && (<p className="card-text text-center">{props.text}</p>)}
        {props.body}
        {props.status && (<div id='createStatus'>{props.status}</div>)}
      </div>
    </div>   
    </div>   
  );    
}

export default Card;


