
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
    header: new HttpHeaders( {'content-type': 'application/json'} )
};

export class HomePageService {

    private apiUrl = '/api/homepageinfo';

    constructor( private http: HttpClient ) {

    }

    public getContent(): Observable<Object> {
        return this.http.get<Object>(this.apiUrl)
        .pipe ( tap(data => data ), catchError( this.handleError<Object>('Error')) );
    }

    private handleError<T> ( operation = 'operation', result?: T ) {
        return ( error: any ): Observable<T> => {

            console.log(error);

            console.log('${operation} failed: ${erro.message}' );

            return of( result as T );
        };
    }
}
