import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import {
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonThumbnail,
} from '@ionic/angular/standalone';
import { IBook } from 'src/app/interfaces/Ibook';

@Component({
  standalone: true,
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  imports: [CommonModule, IonThumbnail, IonIcon, IonImg, IonLabel, IonItem],
})
export class BookItemComponent implements OnInit {
  @Input() book!: IBook;
  constructor() {}

  ngOnInit() {}
}
