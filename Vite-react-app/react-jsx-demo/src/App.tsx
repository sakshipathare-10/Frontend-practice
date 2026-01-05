
import Header from "./Header";
import Profile from "./Profile";


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
