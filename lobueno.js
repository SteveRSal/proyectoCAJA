function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Agripino"&& password=="123")
{
    
    alert("Login Succesfully");
    window.open(src="agripino.html")
    return false;

}else if(username=="Cochiloco"&& password=="456"){

    alert("Login Succesfully");
    window.open(src="cochiloco.html")
    return false;

}else if(username=="Masiosare"&& password=="789"){

    alert("Login Succesfully");
    window.open(src="masiosare.html")
    return false;

}
else
{
    alert("Ni te topo");
}

}

//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("bodyagripino");

//Evento para mostrar y ocultar menú
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});

