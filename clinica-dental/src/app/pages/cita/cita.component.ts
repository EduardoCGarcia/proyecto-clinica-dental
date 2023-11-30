import { Component, OnInit } from '@angular/core';
import { Cita } from './interfaces/cita';
import { CitaService } from './services/cita.service';
import { Message, MessageService } from 'primeng/api';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Paciente, Usuario } from '../auth/interfaces/usuario';
import { AuthService } from '../auth/services/auth.service';
import * as moment from 'moment/moment.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css'],
  providers: [MessageService]
})
export class CitaComponent implements OnInit {
  cita: Cita = {
    id: 0,
    Dentista: {
      id: 0,
      nombre: "",
      primerApellido: "",
      segundoApellido: "",
      telefono: "",
      email: "",
      notas: "",
      cedula: ""
    },
    Paciente: {
      id: 0,
      nombre: "",
      primerApellido: "",
      segundoApellido: "",
      telefono: "",
      email: "",
      notas: "",
      imagen: ""
    },
    fecha: new Date(),
    hora: "",
    motivo: "",
    nota: "",
    rol_consulta: "cita"
  }
  citas: Cita[] = [];
  visible: boolean = false;
  selectedCita!: Cita;
  public options: any;
  pacientes?: Paciente[];
  selectedPaciente: Paciente | undefined;
  value: string = ""
  user!: Usuario | null;
  citaForm !: FormGroup;
  lista: string[] = ["9:00:00", "10:00:00", "11:00:00",
    "12:00:00", "13:00:00", "14:00:00", "15:00:00",
    "16:00:00", "17:00:00", "18:00:00", "19:00:00"];
  
  listaValidaHora: boolean[] = [false,false,false,false,false,false,false,false,false,false,false];

  rol: string[] = ['cita', 'urgencia']

  cols = [
    { field: 'fecha', header: 'Fecha' },
    { field: 'hora', header: 'Hora' },
    { field: 'motivo', header: 'Motivo' },
    { field: 'rol_consulta', header: 'Tipo' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private citaSvc: CitaService,
    private messageService: MessageService,
    private userSvc: UsuarioService,
    private authSvc: AuthService
  ) {

    this.loadAppointments();

  }



  onPatientSelectionChange(): void {
    const pacienteSelect = parseInt(this.citaForm.value.selectedPatient, 10)
    if (pacienteSelect) {
      this.userSvc.getPaciente(pacienteSelect).subscribe((res) => {
        console.log(res);
        this.citaForm.patchValue({
          email: res.email || '',
          telefono: res.telefono || '',
          id_paciente: (pacienteSelect)
        });
      })
    }
  }



  ngOnInit(): void {

    this.authSvc.user$.subscribe((usuario: Usuario | null) => {
      this.user = usuario;
    })
    this.pacientes = [];
    this.loadPacientes();
    this.citaForm = this.formBuilder.group({
      selectedPatient: [null, Validators.required],
      email: [''],
      telefono: [''],
      id_paciente: this.cita.Paciente.id,
      fecha: this.cita.fecha,
      id_dentista: this.user?.user.id,
      hora: this.cita.hora,
      motivo: this.cita.motivo,
      nota: this.cita.nota,
      rol_consulta: this.cita.nota
    })

  }

  loadPacientes() {
    this.userSvc.getPacientes().subscribe(
      (data) => {
        this.pacientes = data;
      }
    );
  }


  loadAppointments(): void {
    this.citaSvc.getAppointments().subscribe(
      (data) => {
        this.citas = data;
      }
    );
  }
  onCreateCita() {
    const data = this.citaForm.value
    console.log(data);

    this.citaSvc.createCita(data).subscribe(res => {
      if (res) {
        console.log(res);
      }
    })
  }

  addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }
  onSelectCita(cita: Cita): void {
    this.selectedCita = { ...cita };
  }

  obtenerFacturasPorIdPaciente(): void {
    this.userSvc.getPacientes().subscribe(data => {
      this.pacientes = data
    })
  }

  onDeleteCita(id: number): void {
    this.citaSvc.deleteCita(id).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Cita eliminada correctamente',
        });
        this.loadAppointments();
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al eliminar la cita',
        });
      }
    );
  }

  validaFecha() {
    this.lista =["9:00:00", "10:00:00", "11:00:00",
          "12:00:00", "13:00:00", "14:00:00", "15:00:00",
          "16:00:00", "17:00:00", "18:00:00", "19:00:00"];
    this.listaValidaHora= [false,false,false,false,false,false,false,false,false,false,false];
    let dia, mes: string;
    if (parseInt((this.citaForm.value.fecha.getDate())) < 10) {
      dia = "0" + this.citaForm.value.fecha.getDate()
    } else {
      dia = this.citaForm.value.fecha.getDate()
    }

    if (parseInt((this.citaForm.value.fecha.getMonth())) < 10) {
      mes = "0" + parseInt(this.citaForm.value.fecha.getMonth() + 1).toString()
    } else {
      mes = parseInt(this.citaForm.value.fecha.getMonth() + 1).toString()
    }

    const day = this.citaForm.value.fecha.getFullYear() + "-" + mes + "-" + dia
    console.log(day);
    this.citaSvc.getAppointmentsByFecha(day, this.user?.user.id).subscribe(
      (data) => {
        if (data.length != 0){
          console.log(data)
          data.forEach(element => {
            for (let index = 0; index < this.lista.length; index++) {
              if (element.hora == this.lista[index]) {
                this.listaValidaHora[index]= true;
              }
            }
          });
          this.colocaNuevasHoras();
        }else{
          this.listaValidaHora= [false,false,false,false,false,false,false,false,false,false,false];
          this.lista =["9:00:00", "10:00:00", "11:00:00",
          "12:00:00", "13:00:00", "14:00:00", "15:00:00",
          "16:00:00", "17:00:00", "18:00:00", "19:00:00"];
          this.colocaNuevasHoras();
        }
      }
    );
  }

 colocaNuevasHoras(){
  var lista: string[]=[]
  for (let index = 0; index < this.lista.length; index++) {
    if (this.listaValidaHora[index] == false) {
      console.log(this.listaValidaHora[index]);
      lista.push(this.lista[index])
    }
  }
  this.lista = lista;
 }
  

}
