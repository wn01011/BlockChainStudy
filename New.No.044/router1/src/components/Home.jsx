import { useLocation } from "react-router-dom";

function Home({ num }) {
  console.log(useLocation().state);
  return <div>Home {num}</div>;
}

export default Home;
