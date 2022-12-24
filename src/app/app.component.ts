import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { throttle } from 'rxjs';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  public todos: Todo[] = [];
  public title: string = "Boxer is good";
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {  
    this.todos.push(new Todo(1,"Brincar com o Oliver",false)); 
    this.todos.push(new Todo(2,"Alimentar o Oliver",false)); 
    this.todos.push(new Todo(3,"Cultuar o Oliver",true)); 
  }

  ngOnInit(): void{
    // Necessario criar um formBuilder
    this.form = this.fb.group(({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    }));


  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1){
      this.todos.splice(index,1);
    }
  }

  markAsDone(todo: Todo){
    todo.done = true;
  }
   
  markAsUnDone(todo: Todo){
    todo.done = false;
  }

}
