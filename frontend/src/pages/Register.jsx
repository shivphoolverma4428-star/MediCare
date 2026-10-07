function Register() {
  return (
    <div className="form-page">

      <h1>Create Account</h1>

      <form>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;