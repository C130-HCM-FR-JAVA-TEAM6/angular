import { Injectable,OnInit} from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  constructor(private http:Http) { }
  ngOnInit() {

  }
  login(username:String, password:String){
    let url = "http://localhost:8080/login/"+username+"/"+password;
    return this.http.get(url).toPromise()
    .then(res => res.json())
    .then(resjson => resjson)
    .catch(err => console.log("error connect to server"));
  }
}
