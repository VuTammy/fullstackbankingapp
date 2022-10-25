import React from "react";
import Card from "./context.js";

function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState(''); 

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      header="Deposit"
      cardWidth='40%'
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function DepositMsg(props){
  var currentBalance = localStorage.getItem('balance');
  
  return (<>
        <center><h5>
      Deposit successful!<br/><br/>
      <em>New balance: ${currentBalance}</em>
    </h5></center>
    <button type="submit" 
      className="btn btn-danger" 
      onClick={() => {
          props.setShow(true); 
          props.setStatus('');
      }}>
        Deposit again
    </button>
  </>);
}

function DepositForm(props){
  const [amount, setAmount] = React.useState('');
  var currentBalance = localStorage.getItem('balance');
  var name = localStorage.getItem('name');
  var email = localStorage.getItem('email');

  function handle(){
    function validate(field, label){
      if (!field || amount < 0) {
          props.setStatus('Error: ' + label);
          setTimeout(() => props.setStatus(''),3000);
          return false;
      }
      return true;
    }
    if (!validate(amount, 'Not a valid input.'))   return;
    fetch(`/account/update/${email}/${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(false);
            props.setShow(false);
            console.log('JSON:', data);
            console.log('more', data.value.balance);
            localStorage.setItem('balance', data.value.balance);
        } catch(err) {
            props.setStatus('Deposit failed')
            console.log('err:', text);
        }
    });
  }

  return(<>

  <center><b>Welcome {name}! Use this page to deposit money into your account.</b></center>
  <br/>

    <em>Account Balance: ${currentBalance}</em>
    <br/><br/>
      
    Deposit Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-danger" 
      onClick={handle}>Submit Deposit</button>

  </>);
}

export default Deposit;