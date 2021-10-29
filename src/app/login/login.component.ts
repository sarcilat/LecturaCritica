import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  LoginForm: FormGroup;
  Token: string;
  loadingFlag: boolean;
  errorFlag: boolean;
  errorMessage: string;

  constructor(private router: Router, private route: ActivatedRoute, public fb: FormBuilder,) { //public fb: FormBuilder,
    this.loadingFlag = false;
    this.errorFlag = false;
    this.errorMessage = '';
    this.LoginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50), this.noWhitespaceValidator]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50), this.noWhitespaceValidator]],
    });
  }

  UserLogin(){
    const username: string = this.LoginForm.get('username').value;
    const password: string = this.LoginForm.get('password').value;
    
    // Activar el componente del Loading
    this.errorFlag = false;
    //this.loadingFlag = true;
    // Consumir el servicio de Login
    if (username == "miguelangelboto09@gmail.com" && password == "sonic2013") {
      this.redirigirLoginExitoso();
    }

    if (username == "nunez.davila.h.aleja@gamil.com" && password == "HANNAa2604") {
      this.redirigirLoginExitoso();
    }
    
    this.errorFlag = true;
  }

  redirigirLoginExitoso(){
    // Borrar la data del formulario
    this.LoginForm.reset();
    this.router.navigate(["dentro-prueba"]);
  }

  // Valida que el input no tenga espacios en blanco
  private noWhitespaceValidator(control: AbstractControl) {
    let haveWhitespace = (control.value === null) ? true : false;
    if (!haveWhitespace) {
      haveWhitespace = (control.value.indexOf(' ')  === -1) ? false : true;
    }
    const isValid = !haveWhitespace;
    return isValid ? null : { whitespace: true };
  }

  registro(){
    this.router.navigate(["registrar"]);
  }

  restablecerPassword() {
    this.router.navigate(["reset-password"]);
  }

}
