import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  public user : any = {
    name: "",
    picture: ""
  };
  constructor(private ofAuth : AngularFireAuth) { }

  ngOnInit(): void {
    this.ofAuth.user.subscribe( e => {
      this.user.name = e.displayName,
      this.user.picture = e.photoURL
    })
  }

  logout(){
    this.ofAuth.signOut();
  }

}
