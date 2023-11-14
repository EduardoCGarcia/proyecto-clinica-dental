import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario, UsuarioSignUp } from '../interfaces/usuario';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  usuario: UsuarioSignUp = {
    nombre: "", // Nuevo campo: nombre
    primerApellido: "", // Nuevo campo: primer apellido
    segundoApellido: "",
    email:"", // Nuevo campo: segundo apellido
    fechaNacimiento: "02/03/2000", // Nuevo campo: fecha de nacimiento
    direccion: "", // Nuevo campo: dirección
    telefono: "", // Nuevo campo: teléfono
    rol: "", // Nuevo campo: rol
    cedula: "", // Nuevo campo: cédula
    pass: "",
  }

  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authSvc: AuthService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nombre: this.usuario.nombre, // Nuevo campo: nombre
      primerApellido: this.usuario.primerApellido, // Nuevo campo: primer apellido
      segundoApellido: this.usuario.segundoApellido,
      email: this.usuario.email, // Nuevo campo: segundo apellido
      fechaNacimiento: this.usuario.fechaNacimiento, // Nuevo campo: fecha de nacimiento
      direccion: this.usuario.direccion, // Nuevo campo: dirección
      telefono: this.usuario.telefono, // Nuevo campo: teléfono
      rol: this.usuario.rol, // Nuevo campo: rol
      cedula: this.usuario.cedula, // Nuevo campo: cédula
      pass: this.usuario.pass
    })
  }

  onSignUp() {
    if (this.userForm.invalid) {
      return;
    }
    const formValue = this.userForm.value;
    console.log(formValue);
    this.authSvc.signup(formValue).subscribe(res => {
      if (res) {
        console.log(res);
      }
    })
  }
}