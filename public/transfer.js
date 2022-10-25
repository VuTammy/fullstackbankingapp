function Transfer() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      header="Transfer"
      cardWidth='40%'
      status={status}
      body={show ?
          <TransferForm setShow={setShow} setStatus={setStatus} /> :
          <TransferMsg setShow={setShow} setStatus={setStatus} />}
    />
  );
}

function TransferMsg(props){
  var currentBalance = localStorage.getItem('balance');

    return(<>
      <center><h5>Transfer successful! Your recipient should receive the payment immediately.</h5></center>
      <br/>
      <center><h5><em>Your balance is now ${currentBalance}</em></h5></center>
      <br/>
      <button type="submit" 
        className="btn btn-danger" 
        onClick={() => {
          props.setShow(true);
          props.setStatus('');
        }}>
          Transfer again
      </button>
    </>);
}

function TransferForm(props){
    const [amount, setAmount] = React.useState('');
    const [recipientEmail, setEmail] = React.useState("");
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
              props.setStatus('Transfer failed')
              setTimeout(() => props.setStatus(''),3000);
              console.log('err:', text);
          }
      });
      fetch(`/account/update/${recipientEmail}/${amount}`)
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
              setTimeout(() => props.setStatus(''),3000);
              console.log('err:', text);
          }
      });
    }
  
  
    return(<>
      <center><b>Money transfer is now available! Enter recipient and amount you would like to transfer.</b></center>
      <br/>

      <center><em>Sender: {name}</em></center>
      <br/>

      Recipient Email
      <input type="input"
        className="form-control"
        placeholder="Enter email"
        value={recipientEmail} 
        onChange={(e) => setEmail(e.currentTarget.value)}/><br/>

      Transfer Amount<br/>
      <input type="number" 
        className="form-control" 
        placeholder="Enter amount" 
        value={amount} 
        onChange={e => setAmount(e.currentTarget.value)}/><br/>
  
      <button type="submit" 
        className="btn btn-danger" 
        onClick={handle}>Submit Transfer</button>
  
    </>);
  }