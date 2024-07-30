import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { resetFetchData } from "./promise";
import { ErrorContext, ErrorContextCallback } from "./Layout";

function App() {
  const [count, setCount] = useState(0);
  const errorMessage = useContext(ErrorContext);
  const errorMessageCallback = useContext(ErrorContextCallback);

  useEffect(() => {
    resetFetchData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            errorMessageCallback(undefined);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {errorMessage && <p className="error">{errorMessage}</p>}
      <div className="contact-wrapper">
        <Link to={"/contact?rejected=true"}>異常系:ルート内非同期処理</Link>
        <Link to={"/loader"}>異常系:ローダーエラー</Link>
        <Link to={"/contact"}>正常系</Link>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
