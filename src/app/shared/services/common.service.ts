import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Constant } from 'src/app/core/constants/constant';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

   private api_url = environment.api_url;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      // "Content-Type": "formData",
      // "skipInterCept": "true"
    }),
  };


}
