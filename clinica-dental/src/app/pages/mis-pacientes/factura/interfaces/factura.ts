import { Dentista, Paciente } from '../../../auth/interfaces/usuario';
export interface Factura {
    id: number;
    id_paciente: number;
    fecha_emision: Date;
    monto_total: number;
    saldo_deudor: number;
    estado: boolean;
    id_dentista: number;
    Dentista: Dentista,
    Paciente: Paciente
}
