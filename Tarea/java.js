const primeraapi = "http://localhost:8080/api/alumno/all";
const segundaapi = "https://pokeapi.co/api/v2/pokemon/ditto";
const terceraapi = "https://lp2-cuatro.herokuapp.com/api/home/primeraApi";

const cargaapi = async () => {
    const consulta = await consumiendoapi(primeraapi);
    const consulta2 = await consumiendoapi(segundaapi);
    const consulta3 = await consumiendoapi(terceraapi);
    console.log(consulta);
    console.log(consulta2);
    console.log(consulta3);

}

const consumiendoapi = async (api)=>{
    const respuesta = await fetch(api);
    return respuesta.json();
}   





