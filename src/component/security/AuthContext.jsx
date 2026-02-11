import { createContext, useState } from "react";
import { basicApiCallForHelloWorldWithToken } from "../api/HelloWorldApiCall";
export const Authcontext = createContext();


function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with actual authentication logic
  const [number, setNumber] = useState(0);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState(null);

  // setInterval(() => {
  //     setNumber((prevNumber) => prevNumber + 1);
  // }, 100000);

  // function login(username, password) {
  //     if (username === "admin" && password === "password") {
  //         setIsAuthenticated(true);
  //         setUsername(username);
  //         return true;
  //     } else {
  //         setIsAuthenticated(false);
  //         setUsername("");
  //         return false;
  //     }
  // }

  //   function login(username, password) {

  //     const baToken = 'Basic ' + btoa(`${username}:${password}`); // Base64 encode the credentials

  //     console.log("Generated Basic Auth Token:", baToken);

  //     basicApiCallForHelloWorldWithToken(username,baToken)
  //       .then((response) => {
  //         console.log("API response in login after token call:", response);
  //         // Assuming a successful response indicates valid credentials
  //         setIsAuthenticated(true);
  //         setUsername(username);
  //       })
  //       .catch((error) => {
  //         console.error("API error in login:", error);
  //         setIsAuthenticated(false);
  //         setUsername("");
  //       });
  //   }

//   async function login(username, password) {
//     const baToken = "Basic " + btoa(`${username}:${password}`);

//     try {
//       const response = await basicApiCallForHelloWorldWithToken(
//         username,
//         baToken,
//       );
//         // axios.defaults.headers.common['Authorization'] = baToken;

//         // apiClient.interceptors.request.use((config) => {
//         //   config.headers.Authorization = baToken;
//         //   return config;
//         // });
//         // localStorage.setItem("token", baToken);  // ✅ store
//         apiClientWithInterceptor.defaults.headers.common['Authorization'] = baToken;
//         localStorage.setItem("token", baToken);

//       console.log("API response in login:", response);

//       setIsAuthenticated(true);
//       setUsername(username);
//       setToken(baToken); // ✅ STORE TOKEN

//       return true; // ✅ IMPORTANT
//     } catch (error) {
//       console.error("API error in login:", error);

//       setIsAuthenticated(false);
//       setUsername("");
//       setToken(null);

//       return false; // ✅ IMPORTANT
//     }
//   }
async function login(username, password) {
  const baToken = "Basic " + btoa(`${username}:${password}`);

  try {
    await basicApiCallForHelloWorldWithToken(
      username,
      baToken
    );

    localStorage.setItem("token", baToken);  // ✅ store token

    setIsAuthenticated(true);
    setUsername(username);
    setToken(baToken);

    return true;
  } catch (error) {
    setIsAuthenticated(false);
    setUsername("");
    setToken(null);
    localStorage.removeItem("token");

    return false;
  }
}

function logout() {
  setIsAuthenticated(false);
  setUsername("");
  setToken(null);
  localStorage.removeItem("token");
}

  return (
    <Authcontext.Provider
      value={{
        number,
        setNumber,
        username,
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
        token
      }}
    >
      {children}
    </Authcontext.Provider>
  );
}

export default AuthProvider;
