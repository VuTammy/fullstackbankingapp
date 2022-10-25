function NavBar(){
  return(

    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <div className="container-fluid">
      <a id="home" className="navbar-brand" style={{display: 'inline'}} href="#/">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a id="createAccount" className="nav-link" style={{display: 'inline'}} href="#/createaccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a id="login" className="nav-link" style={{display: 'inline'}} href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a id="deposit" className="nav-link" style={{display: 'none'}} href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a id="withdraw" className="nav-link" style={{display: 'none'}} href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a id="transfer" className="nav-link" style={{display: 'none'}} href="#/transfer/">Transfer</a>
          </li> 
          <li className="nav-item">
            <a id="balance" className="nav-link" style={{display: 'none'}} href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a id="allData" className="nav-link" style={{display: 'none'}} href="#/alldata/">All Data</a>
          </li>  
          <li className="nav-item">
            <a id="logout" className="nav-link" style={{display: 'none'}} href="#/logout/">Log Out</a>
          </li>        
        </ul>
      </div>
      </div>
    </nav>

  );
}

export default NavBar;