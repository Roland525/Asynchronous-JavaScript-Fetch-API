import Posts from "./posts";
import DogGenerator from "./dogGenerator";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Posts />
      <hr />
      <DogGenerator />
    </div>
  );
}

export default App;
