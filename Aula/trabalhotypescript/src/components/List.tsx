import React from 'react';
import moment from 'moment';
import styles from './List.module.css';
import img from '../components/images/garotaprogramadora.jpeg';


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
  }[]
}

const List: React.FC<apiGit> = ({git}) => {
  return(
    <>
      {git.length && git.map(item => (
        <div className={styles.list}>
          <div>
          <img width="100px" height="100px" src={item.avatar_url ? item.avatar_url : "Sem imagem"}/>
          <p>Login: {item.login ? item.login : "Sem informação"}</p>
          <p>Nome: {item.nome ? item.nome : "Fernanda Oliveira"}</p>
          <p>URL: {item.html_url ? item.html_url : "Sem informação"}</p>
          <p>Repositórios: {item.repos_url ? item.repos_url : "Sem informação"}</p>
          <p>E-mail: {item.email ? item.email : "Sem informação"}</p>
          <p>Data de criação: {item.create_at ? item.create_at : "Sem informação"}</p>
          <p>Empresa: {item.company}</p>
          <p>Linkedin: {item.blog}</p>
          <p>Cidade: {item.location}</p>
          </div>

          <div className={styles.girl}>
          <img width="400px" height="300px" src={img} alt="Programadora" />
          </div>
        </div>
      ))}
    </>
  )
}

export default List;