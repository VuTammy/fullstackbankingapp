function Logout() {
    const [show, setShow] = React.useState(true);
    const [logoutMsg, setLogoutMsg] = React.useState('')
  
    return (
      <Card
        bgcolor="light"
        txtcolor="black"
        header="Log out"
        status=''
        body={
          <>
          <LogoutForm setLogoutMsg={setLogoutMsg}/>
          <h5>{logoutMsg}</h5>
          </>
        }
      />
    );
}
  
  function LogoutForm(props) {

    function handle() {
        const createAccount = document.getElementById("createAccount");
        createAccount.style.display = 'inline';
        const login = document.getElementById("login");
        login.style.display = 'inline';
        const deposit = document.getElementById("deposit");
        deposit.style.display ='none';
        const withdraw = document.getElementById("withdraw");
        withdraw.style.display ='none';
        const balance = document.getElementById("balance");
        balance.style.display ='none';
        const allData = document.getElementById("allData");
        allData.style.display ='none';
        const logout = document.getElementById("logout");
        logout.style.display ='none';
        props.setLogoutMsg('Log out successful. See you again next time!');
        button.style.visibility = "hidden";
    }
  
    return (
        <>
          {/* Maybe add "Please confirm password" in the future
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <br /> */}
          <button type="submit" id="button" className="btn btn-danger" onClick={handle}>
            Logout
          </button>
        </>
      );
    }