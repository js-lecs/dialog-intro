import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CONFIG } from '../config';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {
    constructor(private http: Http) { }

    getTodos() {
        return this.http.get(`${CONFIG.API_URL}/todos`).map((response: Response) => {
            return response.json();
        });
    }
}
