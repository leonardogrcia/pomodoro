interface ListProps {
  title: string;
  listagem: string[];
}

const List = ({ title, listagem }: ListProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <ol>
        {listagem.map((record, index) => {
          return <li key={index}>{record}</li>;
        })}
      </ol>
    </div>
  );
};

export default List;
