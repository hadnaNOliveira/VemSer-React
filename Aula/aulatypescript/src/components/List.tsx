import React from "react";

interface IProps {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

const List: React.FC<IProps> = ({people}) => {
  return(
    <div>
      <p>Testando a lista</p>
      {people.map(person => (
        <>
        <p>{person.name}</p>
        <p>{person.age}</p>
        <img src={person.url} alt={person.name} />
        <p>{person.note}</p>
        </>
      ))}
    </div>
  )
}

export default List;