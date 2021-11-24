import React, {useState, useEffect} from 'react';
import axios from "axios";
import Header from "./components/Header/Header";
import List from "./components/List";
import Footer from "./components/Footer/Footer";
import { FaFacebook } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './App.css';

interface apiGit {
  git: {
    login: string,
    nome: string,
    avatar_url: string,
    html_url: string,
    repos_url: string,
    email: string,
    create_at: string,
    company: string,
    blog: string,
    location: string
    //inserir bio no git
  }[]

}

function App() {
    const [list, setList] = useState<apiGit['git']>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://api.github.com/users/hadnaNOliveira');
      setList([data]);
      
    })();
  },[])
  
  console.log(list)

  return (
    <div className="container">
      <Header />
      <List git={list} />
      <Footer />
    </div>
  );
}

export default App;
