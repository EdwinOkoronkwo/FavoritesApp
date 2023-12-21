import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import {
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonReorder,
  IonText,
  IonThumbnail,
} from '@ionic/angular/standalone';
import { ISong } from 'src/app/interfaces/Isong';

@Component({
  standalone: true,
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.scss'],
  imports: [
    CommonModule,
    IonThumbnail,
    IonIcon,
    IonImg,
    IonLabel,
    IonReorder,
    IonItem,
    IonText,
  ],
})
export class SongItemComponent implements OnInit {
  @Input() song!: ISong;
  constructor() {}

  ngOnInit() {}
}
