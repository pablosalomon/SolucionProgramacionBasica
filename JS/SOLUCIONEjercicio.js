let Datos = [
    {
        Nombre: "Marlon",
        Apellido: "Gomez"
    },
    {
        Nombre: "Adriana",
        Apellido: "Gomez"
    },
    {
        Nombre: "Steven",
        Apellido: ""
    },
    {
        Nombre: "Carlos",
        Apellido: "Romero"
    },
    {
        Nombre: "Pepe",
        Apellido: "Romero"
    }
];

function buscar(){
    let apellido=document.getElementById('apellido').value;
    let ncompleto= Datos.filter(data=>data.Apellido==apellido);
    window.alert('El nombre que coincide con el apellido es:' +JSON.stringify(ncompleto))
   }
