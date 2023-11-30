import { Paciente, Usuario } from "../../../auth/interfaces/usuario";
import { Tratamiento } from "../../../tratamiento/interfaces/tratamiento";

export interface HistorialClinico {
    id: number;
    id_paciente: number;
    id_tratamiento: number;
    fecha: Date;
    nota: string;
    paciente?: Usuario; 
    tratamiento?: Tratamiento;
    Paciente:Paciente;
    traatamiento:Tratamiento
  }