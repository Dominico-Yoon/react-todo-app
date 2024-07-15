import { useState } from "react";

const TodoInput = ({ onAddTodo }) => {
  const [inputText, setInputText] = useState();
  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    onAddTodo(inputText);
    setInputText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        value={inputText}
        onChange={handleInput}
      />
      <button onClick={handleClick}>추가</button>
    </div>
  );
};

export default TodoInput;
