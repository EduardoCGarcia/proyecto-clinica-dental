export interface Pago {
    id: number;
    id_factura: number;
    fecha: Date;
    monto: number;
    forma_de_pago: 'contado' | 'credito';
    observaciones: string;
}
