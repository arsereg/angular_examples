import { Component, signal, computed, resource, ChangeDetectionStrategy } from '@angular/core';
import {  } from '@angular/router';
import { getUserData } from './api/user-api'; 

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  userId = signal(1);


  userResource = resource({
    params: () => ({id: this.userId()}),
    loader: (params) => getUserData(params.params.id)
  });

  isLoading = computed(() => this.userResource.status() === 'loading');
  hasError = computed(() => this.userResource.status() === 'error');


  loadUser(id:number){
    this.userId.set(id);
  }

  reloadUser(){
    this.userResource.reload();
  }

}
