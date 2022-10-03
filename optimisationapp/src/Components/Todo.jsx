import React from "react";
import { useCallback } from "react";
import TodoList from "./TodoList";

let obj = [
  { title: "Learn React", id: 1, status: false },
  { title: "Learn Html", id: 2, status: false },
  { title: "Learn Redux", id: 3, status: false },
];
const Todo = () => {
  const [data, setData] = React.useState(obj);
  const [text, setText] = React.useState("");
  const handletoggle = useCallback(
    (id) => {
      let todos = data.map((e) =>
        e.id === id ? { ...e, status: !e.status } : e
      );
      setData(todos);
    },
    [data]
  );

  const handledelet = useCallback(
    (id) => {
      let newtodo = data.filter((e) => e.id !== id);
      setData(newtodo);
    },
    [data]
  );
  const handleadd = useCallback(() => {
    if (text) {
      const payload = { id: data.length + 1, title: text, status: false };
      console.log(payload);
      setData([...data, payload]);
    }
  }, [data]);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todd"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleadd}>Add</button>
      {data?.map((e) => (
        <div key={e.id}>
          <TodoList
            {...e}
            handletoggle={handletoggle}
            handledelet={handledelet}
          ></TodoList>
        </div>
      ))}
    </div>
  );
};

export default Todo;
