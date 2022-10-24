function Transfer() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      header="Transfer"
      status={status}
      body={show ?
          <TransferForm setShow={setShow} setStatus={setStatus} /> :
          <TransferMsg setShow={setShow} setStatus={setStatus} />}
    />
  );
}

function TransferMsg(props){
    return(<>
      <h5>Transfer successful</h5>
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
    var currentBalance = localStorage.getItem('balance');
    var name = localStorage.getItem('name');
    var email = localStorage.getItem('email');
  
    function handle(){
      function validate(field, label){
        if (!field || amount < 0) {
            props.setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
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
              console.log('err:', text);
          }
      });
    }
  
  
    return(<>
  
      <b>Welcome {name}!</b>
      <br/><br/>
  
      <em>Account Balance: ${currentBalance}</em>
      <br/><br/>
  
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