export interface Usuario {
    token: string;
    user: {
        nombre: string;
        primerApellido: string;
        segundoApellido: string;
        fechaNacimiento: Date;
        direccion: string;
        telefono: string;
        email: string;
        rol: 'admin' | 'dentista' | 'paciente'; // Definimos el tipo de rol como un string literal
        cedula: string | null; // Permitimos valores nulos para cédula
    }
}

export interface UsuarioLogIn {
    email: string;
    pass: string;
}

export interface UsuarioSignUp {
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    email: string;
    fechaNacimiento: string;
    direccion: string;
    telefono: string;
    rol: string;
    cedula: string;
    pass: string;
}