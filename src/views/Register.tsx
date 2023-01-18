import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../redux/store";
import { register } from "../redux/auth/actions/register";

function Register() {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If any of the data is incomplete then return a toast message to the user
    if (
      !e.currentTarget.email.value ||
      !e.currentTarget.password.value ||
      !e.currentTarget["password-confirm"].value ||
      !e.currentTarget.username.value
    ) {
      toast.error("Please fill in all the fields");
      return;
    }

    // If the password and confirm password fields don't match then return a toast message to the user
    if (
      e.currentTarget.password.value !==
      e.currentTarget["password-confirm"].value
    ) {
      toast.error("Passwords don't match");
      return;
    }

    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const username = e.currentTarget.username.value;

    dispatch(register({ email, password, username }));
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="form-group">
          <label htmlFor="password-confirm">Confirm Password</label>
          <input
            type="password"
            name="password-confirm"
            id="password-confirm"
          />
        </div>
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
      <div className="register">
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Register;
