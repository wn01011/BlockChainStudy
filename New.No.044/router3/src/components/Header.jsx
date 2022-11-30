import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      Header
      <div>
        <Link to="/">
          {/* state props를 사용해서 데이터를 전달할 수 있다. */}
          Home
        </Link>{" "}
        | <Link to="login">Log in</Link> | <Link to="log/in">Log in 2</Link> |{" "}
        <Link to={"log/out?"}>Log out 2</Link>
      </div>
    </div>
  );
}

export default Header;
