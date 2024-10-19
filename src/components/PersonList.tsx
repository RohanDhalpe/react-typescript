interface PersonListProps {
  names: {
    firstName: string;
    lastName: string;
  }[];
}
const PersonList = (props: PersonListProps) => {
  const { names } = props;
  return (
    <div>
      {names.map((name, index) => {
        return (
          <p key={index}>
            {name.firstName}
            {name.lastName}
          </p>
        );
      })}
    </div>
  );
};
export default PersonList;
