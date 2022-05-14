export class  HTTP_ERROR_CODES {
    static NO_INTERNET = 'Lo sentimos, no se detecta conexión a internet';
    static REQUEST_FAILED = 'Error inesperado en la petición';
    static CODE_400 = 'El servidor no puede procesar la petición por un error de sintaxis del cliente.';
    static CODE_403 = 'Acceso denegado.';
    static CODE_404 = 'No se encuentra la petición.';
    static CODE_405 = 'Se ha hecho una petición con un recurso no soportado por ese recurso (GET, POST, PUT, DELETE).';
    static CODE_500 = 'Error inesperado en el servidor.';
    static CODE_501 = 'El servidor o no reconoce el método del la petición o carece de la capacidad para completarlo.';
    static CODE_503 = 'El servidor no esta disponible.';
    static CODE_504 = 'El tiempo de espera para la petición se ha excedido';
};