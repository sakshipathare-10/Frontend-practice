type StudentProps = {
  name: string;
  age: number;
};

function Student(props: StudentProps) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Student;
