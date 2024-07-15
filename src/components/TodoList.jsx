const TodoList = ({ todos, onRemoveTodo }) => {
  return (
    <div className="TodoList">
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <span>{todo}</span>
              <button onClick={() => onRemoveTodo(todo)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
