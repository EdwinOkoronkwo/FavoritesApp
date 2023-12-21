import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonThumbnail,
  IonImg,
  IonLabel,
  IonMenu,
  IonItem,
  IonButton,
  IonButtons,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IBook } from '../interfaces/Ibook';
import { BookService } from '../services/book.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from '../components/book-item/book-item.component';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonThumbnail,
    IonImg,
    IonLabel,
    IonMenu,
    IonItem,
    IonButtons,
    IonButton,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    BookItemComponent,
  ],
})
export class Tab1Page implements OnInit {
  loadedBooks!: IBook[];

  constructor(private bookService: BookService) {
    addIcons({
      trash,
    });
  }

  ngOnInit(): void {
    this.loadedBooks = this.bookService.getBooks();
  }
  onEdit(bookId: number, slidingItem: IonItemSliding) {
    console.log('Editing item', bookId);
    slidingItem.close();
    // this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
  }
}
