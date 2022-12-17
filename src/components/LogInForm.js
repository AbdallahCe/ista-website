import "./LogInFormStyles.css";
import { Link } from "react-router-dom";

function LogInForm() {
  return (
    <div className="form-container">
      <h1> Se connecter</h1>
      <form>
        <input type="email" placeholder="Adresse email" />
        <input type="password" placeholder="Mot de passe" />
        <Link className="nav-links" to="/admin">
          Se connecter
        </Link>
      </form>
    </div>
  );
}

export default LogInForm;
