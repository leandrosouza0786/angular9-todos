import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ofAuth : AngularFireAuth) { }

  ngOnInit(): void {
    this.ofAuth.onAuthStateChanged((data : any )=>{
      console.log("data", data.email)
    })
  }

  login(){
    this.ofAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
