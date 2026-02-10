import React, { use, useContext, useEffect } from "react";
import { retreiveTodoApi } from "./api/TodoApiCall";
import { Authcontext } from "./security/AuthContext";
import { useParams } from "react-router-dom";

function TodoComponent() {
  const { username } = useContext(Authcontext);
  const {id} = useParams();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [targetDate, setTargetDate] = React.useState("");   
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

useEffect(() => {
    try {
        const fetchData = async () => {
            const todo = await retreiveTodoApi(username, id);
            console.log("todo inside the useEffect :", todo);
            // Populate form fields with fetched todo data
            // For example:
            setTitle(todo.title);
            setDescription(todo.description);
            setTargetDate(todo.targetDate);
        };
        fetchData();
    } catch (error) {
        console.error("Error fetching todo:", error);
    }

}, [id]);

return (
    <div style={containerStyle}>
        <h2 style={headerStyle}>Update todo here</h2>
        <form
            style={formStyle}
            onSubmit={(e) => {
                e.preventDefault();
                // handle submit
            }}
        >
            <input
                type="text"
                placeholder="Todo title"
                style={{ ...inputStyle, ...fullWidthStyle }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="date"
                placeholder="Target date"
                style={inputStyle}
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
            />
            <button
                type="submit"
                style={{ ...buttonStyle, gridColumn: "1 / -1", justifySelf: "end" }}
            >
                Update Todo
            </button>
        </form>
    </div>
);
}

export default TodoComponent;
