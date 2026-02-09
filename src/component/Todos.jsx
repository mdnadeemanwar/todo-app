import React, { useContext } from "react";    
import { Authcontext } from "./security/AuthContext";

function Todos() {
    const today = new Date();   
    const targetDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    const todos = [
        { id: 1, title: "Learn React", completed: false ,targetDate: targetDate.toDateString()},
        { id: 2, title: "Build a Todo App", completed: true ,targetDate: targetDate.toDateString()},
        { id: 3, title: "Master JavaScript", completed: false ,targetDate: targetDate.toDateString()},
      ];
      const {isAuthenticated } = useContext(Authcontext);
return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "24px", maxWidth: "900px", margin: "0 auto" }}>
        {isAuthenticated ? (
            <div>
               
            <h1 style={{ marginBottom: "16px", color: "#333" }}>Welcome to my Todos</h1>
               <table
            style={{
                width: "100%",
                borderCollapse: "collapse",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                background: "#fff",
            }}
        >
            <thead>
                <tr>
                    <th style={{ textAlign: "center", padding: "12px 16px", borderBottom: "2px solid #eef2f5" }}>ID</th>
                    <th style={{ textAlign: "center", padding: "12px 16px", borderBottom: "2px solid #eef2f5" }}>Title</th>
                    <th style={{ textAlign: "center", padding: "12px 16px", borderBottom: "2px solid #eef2f5" }}>Target Date</th>
                    <th style={{ textAlign: "center", padding: "12px 16px", borderBottom: "2px solid #eef2f5" }}>Status</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo, idx) => (
                    <tr
                        key={todo.id}
                        style={{
                            background: idx % 2 === 0 ? "#ffffff" : "#fbfdff",
                        }}
                    >
                        <td style={{ padding: "12px 16px", borderBottom: "1px solid #f1f5f9", width: "60px" }}>{todo.id}</td>
                        <td style={{ padding: "12px 16px", borderBottom: "1px solid #f1f5f9" }}>{todo.title}</td>
                        <td style={{ padding: "12px 16px", borderBottom: "1px solid #f1f5f9" }}>{todo.targetDate}</td>
                        <td style={{ padding: "12px 16px", borderBottom: "1px solid #f1f5f9" }}>
                            <span
                                style={{
                                    display: "inline-block",
                                    padding: "6px 10px",
                                    borderRadius: "999px",
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    color: todo.completed ? "#ffffff" : "#3b3b3b",
                                    backgroundColor: todo.completed ? "#28a745" : "#ffd54f",
                                }}
                            >
                                {todo.completed ? "Completed" : "Pending"}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
         </div>
        ) 
        : (
            <h1 style={{ marginBottom: "16px", color: "#333" }}>Please log in to view your Todos</h1>
        )}

     
    </div>
);
}

export default Todos; 