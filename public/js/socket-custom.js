    var socket = io();

    socket.on('connect', function() {
        console.log('Conectado al servidor');
    });

    // ON => escuchar eventos
    socket.on('disconnect', function() {
        console.log('Perdimons conexion con el servidor');
    });

    //EMIT => enviar informacion
    socket.emit('enviarMensaje', {
        usuario: 'Dario',
        mensaje: 'Hola Mundo'
    }, function(resp) {
        console.log('respuesta server:', resp);
        // console.log('Se disparo el callback');
    });

    //Escuchar informacion
    socket.on('enviarMensaje', function(mensaje) {
        console.log('Servidor:', mensaje);
    });