import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
	private username:string;
	private client_id='fb72555c59b567ca968a';
	private client_secret = 'f2fdba1b8c6a418efe0ce3129d5f187feca1fdb1';

	constructor(private _http: HttpClient){
		console.log('Github service ready...');
		// this.username = 'sandeep1201';
	}
	getUser(username){
		return this._http.get('http://api.github.com/users/'+ username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
	}
	getRepos(username){
		return this._http.get('http://api.github.com/users/'+username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)

	}
	updateUser(username:string){
		this.username = username;
	}
}
