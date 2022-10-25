function AllData() {
    let ctx = React.useContext(UserContext);
    const [data, setData] = React.useState('');

    const info = []

    React.useEffect(() => {
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log("data", data);
                console.log(ctx);
                setData(JSON.stringify(data));                
            });
    }, []);

    function getInfo(){
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data.length);
                for(let i = 0; i < data.length; i++){
                    info.push(data[i]);
                    
                }
                setData(JSON.stringify(data));                
            });
            
            console.log(data);
    }
    
    return (
      <Card
        bgcolor="light"
        txtcolor="Black"
        header="All Data"
        cardWidth='100%'
        body={(
      <>
        <div></div>
      <button onClick={getInfo}>Get Data</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
        <tbody className="tableBody">
          {info.map((element, index, array) => {
          return (
          <tr key={`${index}`}>
            <td key={`Name#${index}`}>{element.name}</td>
            <td key={`Email#${index}`}>{element.email}</td>
            <td key={`Password#${index}`}>{element.password}</td>
            <td key={`Balance#${index}`}>${element.balance}</td>
          </tr>
          )
          })}
        </tbody>
        </table>
      </>
       )}
      />
    );
  }
