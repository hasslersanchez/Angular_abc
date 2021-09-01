interface Alumno {
    nombre: string,
    edad: number
}

var listaDeNombres: Array<string> = [
    "pulpin",
    "jose",
    "hidekel",
    "chuy"
];

var listadoDeNumeros: Array<number> = [1, 2, 3, 4];

var listadoDeAlumnos: Array<Alumno> = [
    {
        nombre: "Maria",
        edad: 25
    },
    {
        nombre: "paul",
        edad: 30
    }
]
console.log(listaDeNombres[0])
console.log(listadoDeNumeros[0])
console.log(listadoDeAlumnos[0].nombre)