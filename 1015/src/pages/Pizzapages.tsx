import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../apiClient/apiClient";
import { useParams } from "react-router";

function App() {
  const { id } = useParams();
  const [pizza, setPizza] = useState<Pizza>();

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((response) => setPizza(response.data))
      .catch((error) => alert(error));
  }, []);
  return (
    <>
      <div>
        {pizza ? (
          <table
            style={{
              border: "1px solid",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <thead>
              <tr style={{ border: "1px solid" }}>
                <th style={{ border: "1px solid" }}>Név</th>
                <th style={{ border: "1px solid" }}>Leírás</th>
                <th style={{ border: "1px solid" }}>Ár</th>
                <th style={{ border: "1px solid" }}>Kép</th>
              </tr>
            </thead>

            <tbody style={{ border: "1px solid" }}>
              <tr>
                <td style={{ border: "1px solid" }}>{pizza.nev}</td>
                <td style={{ border: "1px solid" }}>{pizza.leiras}</td>
                <td style={{ border: "1px solid", padding: "8px" }}>
                  {pizza.ar}
                </td>
                <td style={{ border: "1px solid" }}>
                  <img
                    src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`}
                    width={100}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <h1>Hibás ID</h1>
        )}
      </div>
    </>
  );
}

export default App;
