import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; //use to share data b/w components
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions, Response } from '@angular/http';
import { NotesResponse } from '../response/notesresponse';
import { CurrentUserResp } from '../response/currentuserresp';

/*It looks similar to component file but  but it uses the @Injectable() 
decorator, which means we can import it. into other components and access
 its properties and methods.*/

@Injectable()
export class UserService {

  /*model property for class userservice can accept any object */
  model: any = {};

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('Authorization')
    })
  };

  /*HttpClient is available as an injectable class, with methods 
  to perform HTTP requests. */
  constructor(private http: HttpClient) { 
    /*if(localStorage.getItem('Authorization'))
      this.httpOptions.headers = this.httpOptions.headers.append('Authorization', localStorage.getItem('Authorization'));*/
  }

  private URL = 'http://localhost:8080/ToDo-App/';

  /*A representation of any set of values over any amount of time.
   This is the most basic building block of RxJS*/
  public postService(url, model): Observable<any> {

    console.log(url, model);
    var urlpath = this.URL.concat(url);
    console.log(urlpath);
    return this.http.post<any>(urlpath, model, { observe: 'response' });
  }

  putService(url, model): Observable<any>{

    //console.log(url,model);
    var urlpath = this.URL.concat(url);
    console.log(urlpath);
    return this.http.put(urlpath, model, this.httpOptions);
  }

  getService(url : string ,model? : any):Observable<any>{
    
    let urlpath=this.URL.concat(url);
    return this.http.get<any>(urlpath,this.httpOptions);
  }

  deleteService(url,model):Observable<any>{

    var urlpath=this.URL.concat(url);
    console.log("Http option",this.httpOptions);
    return this.http.post<any>(urlpath,model,this.httpOptions);
  }

  isLoggedIn(): boolean {
    return false;
  }

  putServiceLabel(url){
    var urlpath=this.URL.concat(url);
    console.log(urlpath);
    return this.http.put(urlpath,this.httpOptions);
  }


  getUser(url):Observable<CurrentUserResp>{
    
    let urlpath=this.URL.concat(url);
    return this.http.get<CurrentUserResp>(urlpath,this.httpOptions);
  }
}
