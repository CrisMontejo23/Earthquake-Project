import React, { useState, useEffect } from "react";
import { url } from "../services/appService.js";

function AppComponent() {
  const [features, setFeatures] = useState([]);
  const [magTypes, setMagTypes] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(1);
  const [featureId, setFeatureId] = useState("");
  const [commentBody, setCommentBody] = useState("");
  const [alert, setAlert] = useState(null);

  const magTypeOptions = ["md", "ml", "ms", "mw", "me", "mi", "mb", "mlg"];

  useEffect(() => {
    if (perPage > 1000) {
      console.error("per_page must be less than or equal to 1000");
      return;
    }

    fetch(
      `${url}/features?mag_type=${magTypes}&page=${page}&per_page=${perPage}`
    )
      .then((response) => response.json())
      .then((data) => setFeatures(data.data))
      .catch((error) => console.error("Error fetching features:", error));
  }, [magTypes, page, perPage]);

  const toggleMagType = (type) => {
    setMagTypes((prevTypes) =>
      prevTypes.includes(type)
        ? prevTypes.filter((t) => t !== type)
        : [...prevTypes, type]
    );
  };

  const postComment = () => {
    if (!featureId) {
      setAlert({ type: "danger", message: "Ingrese el ID" });
      setTimeout(() => {
        setAlert(null);
      }, 5000);
      return;
    }

    if (!commentBody) {
      setAlert({ type: "danger", message: "Ingrese el comentario" });
      setTimeout(() => {
        setAlert(null);
      }, 5000);
      return;
    }

    fetch(`${url}/features/${featureId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: { body: commentBody } }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAlert({ type: "success", message: data });
        setTimeout(() => {
          setAlert(null);
        }, 5000);
        setFeatureId("");
        setCommentBody("");
      })
      .catch((error) => {
        console.error("Error:", error);
        setAlert({ type: "danger", message: "Error al enviar el comentario" });
        setTimeout(() => {
          setAlert(null);
        }, 5000);
      });
  };

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          className="text"
          style={{
            fontSize: "35px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          DATOS SISMOLÓGICOS EARTHQUAKE
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p>mag_type</p>
          {magTypeOptions.map((type) => (
            <button
              key={type}
              style={{
                backgroundColor: magTypes.includes(type) ? "green" : "initial",
              }}
              onClick={() => toggleMagType(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <p>Página</p>
          <input
            type="number"
            min="1"
            value={page}
            onChange={(e) => setPage(e.target.value)}
            placeholder="page"
            style={{ width: "50px" }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <p>Elementos por página</p>
          <input
            type="number"
            min="1"
            value={perPage}
            onChange={(e) => setPerPage(e.target.value)}
            placeholder="per_page"
            style={{ width: "50px" }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p>ID del feature</p>
          <input
            type="text"
            value={featureId}
            onChange={(e) => setFeatureId(e.target.value)}
            placeholder="ID"
            style={{ width: "50px" }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <p>Comentario</p>
          <input
            type="text"
            value={commentBody}
            onChange={(e) => setCommentBody(e.target.value)}
            placeholder="Comentario"
            style={{ width: "300px" }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            className="btn btn-success"
            onClick={postComment}
            style={{
              fortweight: "bold",
              boxShadow: "3px 3px 10px rgba(0, 0, 0, 1)",
              width: "auto",
            }}
          >
            Enviar Comentario
          </button>
        </div>
        {alert && (
          <div
            className={`alert alert-${alert.type}`}
            role="alert"
            style={{ textAlign: "center" }}
          >
            <pre>{JSON.stringify(alert.message, null, 2)}</pre>
          </div>
        )}
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "50px" }}
      >
        <table
          className="table"
          style={{
            border: "1px solid black",
            boxShadow: "3px 3px 10px rgba(0, 0, 0, 1)",
            height: "auto",
            width: "1200px",
            textAlign: "center",
          }}
        >
          <thead className="thead-dark">
            <tr>
              <th
                scope="col"
                style={{ border: "1px solid black", verticalAlign: "middle" }}
              >
                ID
              </th>
              <th
                scope="col"
                style={{ border: "1px solid black", verticalAlign: "middle" }}
              >
                External ID
              </th>
              <th
                scope="col"
                style={{ border: "1px solid black", verticalAlign: "middle" }}
              >
                Magnitude
              </th>
              <th
                scope="col"
                style={{ border: "1px solid black", verticalAlign: "middle" }}
              >
                Place
              </th>
              <th
                scope="col"
                style={{ border: "1px solid black", verticalAlign: "middle" }}
              >
                Tsunami
              </th>
              <th
                scope="col"
                style={{ border: "1px solid black", verticalAlign: "middle" }}
              >
                Mag Type
              </th>
              <th
                scope="col"
                style={{ border: "1px solid black", verticalAlign: "middle" }}
              >
                Title
              </th>
              <th
                scope="col"
                style={{ border: "1px solid black", verticalAlign: "middle" }}
              >
                Coordinates
              </th>
              <th
                scope="col"
                style={{ border: "1px solid black", verticalAlign: "middle" }}
              >
                External URL
              </th>
            </tr>
          </thead>
          <tbody>
            {features.length > 0 ? (
              features.map((feature) => (
                <tr key={feature.id}>
                  <td style={{ verticalAlign: "middle" }}>{feature.id}</td>
                  <td style={{ verticalAlign: "middle" }}>
                    {feature.attributes.external_id}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {feature.attributes.magnitude}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {feature.attributes.place}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {feature.attributes.tsunami ? "Yes" : "No"}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {feature.attributes.mag_type}
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    {feature.attributes.title}
                  </td>
                  <td
                    style={{ verticalAlign: "middle" }}
                  >{`Longitude: ${feature.attributes.coordinates.longitude}, Latitude: ${feature.attributes.coordinates.latitude}`}</td>
                  <td style={{ verticalAlign: "middle" }}>
                    <a
                      href={feature.links.external_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" style={{ verticalAlign: "middle" }}>
                  No se encontraron elementos en esta página
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default AppComponent;
