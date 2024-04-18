import { React, useState } from "react";
import "./App.css";
import { Ingredientes } from "./components/Ingredientes";
import recetasData from "./components/recetas.json";
import { ListaRecetas } from "./components/ListaRecetas";

function App() {
  const [recetasPosibles, setRecetasPosibles] = useState([]);
  const [ingredientes, setIngredientes] = useState([
    "Pan",
    "Manteca",
    "Spaghettis",
    "Huevo",
    "Aceite",
  ]);
  const [nuevoIngrediente, setNuevoIngrediente] = useState("");

  const handleVerIdeasClick = () => {
    const recetasFiltradas = recetasData.filter((receta) =>
      receta.ingredients.every((ingredienteReceta) =>
        ingredientes.includes(ingredienteReceta)
      )
    );
    setRecetasPosibles(recetasFiltradas);
  };

  const addNuevoIngrediente = (value) => {
    if (value.trim() !== "") {
      setIngredientes([...ingredientes, value]);
      setNuevoIngrediente("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./imgs/cooker.png")} alt="Cooker"></img>
      </header>
      <div className="App-content">
        <p>1- Selección de los ingredientes disponibles:</p>
        <Ingredientes
          ingredientes={ingredientes}
          onIngredientesChange={setIngredientes}
        />
        <input
          className="input-new"
          type="text"
          value={nuevoIngrediente}
          placeholder="Nuevo Ingrediente"
          onChange={(e) => setNuevoIngrediente(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addNuevoIngrediente(e.target.value);
            }
          }}
        ></input>
        <button onClick={() => addNuevoIngrediente(nuevoIngrediente)}>
          Agregar Ingrediente
        </button>
      </div>
      <button onClick={handleVerIdeasClick}>2- Ver ideas!</button>
      <ListaRecetas recetas={recetasPosibles} />
    </div>
  );
}

export default App;
