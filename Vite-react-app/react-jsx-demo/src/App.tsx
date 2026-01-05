
import Header from "./Header";
import Profile from "./Profile";
import Student from "./Student";

function App() {
  const isLoggedIn = true;

  return (
    <div>
      <Header />

      {/* Conditional rendering */}
      {isLoggedIn ? (
        <Profile name="Sakshi" role="Student" />
      ) : (
        <p>Please login</p>
      )}

  
    </div>
  );
}
(
    <div>
      <h1>Student Details</h1>

      {/* Passing props */}
      <Student name="Sakshi" age={22} />
      <Student name="Rahul" age={21} />
    </div>
  );


   (
    <div style={{ padding: "20px" }}>
      <h2>Login Form</h2>

      <form>
        {/* Username */}
        <div>
          <label>Username:</label><br />
          <input type="text" placeholder="Enter username" />
        </div>

        <br />

        {/* Password */}
        <div>
          <label>Password:</label><br />
          <input type="password" placeholder="Enter password" />
        </div>

        <br />

        {/* Button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );



export default App;
