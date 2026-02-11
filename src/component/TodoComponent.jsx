import React, { useContext, useEffect, useState } from "react";
import {
  retreiveTodoApi,
  updateTodoApi,
  createTodoApi,
} from "./api/TodoApiCall";
import { Authcontext } from "./security/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";

function TodoComponent() {
  const { username } = useContext(Authcontext);
  const { id } = useParams();

  const navigate = useNavigate();
  const containerStyle = {
    maxWidth: "560px",
    margin: "2rem auto",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    background: "#f7f9fc",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    margin: "0 0 1rem 0",
    color: "#333",
    fontSize: "1.25rem",
    textAlign: "center",
  };

  const formStyle = {
    display: "grid",
    gap: "0.75rem",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
  };

  const fullWidthStyle = {
    gridColumn: "1 / -1",
  };

  const inputStyle = {
    padding: "0.6rem 0.75rem",
    borderRadius: "6px",
    border: "1px solid #d1d9e6",
    outline: "none",
    fontSize: "0.95rem",
    background: "#fff",
  };

  const buttonStyle = {
    padding: "0.65rem 0.9rem",
    borderRadius: "6px",
    border: "none",
    background: "#1976d2",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 150ms ease",
  };

  const [initialValues, setInitialValues] = useState({
    description: "",
    targetDate: "",
  });
  const isNewTodo = String(id) === "-1";

  const handleSubmit = async (values) => {
    const valuesToSend = {
      username: username,
      description: values.description,
      targetDate: values.targetDate,
      done: false,
    };

    try {
      if (isNewTodo) {
        await createTodoApi(username, {
          ...valuesToSend,
          id: -1,
        });
      } else {
        await updateTodoApi(username, Number(id), {
          ...valuesToSend,
          id: Number(id),
        });
      }

      navigate("/todos");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const init = async () => {
      if (isNewTodo) {
        setInitialValues({
          description: "",
          targetDate: "",
        });
        return;
      }

      const todo = await retreiveTodoApi(username, id);
      setInitialValues({
        description: todo.description,
        targetDate: todo.targetDate,
      });
    };

    init();
  }, [id, isNewTodo, username]);

  // const handleSubmit = (values) => {
  //   console.log("Form submitted with values:", values);
  //   // Here you would typically make an API call to update the todo item
  //   // For example:
  //   const valuesToUpdate = {
  //     id: id,
  //     username: username,  // ✅ Add this line
  //     description: values.description,
  //     targetDate: values.targetDate,
  //     done: false, // You can adjust this based on your form inputs
  //   };
  //   updateTodoApi(username, id, valuesToUpdate)
  //     .then(response => {
  //       console.log("Todo updated successfully:", response);
  //       navigate('/todos');
  //       // Optionally navigate back to the todo list or show a success message
  //     })
  //     .catch(error => {
  //       console.error("Error updating todo:", error);
  //       // Optionally show an error message to the user
  //     });
  // };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>
        {isNewTodo ? "Create todo here" : "Update todo here"}
      </h2>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form style={formStyle} onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              placeholder="Todo description"
              style={{ ...inputStyle, ...fullWidthStyle }}
              value={values.description}
              onChange={handleChange}
            />
            <input
              type="date"
              name="targetDate"
              placeholder="Target date"
              style={inputStyle}
              value={values.targetDate}
              onChange={handleChange}
            />
            <button
              type="submit"
              style={{
                ...buttonStyle,
                gridColumn: "1 / -1",
                justifySelf: "end",
              }}
            >
              {isNewTodo ? "Create Todo" : "Update Todo"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default TodoComponent;
