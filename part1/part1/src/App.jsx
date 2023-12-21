const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name}, your age is {props.age}</p>
    </div>
  )
}
const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <>
      <h1>Greetigns</h1>
      <Hello name="Mariano" age={16 + 10}/>
      <Hello name={name} age={age}/>
    </>
  );
};

export default App;
