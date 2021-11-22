import { useEffect, useContext } from 'react';
import { NYContext } from '../../context/NYContext';
import Card from '../../components/Card';
import { apiKey, apiNY } from '../../api';

function Ciencia() {
  const { list, setList } = useContext(NYContext); 
  useEffect(() => {
    (async () => {
      const {data} = await apiNY.get(`/science.json?api-key=${apiKey}`)
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

export default Ciencia;