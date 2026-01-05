function App() {
  return (
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
}

export default App;
