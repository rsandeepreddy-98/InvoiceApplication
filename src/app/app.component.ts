import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InvoiceApplication'; 
  loginform=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    gender:new FormControl()
    
  })
    // loginuser(){
    //   console.log(this.loginform.value);
    // }
  
  get email(){
    return this.loginform.get('email')
  }

  get password(){
    return this.loginform.get('password')
  }
  get gender(){
    return this.loginform.get('gender');
  }

  
   
  submit(){
    alert('Details submitted')
   console.log(this.loginform.value);
  } 
  onreset(){
    this.loginform.reset;
  }
}
