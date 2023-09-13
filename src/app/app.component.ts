import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private recaptchaV3Service: ReCaptchaV3Service) 
  { }

  title = 'template'; 
}
