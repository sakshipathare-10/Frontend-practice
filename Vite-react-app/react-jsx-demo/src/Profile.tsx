type ProfileProps = {
  name: string;
  role: string;
};

function Profile(props: ProfileProps) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Role: {props.role}</p>
    </div>
  );
}

export default Profile;
