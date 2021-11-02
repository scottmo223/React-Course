import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn react" />
      <Todo text="Learn node" />
      <Todo text="Learn mongodb" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
