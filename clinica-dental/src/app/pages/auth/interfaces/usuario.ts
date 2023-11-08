export interface Usuario {
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    fechaNacimiento: Date;
    direccion: string;
    telefono: string;
    email: string;
    rol: 'admin' | 'dentista' | 'paciente'; // Definimos el tipo de rol como un string literal
    pass: string;
    cedula: string | null; // Permitimos valores nulos para cédula
}

export interface UsuarioLogIn {
    email: string;
    pass: string;
}