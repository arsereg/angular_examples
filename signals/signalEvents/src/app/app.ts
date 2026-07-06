import {Component, signal, computed, linkedSignal, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  userStatus = signal<'online' | 'away' | 'offline'>('offline');

  notificationsEnabled = linkedSignal(() => this.userStatus() === 'online');



  statusMessage = computed(() => {
    
    const status = this.userStatus();
    switch(status){
      case 'online':
        return 'Available for meetings and messages';
      case 'away':
        return 'Temporarily away, will respond soon';
      case 'offline':
        return 'Not available, check back later';
      default:
        return 'Status unknown';
    }
  });

  isWithinWorkingHours = computed(() => {
    const now = new Date();
    const hour = now.getHours();
    const isWeekday = now.getDay() > 0 && now.getDay() < 6;
    return isWeekday && hour >= 7 && hour < 22 && this.userStatus() !== 'offline';
  });

  goOnline(){
    this.userStatus.set('online');
  }

  goOffline(){
    this.userStatus.set('offline');
  }

  goAway(){
    this.userStatus.set('away');
  }

  toggleStatus(){
    this.userStatus.update((current) => (current === 'online' ? 'offline' : 'online'));
  }
  


  toggleNotifications(){
    this.notificationsEnabled.set(!this.notificationsEnabled())
  }



}
