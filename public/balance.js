function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      header="Balance"
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
  const [balance, setBalance] = React.useState(''); 

  function handle(){
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(false);
            props.setShow(false);
            // setBalance(user.balance);                starter file code?
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Not a valid email. Please try again.')
            console.log('err:', text);
        }
    });
  }

  return (<>

    Please enter the account email to check current balance.
    <br/><br/>

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