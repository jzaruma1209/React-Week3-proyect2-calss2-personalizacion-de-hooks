import { useEffect, useRef, useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import useFetch from "./hooks/useFetch";

function App() {
  // URL para obtener usuarios aleatorios desde la API
  // https://randomuser.me/api/?results=20
  const [usersQuantity, setusersQuantity] = useState(20);
  const url = `https://randomuser.me/api/?results=${usersQuantity}`;
  const [users, hasError, isLoading, getUsers] = useFetch(url); // Se está desestructurando un arreglo
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    getUsers(); // Esto va aquí porque así solo se ejecuta la función y no toda la página. Es para optimizar el rendimiento.
  }, [usersQuantity]); // Se ejecuta cuando cambia 'usersQuantity'

  // Imprime los datos de 'users' en la consola
  console.log(users);

  // Se usa 'map' para recorrer los 20 componentes y renderizar cada usuario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario resetee la página al enviarse

    if (inputQuantity.current.value > 5000 || inputQuantity.current.value < 1) {
      setMessageError("Choose a number from 1 to 5000");
    } else {
      setusersQuantity(inputQuantity.current.value);
      setMessageError(""); // Borra el mensaje de error si la cantidad es válida
    }
  };

  const inputQuantity = useRef();

  return (
    <div>
      <h1>Custom Hooks</h1>

      <form onSubmit={handleSubmit}>
        <input
          ref={inputQuantity}
          type="number"
          placeholder="Choose Quantity"
          min={1} // Valor mínimo permitido
          defaultValue={usersQuantity}
          // max={5000} // Puedes habilitarlo si quieres limitar el máximo
        />
        <button>Choose</button>
      </form>

      {/* Muestra un mensaje según el estado de carga o error */}
      {isLoading ? (
        <h1>Loading.....</h1>
      ) : messageError ? (
        <h1>{messageError}</h1>
      ) : (
        users?.results.map((user) => (
          <UserCard key={user.login.uuid} user={user} />
        ))
      )}
    </div>
  );
}

export default App;
