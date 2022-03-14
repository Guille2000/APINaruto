const cargarNaruto = async () => {
    try {
            //conectarnos a la API:

        const respuesta = await fetch('https://naruto-api.herokuapp.com/api/v1/characters')
         //hacemos una peticion, pero hay q esperar a que termine para poder hacer algo
    //para eso utilizamos await, hace una peticion, una vez termina pasa a la siguiente linea
        console.log(respuesta)
        //siempre hay q verificar el codigo de la peticion antes de ejecutarlo
         //comprobamos del codigo de respuesta del codigo que tenemos, si es correcto
        if(respuesta.status === 200){ //si es 200, se ejecuta esto 
            const datos = await respuesta.json() //accedemos a la info. el metodo json es asincrono asi que usamos await para esperar a q acabe
            const nombres = datos.map(data => data.name)


            let Naruto = '' //cadena de texto vacio, y en este variable guardamos
            //el codigo html 
            Naruto = Naruto + `<p class="nombres">${nombres}</p>`
            
              //accedemos a la variable y la igualamos a lo que ya tenemos de la variable naruto 
            document.getElementById('contenedor').innerHTML = Naruto


        } else if(respuesta.status === 401){ //comprobar si nos devuelve un error 401
            console.log('Sin conexion')
        } else if(respuesta.status === 404){ // preguntamos si nos devuelve un 404
            console.log('El personaje no existe')
        } else{
            console.log('Error fatal')//si no nos devuelve ningun error, ponemos q algo paso
        }

    } catch (error) {
        console.log(error)// con esto capturamos el error y lo accedemos con un console.log
    }
   
}
cargarNaruto()
