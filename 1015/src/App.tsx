import { useEffect, useState } from "react";
import type { Pizza } from "./types/Pizza";
import "./App.css";
import apiClient, { BACKEND_URL } from "./apiClient/apiClient";

function App() {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzak(response.data))
      .catch((error) => alert(error));
  }, []);
  return (
    <>
      <h1>Pizzák</h1>
      <div>
        <table
          style={{
            border: "1px solid",
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <thead>
            <tr style={{ border: "1px solid" }}>
              <th>Név</th>
              <th>Leírás</th>
              <th>Ár</th>
              <th>Kép</th>
            </tr>
          </thead>
          <tbody style={{ border: "1px solid" }}>
            {pizzak?.map((p) => (
              <tr>
                <td style={{ border: "1px solid" }}>{p.nev}</td>
                <td style={{ border: "1px solid" }}>{p.leiras}</td>
                <td style={{ border: "1px solid", padding: "10px" }}>{p.ar}</td>
                <td style={{ border: "1px solid" }}>
                  <img src={`${BACKEND_URL}/kepek/${p.imageUrl}`} width={100} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
