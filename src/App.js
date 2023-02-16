import "./App.css";
import ComponentC from "./components/contextdemo/ComponentC";
import { UserProvider } from "./components/contextdemo/userContext";

function App() {
  return (
    <>
      <UserProvider value="Ami Fey">
        <ComponentC />
      </UserProvider>
    </>
  );
}

export default App;
