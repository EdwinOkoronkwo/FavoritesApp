import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonSpinner,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bookOutline, musicalNotesOutline, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonSpinner,
    CommonModule,
  ],
})
export class TabsPage {
  isLoading = false;
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private router: Router) {
    addIcons({ bookOutline, musicalNotesOutline, square });
  }

  onChangeTab(id: number) {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigateByUrl(`/tabs/tab${id}`);
    }, 2000);
  }
}
