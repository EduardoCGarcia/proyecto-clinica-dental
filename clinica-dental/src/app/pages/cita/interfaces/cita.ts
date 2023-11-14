export interface Cita {
    id_dentista: number;
    id_paciente: number;
    fecha: Date;
    hora: string;
    motivo?: string;
    nota?: string;
    rol_consulta?: 'cita' | 'urgencia';
}
