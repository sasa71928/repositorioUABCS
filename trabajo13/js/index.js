function cambiarFondo(color) {
    switch(color) {
        case 'rojo':
            document.body.style.backgroundColor = 'red';
            break;
        case 'azul':
            document.body.style.backgroundColor = 'blue';
            break;
        case 'verde':
            document.body.style.backgroundColor = 'green';
            break;
        default:
            document.body.style.backgroundColor = '';
    }
}
