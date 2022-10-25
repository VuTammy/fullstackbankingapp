import React from "react";
import Card from "./context.js";

function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      header="Balance"
      cardWidth='40%'
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )

}

function BalanceMsg(props){
  var currentBalance = localStorage.getItem('balance');
  var name = localStorage.getItem('name');

  return(<>
    <h5>Thank you for banking with us {name}!</h5><br/>
    <h5>Your current account balance is ${currentBalance}</h5><br/>
    <button type="submit" 
      className="btn btn-danger" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  // const [balance, setBalance] = React.useState(''); 

  function handle(){
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(false);
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Not a valid email. Please try again.')
            setTimeout(() => props.setStatus(''),3000);
            console.log('err:', text);
        }
    });
  }

  return (<>

    <center><b>This page allows you to check your balance. Enter the account email to get started.</b></center>
    <br/>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-danger" 
      onClick={handle}>Check Balance</button>

  </>);
}

export default Balance;