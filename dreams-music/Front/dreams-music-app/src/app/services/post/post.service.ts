import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  apiUrl:string = 'http://localhost:8000/api/';
  
  constructor(public http: HttpClient) { }

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  createPost(form): Observable<any>{
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.post(this.apiUrl + 'posts', form, this.httpHeaders);
  }

  showPost(id): Observable<any>{
    return this.http.get(this.apiUrl + 'posts/' + id);
  }

  listAllPosts(): Observable<any>{
    return this.http.get(this.apiUrl + 'posts');
  }

  listPostComments(id): Observable<any>{
    return this.http.get(this.apiUrl + 'post/'+id+'/comments');
  }

  updatePost(id, data): Observable<any>{
    //let atualizar = localStorage.getItem('userToken');
    //console.log(atualizar);
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.put(this.apiUrl + 'posts/' + id, data, this.httpHeaders);
  }

  deletePost(id): Observable<any>{
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.delete(this.apiUrl + 'posts/'+id, this.httpHeaders);
  }

}
