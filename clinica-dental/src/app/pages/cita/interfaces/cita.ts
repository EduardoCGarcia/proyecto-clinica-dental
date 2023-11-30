import { Dentista, Paciente, Usuario } from "../../auth/interfaces/usuario";

export interface Cita {
    id: number;
    Dentista: Dentista;
    Paciente: Paciente;
    fecha: Date;
    hora: string;
    motivo?: string;
    nota?: string;
    rol_consulta?: 'cita' | 'urgencia';
}
