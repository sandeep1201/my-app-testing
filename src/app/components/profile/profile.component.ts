import { Component, OnInit} from '@angular/core';
import { GithubService } from '../../service/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit{
  username: string;
  users: any;
  constructor(private _githubServe: GithubService) { }

  ngOnInit () {
    this.username = 'sandeep1201';
    this._githubServe.getUser(this.username).subscribe(data => {
      console.log(data);
      this.users = data;
    })
  }

}
