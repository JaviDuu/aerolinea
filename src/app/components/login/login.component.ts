import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    usuario: '',
    contrasenia: ''
  });

  constructor(private formBuilder: FormBuilder) {

  }

  onSubmit(): void{


    localStorage.setItem('usr', JSON.stringify(this.loginForm.value.usuario));
    localStorage.setItem('pass', JSON.stringify(this.loginForm.value.contrasenia));

  }


}
