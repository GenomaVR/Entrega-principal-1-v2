function buscarApellido() {
    
    const jugadores = [
        {nombre: "jayson", apellido: "tatum", edad:"24", posicion:"PG"},
        {nombre: "marcus", apellido: "smart", edad:"24", posicion:"PG"},
        {nombre: "jaylen", apellido: "brown", edad:"24", posicion:"PG"},
        {nombre: "al", apellido: "hordford", edad:"24", posicion:"PG"},
        {nombre: "robert", apellido: "williams", edad:"24", posicion:"PG"},
    ]


    alert("Bienvenido a Celtics LATAM, podes buscar a tu jugador con los siguientes botones")

    let busquedaJugador = prompt("Busqueda de jugador por apellido").toLowerCase()


    while(busquedaJugador!="salir")

    {
        switch(busquedaJugador)
        {
          case "tatum":
            if(busquedaJugador == "tatum")
            {
                alert("Se encontro a: Jayson Tatum");
                const busquedaJayson = jugadores.filter((el) => el.apellido.includes("tatum"));
                console.log(busquedaJayson);
                alert(JSON.stringify(busquedaJayson));
            }
            else if (busquedaJugador != "tatum")
            {
                alert("No se encontro al jugador con nombre indicado, favor de realizar una nueva busqueda");
            }
            break;
          case "smart":
            if (busquedaJugador == "smart")
            {
                alert("Se encontro a: Marcus Smart");
                const busquedaMarcus = jugadores.filter((el) => el.apellido.includes("smart"));
                console.log(busquedaMarcus);
                alert(JSON.stringify(busquedaMarcus));
            }
    
            else if (busquedaJugador != "smart")
            {
                alert("No se encontro al jugador con nombre indicado, favor de realizar una nueva busqueda");
            }
            break;
          case "brown":  
        if (busquedaJugador == "brown")
        {
            alert("Se encontro a: Jaylen Brown");
            const busquedaJaylen = jugadores.filter((el) => el.apellido.includes("brown"));
            console.log(busquedaJaylen);
            alert(JSON.stringify(busquedaJaylen));
        }

        else if (busquedaJugador != "brown")
        {
            alert("No se encontro al jugador con nombre indicado, favor de realizar una nueva busqueda");
        }
            break;
          case "hordford":
            if (busquedaJugador == "hordford")
            {
                alert("Se encontro a: Al Hordford");
                const busquedaAl = jugadores.filter((el) => el.apellido.includes("hordford"));
                console.log(busquedaAl);
                alert(JSON.stringify(busquedaAl));
            }
    
            else if (busquedaJugador != "hordford")
            {
                alert("No se encontro al jugador con nombre indicado, favor de realizar una nueva busqueda");
            }
            break;

            case "williams":
            
            if (busquedaJugador == "williams")
             {
            alert("Se encontro a: Robert Williams");
            const busquedaRobert = jugadores.filter((el) => el.apellido.includes("williams"));
            console.log(busquedaRobert);
            alert(JSON.stringify(busquedaRobert));
           }

            else if (busquedaJugador != "williams")
           {
            alert("No se encontro al jugador con nombre indicado, favor de realizar una nueva busqueda");
           }
            break;

            default:
            console.log("Sin jugador en la base de datos");
            alert("No se encontro al jugador con nombre indicado, favor de realizar una nueva busqueda");
            break;
        }//fin del switch
        busquedaJugador=prompt("Quiere buscar otro jugador? si quiere salir escriba salir");
      }//fin del while
       console.log("se termino la busqueda de jugadores");
/* const busqueda = jugadores.filter((el) => el.nombre.includes("jayson")) */

}



