const boton= document.getElementById('btn'); //el boton

boton.addEventListener('click', () =>{ //addEventListener indica que está "escuchando el click"

    let comments= document.getElementById('comment').value; // añade comentario 
    document.getElementById('comment').value=''; // cuando se envia el comentario se elimina del textarea
    const cont= document.getElementById('cont'); // contenedor de comentarios
    const newComments = document.createElement('div');// crea un div para los comentarios nuevos
    const chck = document.createElement('input'); //checkbox
    chck.type = 'checkbox';                         // determina el tipo de input
    const heart = document.createElement('i');      // crea el icono
    heart.classList.add('fa','fa-heart','heart');   // estilos del icono
    const trash =document.createElement('i');       // idem al anterior
    trash.classList.add ('fa','fa-trash','trash');
    const contenedorElemento = document.createElement('p'); // contenedor elemento contiene el comentario grabado dentro de un p
    let textNewComment = document.createTextNode(comments); // le dice al valor que es un texto, le asigna que es un string
    contenedorElemento.appendChild(textNewComment); // 
    newComments.appendChild(chck); // newComments es el padre y chck el hijo
    newComments.appendChild(heart); // significa que se le asigna un chck al elemento newComments (div)
    newComments.appendChild(trash);
    newComments.appendChild(contenedorElemento);
    cont.appendChild(newComments);

    heart.addEventListener('click', ()=> {
        heart.classList.toggle('red'); //togle indica que ponga o saque la clase... like de instragram
    })

    trash.addEventListener('click', ()=> {
        cont.removeChild(newComments); 
    })
    
    chck.addEventListener('click', () => {
        contenedorElemento.classList.toggle('strike-out');


    })




})// aqui termina el boton.addEventListener ('click', () => ...funciones varias...)