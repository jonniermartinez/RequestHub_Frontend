import "./App.css";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const user = useSelector((state: RootState) => state.user);
  console.log(user);
  return (
    <>
      <Login></Login>
    </>
  );
}

export default App;
