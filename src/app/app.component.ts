import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  template: '<router-outlet><router-outlet>'
})

export class AppComponent implements OnInit {
  constructor(private ofAuth : AngularFireAuth, private router : Router){}
    ngOnInit(): void{
      this.ofAuth.onAuthStateChanged(data =>{
        if(data){
          this.router.navigateByUrl('/')
        } else{
          this.router.navigateByUrl('/login')
        }
      })

      this.ofAuth.idToken.subscribe(token => console.log(token))
    }
}
