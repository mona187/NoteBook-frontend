import { Title } from "./styles";
import NotebooksTab from "./components/NotebooksTab";
import { RiBookletLine } from "react-icons/ri";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ paddingTop: 20, paddingLeft: 40 }}>
      <Title>
        NOTEBOOK {"  "}
        <RiBookletLine style={{ verticalAlign: "middle" }}></RiBookletLine>
      </Title>
      <NotebooksTab />
    </div>
  );
}

export default App;
