import React, {useEffect, useState} from 'react';
import './App.css';
import List from './components/List';

interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([]);

  useEffect(() => {
    setPeople([{
      name: 'Tiaguinho',
      age: 22,
      url: 'data:image/jpeg;base64,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'
    },
    {
      name: 'Joãozinho',
      age: 18,
      url: 'http://google.com',
      note: 'teste note'
    }])
  })

  return (
    <div className="App">
      <h1>A Melhor Turma VemSer DBC</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
