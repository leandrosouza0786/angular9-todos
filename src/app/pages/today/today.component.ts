import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  public todos: any[] = null;

  constructor(private service: DataService, private ofAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.ofAuth.idToken.subscribe(token => {
      this.service.getTodayTodos(token).subscribe((data: any) => this.todos = data)
    });
  }

}
