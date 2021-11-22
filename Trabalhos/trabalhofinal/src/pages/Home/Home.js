import { useEffect, useContext } from 'react';
import { NYContext } from '../../context/NYContext';
import Card from '../../components/Card';
import { apiKey, apiNY } from '../../api';
import GifCat from '../../cat-loading.gif';

function Home() {
  const { list, setList, loading, setLoading } = useContext(NYContext);
  useEffect(() => {
    (async () => {
      setLoading(true)
      const {data} = await apiNY.get(`/home.json?api-key=${apiKey}`)
      setList(data.results);
      setLoading(false);
    })()
  },[])
  return (
    <div className="container">
      {!loading ? list.map(item => (
        <Card item={item}/>
    )) : (<img src={GifCat} alt="Loading" />)}
    </div>
  );
}

export default Home;