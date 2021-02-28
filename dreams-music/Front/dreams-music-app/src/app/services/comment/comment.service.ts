import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  apiUrl:string = 'http://localhost:8000/api/';
  
  constructor(public http: HttpClient) { }

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  createComment(form, token): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " +token;
    return this.http.post(this.apiUrl + 'comments', form, this.httpHeaders);
  }

  showComment(id): Observable<any>{
    return this.http.get(this.apiUrl + 'comments/' + id);
  }

  listComments(): Observable<any>{
    return this.http.get(this.apiUrl + 'comments');
  }

  deleteComment(id): Observable<any>{
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.delete(this.apiUrl + 'comments/'+ id, this.httpHeaders);
  }

}
