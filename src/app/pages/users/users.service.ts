import {Injectable} from '@angular/core';
import { Http }    from '@angular/http';
import { Url }    from '../../app.service';

@Injectable()
export class UsersTableService {
 private usersUrl = '/api/User';

  constructor(private http: Http, private url:Url) { }

  getData(): Promise<any[]> {
   return this.http.get(this.url.get(this.usersUrl))
               .toPromise()
               .then(response => response.json() as any[]);
              //  .catch(this.handleError);
  }
}
