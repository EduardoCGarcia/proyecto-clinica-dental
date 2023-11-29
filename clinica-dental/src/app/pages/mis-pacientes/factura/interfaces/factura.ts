import { Dentista, Paciente } from '../../../auth/interfaces/usuario';
export interface Factura {
    id: number;
    id_paciente: number;
    fecha_emision: Date;
    monto_total: number;
    saldo_deudor: number;
    estado: boolean;
    id_dentista: number;
    id_tratamiento:number;
    observaciones:string;
    monto_pago:number;
    nota:string;
    Dentista: Dentista;
    Paciente: Paciente;
}

export interface FacturaCreate {
    id: number;
    id_paciente: number;
    fecha_emision: Date;
    monto_total: number;
    saldo_deudor: number;
    estado: boolean;
    id_dentista: number;
}
