import React from "react";
import Card from "./context.js";

function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      header="Withdraw"
      cardWidth='40%'
      status={status}
      body={show ? 
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
    />
  );
}

function WithdrawMsg(props){
  var currentBalance = localStorage.getItem('balance');

  return(<>
    <center><h5>
      Withdraw successful!<br/><br/>
      <em>New balance: ${currentBalance}</em>
    </h5></center>
    <br/>
    <button type="submit" 
      className="btn btn-danger" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Withdraw again
    </button>
  </>);
}

function WithdrawForm(props){
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
    fetch(`/account/update/${email}/-${amount}`)
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
            props.setStatus('Withdraw failed')
            console.log('err:', text);
        }
    });
  }


  return(<>

    <center><b>Welcome {name}! Use this page to withdraw money from your account.</b></center>
    <br/>

    <em>Account Balance: ${currentBalance}</em>
    <br/><br/>

    Withdraw Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} 
      onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-danger" 
      onClick={handle}>Submit Withdraw</button>

  </>);
}

export default Withdraw;