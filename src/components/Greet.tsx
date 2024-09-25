interface GreetProps {
  name: string;
  lectureCount: number;
  isLoggedIn: boolean;
}

function Greet(props: GreetProps) {
  const { name, lectureCount, isLoggedIn } = props;
  return (
    <p>
      {isLoggedIn
        ? `Hello ${name} , how your React larning is going? and you have ${lectureCount} lectures pending.`
        : "Helllo Guest"}
    </p>
  );
}

export default Greet;
