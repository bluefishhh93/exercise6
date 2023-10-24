import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Counter from './Counter';
import Company from './Company'
import ParentComponent from './components/ParentComponent';
function App() {

  return (
    <div className="App">
      {/* <Hello name = "thanh"/>
      <Counter/> */}
      <Company/>
      {/* <ParentComponent /> */}
    </div>
  );
}

export default App;
