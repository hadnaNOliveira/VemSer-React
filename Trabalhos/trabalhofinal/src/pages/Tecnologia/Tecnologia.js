import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { apiKey, apiNY } from '../../api';

function Tecnologia() {
  const [list, setList] = useState([])
  useEffect(() => {
    (async () => {
      const {data} = await apiNY.get(`/technology.json?api-key=${apiKey}`)
      setList(data.results);
     })()
  },[])
  return (
    <div className="container">
      {list.map(item => (
        <Card item={item}/>
    ))}
    </div>
  );
}

export default Tecnologia;