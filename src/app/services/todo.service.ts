import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CONFIG } from '../config';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
    constructor(private http: Http) { }

    getTodos() {
        return this.http.get(`${CONFIG.API_URL}/todos`).map((response: Response) => {
            return response.json();
        });
    }
}
