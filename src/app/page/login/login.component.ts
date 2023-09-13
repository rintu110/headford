import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser} from '@abacritt/angularx-social-login';
//import { CustomValidators } from 'src/app/shared/validations/custom-validators';

import { MustMatch } from 'src/app/_helpers/must-macth.validators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  registerForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  submitted = false;
  loggedIn: any;  
  
  user?: SocialUser;
  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
  ) {}


  ngOnInit() {
   
    this.initializeRegisterForm();
    // this.socialAuthService.authState.subscribe((user) => {
    //   this.socialUser = user;
    //   this.isLoggedin = user != null;
    //   console.log(this.socialUser);
    // });
  }

  initializeRegisterForm() {
     this.registerForm = this.formBuilder.group({
        firstName : ['',[Validators.required]],
        lastName : [ '', [Validators.required]],
        mobileNumber: ['', [Validators.required,Validators.pattern(/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/)]],
        email: ['', [Validators.required, Validators.email]],
        address: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]]
     });
  }

  onSubmitRegister(){
     this.submitted = true;

     if(this.registerForm.invalid) {
        return;
     }

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
     console.log('asdasd');
  }

  // convenience getter for easy access to form fields
  get f() { 
    return this.registerForm.controls; 
  }

  // gsub:any;
  // googleSignIn() {
  //   this.gsub = this.socialAuthService.authState.subscribe((user: any) => {      
  //     if(user != null){
  //       console.log(user);
  //       this.user = user;
  //       this.loggedIn = user != null;
  //       this.registerForm?.patchValue({
  //         UserName: this.user?.name,
  //         emailId: this.user?.email,
  //       });
  //       // this.socialLoginService(this.user.email);
  //     }      
  //   });
  // }

 

  // refreshToken(): void {
  //   this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  // }

 
}