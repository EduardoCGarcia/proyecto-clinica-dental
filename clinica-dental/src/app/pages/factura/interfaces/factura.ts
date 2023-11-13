export interface Factura {
    id: number;
    id_paciente: number;
    fecha_emision: Date;
    monto_total: number;
    saldo_deudor: number;
    estado: boolean;
}
