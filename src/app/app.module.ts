import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RecaptchaV3Module,RECAPTCHA_V3_SITE_KEY} from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './page/layout/header/header.component';
import { TopmenuComponent } from './page/layout/topmenu/topmenu.component';
import { FooterComponent } from './page/layout/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ServiceComponent } from './page/service/service.component';
import { BlogComponent } from './page/blog/blog.component';
import { BlogDetailsComponent } from './page/blog-details/blog-details.component';
import { PriceComponent } from './page/price/price.component';
import { FeatureComponent } from './page/feature/feature.component';
import { TeamComponent } from './page/team/team.component';
import { TestimonialComponent } from './page/testimonial/testimonial.component';
import { QuoteComponent } from './page/quote/quote.component';
import { ContactComponent } from './page/contact/contact.component';
import { VendorComponent } from './page/vendor/vendor.component';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { LoginComponent } from './page/login/login.component';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopmenuComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    BlogComponent,
    BlogDetailsComponent,
    PriceComponent,
    FeatureComponent,
    TeamComponent,
    TestimonialComponent,
    QuoteComponent,
    ContactComponent,
    VendorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecaptchaV3Module,
    SocialLoginModule,
    HttpClientModule,
    RecaptchaV3Module,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '298517344649-5jol7lun0bpp3o8cvf4hs7gi7e63vmid.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
