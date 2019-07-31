import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AttendeeApiService {

  constructor(private http: Http) {
    
  }

  getAgenda() : Observable<Response> {
    return this.http.get('/assets/data/agenda.json').pipe(
                    map((response: Response) => <Response>response.json()))
  }

  getSpeakers() : Observable<Response> {
    return this.http.get('/assets/data/speakers.json')
                    .pipe(map((response: Response) => <Response>response.json()))
  }

  getDelegates() : Observable<Response> {
    return this.http.get('/assets/data/delegates.json')
                    .pipe(map((response: Response) => <Response>response.json()))
  }

  getMessages() : Observable<Response> {
    return this.http.get('/assets/data/messages.json')
                    .pipe(map((response: Response) => <Response>response.json()))
  }

  getActivities() : Observable<Response> {
    return this.http.get('/assets/data/activities.json')
                    .pipe(map((response: Response) => <Response>response.json()))
  }


  getInfo() : Observable<string> {
    return this.http.get('/assets/data/info.html')
                    .pipe(map((response: Response) => response.text()))
  }
}
