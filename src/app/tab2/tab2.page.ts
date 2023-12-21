import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonAlert,
  IonThumbnail,
  IonImg,
  IonIcon,
  IonReorder,
  IonReorderGroup,
  IonItemSliding,
  IonGrid,
  IonRow,
  IonCol,
  ItemReorderEventDetail,
  IonItemOption,
  IonItemOptions,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { SongService } from '../services/song.service';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { IonButtons } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { funnelOutline, pizza, trash } from 'ionicons/icons';
import { ISong } from '../interfaces/Isong';
import { SongItemComponent } from '../components/song-item/song-item.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonAlert,
    IonItem,
    IonContent,
    IonThumbnail,
    IonImg,
    IonIcon,
    IonReorder,
    IonReorderGroup,
    IonItemSliding,
    IonGrid,
    IonRow,
    IonCol,
    IonItemOption,
    IonItemOptions,
    ScrollingModule,
    SongItemComponent,
  ],
})
export class Tab2Page {
  //loadedSongs: string[];
  loadedSongs: ISong[] = [];
  public isDisabled = true;

  constructor(private songService: SongService) {
    addIcons({
      funnelOutline,
      pizza,
      trash,
    });
    this.loadedSongs = this.songService.getSongs();
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  // handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
  //   // Before complete is called with the items they will remain in the
  //   // order before the drag
  //   console.log('Before complete', this.loadedSongs);

  //   // Finish the reorder and position the item in the DOM based on
  //   // where the gesture ended. Update the items variable to the
  //   // new order of items
  //   this.loadedSongs = ev.detail.complete(this.loadedSongs);

  //   // After complete is called the items will be in the new order
  //   console.log('After complete', this.loadedSongs);
  // }

  // trackItems(index: number, itemNumber: number) {
  //   return itemNumber;
  // }

  // onCancelSong(songId: number, slidingEl: IonItemSliding) {
  //   slidingEl.close();

  //   // cancel booking
  // }
}
