import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {title: 'Gas', date: new Date(2021, 3, 30), amount: 49.96},
    {title: 'Apples', date: new Date(2020, 3, 30), amount: 66.50}
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
