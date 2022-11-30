import LogInContainer from "./containers/LogIn";
import LogOutContainer from "./containers/LogOut";
import RegistContainer from "./containers/Regist";
import "./App.css";
function App() {
  return (
    <div className="App">
      <LogInContainer />
      {/* <LogOutContainer /> */}
      <RegistContainer />
    </div>
  );
}

export default App;
