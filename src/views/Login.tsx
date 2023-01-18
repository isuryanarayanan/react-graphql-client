import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../redux/auth/actions/login";
import { useAppDispatch } from "../redux/store";

function Login() {
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If the form is submitted and either of the field is empty then return
    // a toast message to the user
    if (!e.currentTarget.email.value || !e.currentTarget.password.value) {
      toast.error("Please fill in all the fields");
      return;
    }

    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    dispatch(login({ email, password }));
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="register">
        <p>Don't have an account?</p>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Login;
