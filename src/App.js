import "./style/style.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./store/todoSlice";
import { TodoList } from "./component/todoList";
import { InputField } from "./component/inputField";
import Loading from "./component/loading";
import { Helmet } from "react-helmet";

function App() {
  const todos = useSelector((state) => state.todos.todos);

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  const addTask = () => {
    dispatch(addTodo({ text })), setText("");
  };

  return (
    <>
      <Helmet>
        <title>TODO list</title>
        <meta name="content-type" content="text/html; charset=UTF-8"></meta>
        <meta name="description" content="This is my React Native app"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="keywords" content="todo, todo list"></meta>
        <meta name="author" content="Naumkin Alexsander"></meta>
        <meta name="rating" content="general"></meta>
        <meta name="language" content="en"></meta>
        <meta name="language" content="ua"></meta>
      </Helmet>
      <div className="App">
        <h1>
          T<span className="title">odo</span> L
          <span className="title">ist</span>
        </h1>
        <InputField text={text} handleInput={setText} handleSubmit={addTask} />
        {loading && <Loading />}
        {todos.length ? (
          <TodoList />
        ) : loading ? null : (
          <h3>
            N<span className="title">o todos</span>!
          </h3>
        )}
      </div>
    </>
  );
}

export default App;
