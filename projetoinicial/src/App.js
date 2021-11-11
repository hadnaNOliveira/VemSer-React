import './App.css';
import List from './components/List';
import Form from './components/Form';
import Events from './components/Events';
import SayMyName from './components/SayMyName';
import Condicional from './components/Condicional';

function App() {
  function calcular(num) {
    return num + 1;
  }
  return (
    <div className="App">
        {/* <Events calc={calcular} num={4} />
        <SayMyName 
        calcular={calcular} 
        num={10}
        name={'João'} />
        <Form />  */}
        <Condicional />
    </div>
  );
}

export default App;
