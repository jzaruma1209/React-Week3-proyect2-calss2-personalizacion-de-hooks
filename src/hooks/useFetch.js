// 🔹 Hook personalizado para manejar solicitudes HTTP con Axios
import axios from "axios";
import { useState } from "react";

const useFetch = (url) => {
  // 📌 Estados para gestionar la respuesta, errores y el estado de carga
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // **************************** FORMA 1 - Promesas con .then/.catch/.finally inicio

  const getData = () => {
    // 🔹 Realiza una solicitud GET a la API

    /// 📌 AQUI SON CONSUMIDORES DE LAS PROMESAS
    // Cuando hacemos una petición HTTP, consumimos una promesa.
    // Los consumidores de promesas son: .then, .catch y .finally.

    /* 
    🔹 .then → Se ejecuta cuando la promesa se cumple correctamente y obtiene la respuesta.
    🔹 .catch → Se ejecuta cuando la promesa falla (error en la petición).
    🔹 .finally → Se ejecuta siempre, sin importar si la promesa se cumplió o falló.
                  Se usa para manejar estados de carga como "loading".
    */

    // 🔹 Axios realiza la petición y gestiona la respuesta con promesas
    axios
      .get(url)
      .then((res) => {
        // ✅ Si la petición es exitosa, guardamos los datos y eliminamos el error
        setData(res.data);
        setError(false);
      })
      .catch((error) => {
        // ❌ Manejo de errores en caso de que la solicitud falle
        console.error(error); // Aquí se usa 'error', antes tenías 'err'
        setError(true);
      })
      // 🕐 Manejo del estado de carga cuando la petición finaliza
      .finally(() => {
        setLoading(false); // No necesitas pasar "error" aquí
      });
  };

  // **************************** FORMA 1 fin

  // **************************** FORMA 2 - Promesas con async/await inicio
  /// 📌 ESTO ES PARA CONSUMIR LA API USANDO ASYNC/AWAIT EN VEZ DE .THEN/.CATCH
  // Otra forma de consumir una promesa con sintaxis más clara

  /*
  const getData = async () => {
    try {
      // 🔹 Esperamos la respuesta de la API con await
      const res = await axios.get(url);
      setData(res.data);
      setError(false);
    } catch (error) {
      // ❌ Capturamos errores si la petición falla
      console.error(error);
      setError(error);
    } finally {
      // 🕐 Siempre se ejecuta, para manejar el estado de carga
      setLoading(false);
    }
  };
  */

  // **************************** FORMA 2 fin

  // 📌 Retorna los datos, el estado de error, el estado de carga y la función para obtener datos
  return [data, error, loading, getData];
};

/* 🔹 Los custom hooks son patrones de diseño muy usados para reutilizar lógica en componentes */
export default useFetch;
