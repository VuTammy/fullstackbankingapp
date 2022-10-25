function Logout() {
    const [show, setShow] = React.useState(true);
    const [logoutMsg, setLogoutMsg] = React.useState('')
  
    return (
      <Card
        bgcolor="light"
        txtcolor="black"
        header="Log out"
        cardWidth='40%'
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
        const transfer = document.getElementById("transfer");
        transfer.style.display ='none';
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
          <center><b>We apprecicate your business! See you next time.</b></center>
          <br/>

          <button type="submit" id="button" className="btn btn-danger btn-block" onClick={handle}>
            Logout
          </button>
        </>
      );
    }