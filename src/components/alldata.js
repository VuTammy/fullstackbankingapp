import React from "react";
import Card from "./context.js";

function AllData() {
  const UserContext = React.createContext(null);
  const ctx = React.useContext(UserContext);
  const [data, setData] = React.useState('');

  React.useEffect(() => {
    // fetch all accounts from API
    fetch("/account/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        // console.log(ctx);
        setData(JSON.stringify(data));
      });
  }, []);

  return (
    <Card
      bgcolor="light"
      txtcolor="Black"
      header="All Data"
      cardWidth="100%"
      body={
        <>
        {data}
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
              {ctx.users.map((element, index, array) => {
                return (
                  <tr key={`${index}`}>
                    <td key={`Name#${index}`}>{element.name}</td>
                    <td key={`Email#${index}`}>{element.email}</td>
                    <td key={`Password#${index}`}>{element.password}</td>
                    <td key={`Balance#${index}`}>${element.balance}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      }
    />
  );
}

export default AllData;