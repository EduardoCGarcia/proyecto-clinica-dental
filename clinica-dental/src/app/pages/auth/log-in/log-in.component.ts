import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario, UsuarioLogIn } from '../interfaces/usuario';
import { AuthService } from '../services/auth.service';


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

  constructor(private formBuilder:FormBuilder, private authSvc:AuthService){}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: this.usuario.email,
      pass: this.usuario.pass,
    })
    
  }

  onLogin(){
    if (this.userForm.invalid) {
      return;
    }
    const formValue = this.userForm.value;
    
    this.authSvc.login(formValue).subscribe(res => {
      if (res) {
        console.log(res.user.fechaNacimiento);
        
      }
    })
  }

}
