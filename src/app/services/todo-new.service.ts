import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CONFIG } from '../config';

@Injectable()
export class TodoNewService {


    constructor(private http: Http) {

    }


    postTodo(TodoObj) {
        return this.http.post(`${CONFIG.API_URL}/todos`, TodoObj)
            .map((response: Response) => response.json());
    }

    getTodos() {
        return this.http.get(`${CONFIG.API_URL}/todos`)
            .map((response: Response) => response.json());
    }

    deleteTodo(id) {
        return this.http.delete(`${CONFIG.API_URL}/todos?id=${id}`)
            .map((response: Response) => response.json());
    }

    editTodo(todoObj) {
        let id = todoObj._id;

        delete todoObj._id;
        delete todoObj._v;

        return this.http.put(`${CONFIG.API_URL}/todos?id=${id}`, todoObj)
            .map((response: Response) => response.json());
    }
}