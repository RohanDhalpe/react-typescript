interface PersonProps {
  name: {
    firstname: string;
    lastname: string;
  };
}
const Person = (props: PersonProps) => {
  const { name } = props;
  return (
    <div>
      {name.firstname} {name.lastname}
    </div>
  );
};

export default Person;
