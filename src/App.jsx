import { use, useEffect, useRef, useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import useFetch from "./hooks/useFetch";

function App() {
  // https://randomuser.me/api/?results=20
  const [usersQuantity, setusersQuantity] = useState(20);
  const url = `https://randomuser.me/api/?results=${usersQuantity}`;
  const [users, getUsers] = useFetch(url); //se esta desustructurado arreglos

  useEffect(() => {
    getUsers(); //esto va a quei por que asi soolo se eejcuta la funcion y no toda la pagina es para obtimizar
  }, [usersQuantity]); // El arreglo vacío significa que este efecto solo se ejecuta una vez al montar el componente

  // Imprime los datos de 'User' en la consola
  console.log(users);
  //se usa el map para correr los 20 compontes
  const handleSubmit = (e) => {
    e.preventDefault(); //para que al usar el form no se resetee la paginacompleta se desactiva
    setusersQuantity(inputQuantity.current.value);
  };

  const inputQuantity = useRef();
  return (
    <div>
      <h1>Custom Hooks</h1>

      <form onSubmit={handleSubmit}>
        <input
          ref={inputQuantity}
          type="number"
          placeholder="choose Quantity"
        />
        <button>Choose</button>
      </form>

      {users?.results.map((user) => (
        <UserCard key={user.login.uuid} user={user} />
      ))}
    </div>
  );
}

export default App;
