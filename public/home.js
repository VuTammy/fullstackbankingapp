function Home(){
  return (
    <Card
      txtcolor="black"
      header="BadBank Home Page"
      title="Welcome to the bank!"
      text="Get started by logging in or creating an account. Thank you for choosing us!"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}
