import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo } from "./store";

const TodoItem = ({ data, index }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(data);
  const editBoxElement = useRef();

  const removeFromTodo = () => {
    dispatch(removeTodo(index));
  };

  const editFromTodo = () => {
    if (isEdit) {
      dispatch(editTodo({ index, editValue }));
    }
    setIsEdit(!isEdit);
  };

  useEffect(() => {
    if (isEdit) {
      editBoxElement.current?.focus();
    }
  }, [isEdit]);

  return (
    <>
      <div>
        <span>{index + 1}. </span>
        {isEdit ? (
          <>
            <form
              className="flat-form"
              onSubmit={(e) => {
                e.preventDefault();
                if (!editValue) return;
                editFromTodo();
              }}
            >
              <input
                type="text"
                value={editValue}
                ref={editBoxElement}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button className="hide-btn">
                <SvgOk />
              </button>
            </form>
          </>
        ) : (
          <>
            <p className="inline">{data}</p>
            <button className="hide-btn" onClick={editFromTodo}>
              <SvgEdit />
            </button>
          </>
        )}
        <button
          className="delete-btn"
          data-index={index}
          onClick={removeFromTodo}
        >
          x
        </button>
      </div>
    </>
  );
};

const SvgEdit = () => {
  return (
    <>
      <svg
        className="icon-tabler-pencil"
        width="19"
        height="19"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
      </svg>
    </>
  );
};

const SvgOk = () => {
  return (
    <>
      <svg
        version="1.1"
        width="12"
        height="12"
        viewBox="0 0 1200 1200"
        strokeWidth="1"
        stroke="currentColor"
      >
        <path
          id="path15124"
          d="M1004.237,99.152l-611.44,611.441L194.492,512.288L0,706.779
	l198.305,198.306l195.762,195.763L588.56,906.355L1200,294.916L1004.237,99.152z"
        />
      </svg>
    </>
  );
};

export default TodoItem;
