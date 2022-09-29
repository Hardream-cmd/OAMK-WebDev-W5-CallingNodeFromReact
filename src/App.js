import "./App.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const URL = "http://localhost:3001/";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage(error);
      });
  }, []);

  return (
    <div>
      <h3>This message was retrieved from my NodeJS server :</h3>
      <p>{message}</p>
    </div>
  );
}

export default App;
