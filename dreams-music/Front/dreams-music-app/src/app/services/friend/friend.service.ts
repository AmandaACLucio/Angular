import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FriendService {

  apiUrl:string = 'http://localhost:8000/api/';
  
  constructor(public http: HttpClient) { }

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  createFriend(form, token): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " +token;
    return this.http.post(this.apiUrl + 'friends', form, this.httpHeaders);
  }

  showFriend(id): Observable<any>{
    return this.http.get(this.apiUrl + 'friends/' + id);
  }

  listFriend(): Observable<any>{
    return this.http.get(this.apiUrl + 'friends');
  }

  deleteFriend(id, token): Observable<any>{
    this.httpHeaders.headers['Authorization'] = "Bearer " +token;
    return this.http.delete(this.apiUrl + 'friends/'+ id, this.httpHeaders);
  }
}
