import { React, useState, useEffect } from "react";

export function Ingredientes({ ingredientes, onIngredientesChange }) {
  const [ings, setIngs] = useState([]);

  useEffect(() => {
    setIngs((prevIngredientes) => {
      const newIngredientes = [
        ...prevIngredientes,
        ...ingredientes.filter((ing) => !prevIngredientes.includes(ing)),
      ];
      return Array.from(new Set(newIngredientes));
    });
  }, [ingredientes]);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    const ingrediente = e.target.value;
    if (isChecked) {
      onIngredientesChange([...ingredientes, ingrediente]);
    } else {
      onIngredientesChange(ingredientes.filter((ing) => ing !== ingrediente));
    }
  };

  const handleDeselectAll = () => {
    onIngredientesChange([]);
  };

  const handleSelectAll = () => {
    onIngredientesChange([...ings]);
  };

  return (
    <div>
      <div>
        <button className="btn-deseleccion" onClick={handleDeselectAll}>
          Deseleccionar todos
        </button>
        <button className="btn-deseleccion" onClick={handleSelectAll}>
          Seleccionar todos
        </button>
      </div>
      <div className="checkbox-wrapper-2">
        <ul>
          {ings.map((ingrediente, index) => (
            //<li key={`$ingrediente}-${index}`}>
            <div>
              <label>
                <input
                  className="sc-gJwTLC ikxBAC"
                  type="checkbox"
                  id={ingrediente}
                  value={ingrediente}
                  checked={ingredientes.includes(ingrediente)}
                  onChange={handleCheckboxChange}
                ></input>
                {ingrediente}
              </label>
              <br />
            </div>
            //</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
