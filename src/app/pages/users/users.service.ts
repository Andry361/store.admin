import {Injectable} from '@angular/core';
import { Http }    from '@angular/http';

@Injectable()
export class UsersTableService {
 private usersUrl = '/api/User';

  constructor(private http: Http) { }

  getData(): Promise<any[]> {
   return this.http.get(this.usersUrl)
               .toPromise()
               .then(response => response.json() as any[]);
              //  .catch(this.handleError);
  }
}
