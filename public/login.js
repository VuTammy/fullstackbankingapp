function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      header="Login"
      status={status}
      body={show ?
        <LoginForm setShow={setShow} setStatus={setStatus} /> :
        <LoginMsg setShow={setShow} setStatus={setStatus} />
      }
    />
  );
}

function LoginMsg(props) {
    const createAccount = document.getElementById("createAccount");
    createAccount.style.display = 'none';
    const login = document.getElementById("login");
    login.style.display = 'none';
    const deposit = document.getElementById("deposit");
    deposit.style.display ='inline';
    const withdraw = document.getElementById("withdraw");
    withdraw.style.display ='inline';
    const transfer = document.getElementById("transfer");
    transfer.style.display ='inline';
    const balance = document.getElementById("balance");
    balance.style.display ='inline';
    const allData = document.getElementById("allData");
    allData.style.display ='inline';
    const logout = document.getElementById("logout");
    logout.style.display ='inline';
  return (
    <>
      <h5>Log in successful. Use the nagivation bar to get started</h5>
     
      <button
        type="submit"
        className="btn btn-danger"
        onClick={() => props.setShow(true)}>
        Authenticate again
      </button>
    </>);
}

function LoginForm(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handle() {
    fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus('');
            props.setShow(false);
            console.log('JSON:', data);
            localStorage.setItem('balance', data.balance);
            localStorage.setItem('name', data.name);
            localStorage.setItem('email', data.email);
            localStorage.setItem('password', data.password);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });
  }

  return (
    <>
      Email
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <br />
      Password
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <br />
      <button type="submit" className="btn btn-danger" onClick={handle}>
        Login
      </button>
    </>
  );
}
