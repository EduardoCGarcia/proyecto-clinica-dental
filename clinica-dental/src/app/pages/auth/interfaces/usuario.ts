export interface Usuario {
    token: string;
    user: {
        id:number;
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

export interface Paciente{
    id: number;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    telefono: string;
    email: string;
    notas: string;
}

export interface Dentista{
    id: number;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    telefono: string;
    email: string;
    notas: string;
    cedula: string|null;
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