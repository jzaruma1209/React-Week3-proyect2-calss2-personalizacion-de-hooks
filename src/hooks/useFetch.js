//esto es un hooks personalizado por mi pz
//esto es un hook para poder manejar el axiso las peticiones del servidor
import axios from "axios";
import { useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);

  const getData = () => {
    // Realiza una solicitud GET a la API
    axios
      .get(url)
      .then((res) =>
        // Establece los datos obtenidos en el estado 'User'
        setData(res.data)
      )
      .catch((error) =>
        // Manejo de errores en caso de que la solicitud falle
        console.error(err)
      );
  };

  return [data, getData];
};

export default useFetch;
