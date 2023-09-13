import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { BlogDetailsComponent } from './page/blog-details/blog-details.component';
import { BlogComponent } from './page/blog/blog.component';
import { ContactComponent } from './page/contact/contact.component';
import { FeatureComponent } from './page/feature/feature.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { QuoteComponent } from './page/quote/quote.component';
import { ServiceComponent } from './page/service/service.component';
import { TeamComponent } from './page/team/team.component';
import { TestimonialComponent } from './page/testimonial/testimonial.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-details', component: BlogDetailsComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'team', component: TeamComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
