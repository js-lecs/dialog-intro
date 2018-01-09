import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { TodoNewService } from '../../../services/todo-new.service';





@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup;
  genderList: Array<String> = ['MALE', 'FEMALE'];

  checkBoxList: Array<String> = ['CheckBox-1', 'CheckBox-2'];


  const_name = 'abc';
  constructor(private fb: FormBuilder,
     private todoNewService:TodoNewService) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.todoForm = this.fb.group({
      'userDetails': this.fb.group({
        'username': ['', [Validators.required, Validators.maxLength(10)]],
        'email': ['', [Validators.required, Validators.email]],
        'gender': [this.genderList[0]],
        'checkboxes': this.fb.array([
          [false],
          [false]
        ])

      }),
      'title': ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[0-9]{10}/)]],
      'description': ['', [], [this.asyncValidation.bind(this)]],
      'subTasks': this.fb.array([
        ['', [Validators.minLength(5)]]
      ])
    });
  }

  addNewSubTask() {
    (<FormArray>this.todoForm.controls['subTasks']).insert(0, new FormControl('', [Validators.minLength(5)]));

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
      values.userDetails.checkboxes = this.resolveCheckBoxValuesToArray(
        values.userDetails.checkboxes, this.checkBoxList);
      console.log(values);

      // send request to server 
      this.todoNewService.postTodo(this.todoForm.value)
      .subscribe((data)=>{
        console.log('post success',data);
      },(err)=>{
        console.log('post error', err);
      })
    } else {
      alert('invalid');
    }
    console.log(this.todoForm);
  }


  resolveCheckBoxValuesToArray(checkBoxArray, labelArray) {
    const arr = [];
    checkBoxArray.map((value, key) => {
      if (value) {
        arr.push(labelArray[key]);
      }
    });
    return arr;
  }
}
