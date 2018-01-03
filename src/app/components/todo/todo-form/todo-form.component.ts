import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms/src/model';




@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup;

  const_name = 'abc';
  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.todoForm = this.fb.group({
      'title': ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[0-9]{10}/)]],
      'email': ['', [Validators.required, Validators.email]],
      'description': ['', [], [this.asyncValidation.bind(this)]]
    });
  }

  customValidation(c: FormControl) {
    if (c.value === this.const_name) {
      return {
        notABC: {
          message: 'not abc triggered'
        }
      };
    }
    return null;
  }

  asyncValidation(c: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (c.value === this.const_name) {
          resolve({
            notABCAsybc: {
              message: 'not abc Async triggered'
            }
          });
        }
        resolve(null);

      }, 5000);
    });
  }

  submit() {
    if (this.todoForm.valid) {
      const values = this.todoForm.value;
      console.log(values);
    } else {
      alert('invalid');
    }
    console.log(this.todoForm);
  }
}
