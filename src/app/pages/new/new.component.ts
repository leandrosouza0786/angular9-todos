import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder, private service: DataService, private router: Router, private ofAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])],
      date: [new Date().toJSON().substring(0, 10), Validators.required]
    })
  }

  submit() {
    this.ofAuth.idToken.subscribe(token => {
      console.log(token)
      this.service.postTodo(this.form.value, token).subscribe(res => {
        this.router.navigateByUrl("/");
      })
    })
  }
}
