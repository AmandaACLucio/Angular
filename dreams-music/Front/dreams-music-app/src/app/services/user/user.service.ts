import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:string = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) { }

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'aplication/json'
    }
  }

  showUser(id): Observable<any>{
    return this.http.get(this.apiUrl + 'users/' + id);
  }

  listUsers(): Observable<any>{
    return this.http.get(this.apiUrl + 'users');
  }

  listUserPosts(id): Observable<any>{
    return this.http.get(this.apiUrl + 'users/'+id+'/posts');
  }

  listUserFriends(id): Observable<any>{
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.get(this.apiUrl + 'users/'+id+'/friends', this.httpHeaders);
  }


  updateUser(form, id): Observable<any>{
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.put(this.apiUrl + 'users/' + id,form, this.httpHeaders);
  }

  deleteUser(id): Observable<any>{
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.delete(this.apiUrl + 'users/' + id, this.httpHeaders);
  }

}
