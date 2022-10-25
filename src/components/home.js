import Card from "./context.js";

function Home(){
  return (
    <Card
      txtcolor="black"
      header="BadBank Home Page"
      cardWidth='40%'
      title="Welcome to the bank!"
      text="Get started by logging in or creating an account. Thank you for choosing us!"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive"/>)}
    />
  );  
}

export default Home;
