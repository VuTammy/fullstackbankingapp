import React from "react";
import Card from "./context.js";

function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState(''); 

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      header="Create Account"
      cardWidth='40%'
      status={status}
      body={show ? 
        <CreateForm setShow={setShow} setStatus={setStatus} setName={setName} setEmail={setEmail} setPassword={setPassword} name={name} email={email} password={password}/> : 
        <CreateMsg setShow={setShow} setName={setName} setEmail={setEmail} setPassword={setPassword}/>}
    />
  )
}

function CreateMsg(props){
  return(<>
    <h5>Account successfully created. Welcome to the bank! Please log in to begin</h5>
    <button type="submit" 
      className="btn btn-danger" 
      onClick={() => {
        props.setShow(true)}}>Add another account</button>
  </>);
}

function CreateForm(props){
  function validate(field, label) {
    if (!field) {
        props.setStatus('Please enter ' + label);
        setTimeout(() => props.setStatus(''),3000);
        return false;
    } 
    return true;
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
  function handle() {
    const passwordLength = 8;
    if (!validate(props.name, 'name')) return;
    if (!validate(props.email, 'email')) return;
    if (!validate(props.password, 'password')) return;
    if (!validateEmail(props.email)){
      props.setStatus('Not a valid email. Please try again');
      setTimeout(() => props.setStatus(''),3000);
      return;
    }
    if (props.password.length >= passwordLength) {
      console.log(props.name, props.email, props.password);
      const url = `/account/create/${props.name}/${props.email}/${props.password}`;
      (async () => {
        var res = await fetch(url);
        var data = await res.json();
        console.log(data);
      })();
      props.setShow(false);
    } else {
      props.setStatus(`Not a valid password. Must be 8 or more characters`);
      setTimeout(() => props.setStatus(''),3000);
    }
  }

  return (<>

    <center><b>Start banking with us by creating an account!</b></center>
    <br/>

    Name<br/>
    <input id="name"
      type="input" 
      className="form-control" 
      placeholder="Enter name" 
      value={props.name} 
      onChange={e => props.setName(e.currentTarget.value)} /><br/>

    Email<br/>
    <input id="email"
      type="input"
      style={{}} 
      className="form-control" 
      placeholder="Enter email" 
      value={props.email} 
      onChange={e => props.setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input id="password"
      type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={props.password} 
      onChange={e => props.setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-danger" 
      onClick={handle}>Create Account</button><br/><br/>

    <a href="#/login/" className="link-dark">Already have an account?</a>
  </>);
}

export default CreateAccount;