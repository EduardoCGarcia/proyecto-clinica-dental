import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario, UsuarioLogIn } from '../interfaces/usuario';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{

  usuario:UsuarioLogIn = {
    email: "",
    pass: ""
  }

  userForm !: FormGroup;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: this.usuario.email,
      pass: this.usuario.pass,
    })
    
  }

  onSubmit(){
    console.log(this.userForm.value);
    
  }

}
