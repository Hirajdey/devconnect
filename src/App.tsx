import { useContext } from "react";
import { AppContext } from "./app-context/AppContext";

function App() {
  const { userName, userEmail, setUserName } = useContext(AppContext)
   
  // setTimeout(() => {
  //   setUserName?.('')
  // }, 2000)

  return (
    <div className="App">
        <h1>DEV CONNECT - {userName} - {userEmail}</h1>
    </div>
  );
}

export default App;
