import { Injectable } from '@angular/core';
import { ISong } from '../interfaces/Isong';
// import { ISong } from '../interfaces/Isong';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  // private _songs = [
  //   'November Rain',
  //   'Fear of the Dark',
  //   'Objects in the rear view mirror may appear closer than they are',
  //   'Dry Country',
  //   'Stan',
  //   "I will do anything for love, but I won't do that",
  //   'Dirty Diana',
  //   'Poison',
  //   'Whiter Shade of Pale',
  //   'Enter Sandman',
  // ];

  private _songs: ISong[] = [
    {
      id: 1,
      title: 'November Rain',
      genre: 'Rock',
      group_name: 'GunsNRoses',

      imageUrl:
        'https://townsquare.media/site/366/files/2022/06/attachment-guns-n-roses-november-rain.jpg',
    },
    {
      id: 2,
      title: 'Fear of the Dark',
      genre: 'Rock',
      group_name: 'Iron Maiden',

      imageUrl:
        'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk0OTY5NzcwMzU1ODYwNjQy/iron-maiden-fear-of-the-dark-album-review.jpg',
    },
    {
      id: 3,
      title: 'Objects in the rear view mirror may appear closer than they are',
      genre: 'Rock',
      group_name: 'MeatLoaf',

      imageUrl:
        'https://resources.tidal.com/images/0e4b591b/ae90/4e4c/9099/cb07cfaeb442/1280x720.jpg',
    },
    {
      id: 4,
      title: 'Dry Country',
      genre: 'Rock',
      group_name: 'Bon Jovi',

      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/7/78/BonJoviDryCountycover.jpg',
    },
    {
      id: 5,
      title: 'Stan',
      genre: 'Rap',
      group_name: 'Eminem',

      imageUrl:
        'https://ew.com/thmb/5hGdvMlZVAVfaBXZNFeyzeFIVn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/stan-eminem-split-2000-f6ba090d41f84469ac38c04e50c1539f.jpg',
    },
    {
      id: 6,
      title: "I will do anything for love, but I won't do that",
      genre: 'Rock',
      group_name: 'MeatLoaf',

      imageUrl:
        'https://www.billboard.com/wp-content/uploads/2022/01/Meat-Loaf-Id-Do-Anything-For-Love-But-I-Wont-Do-That-screenshot-2022-billboard-1548.jpg',
    },
    {
      id: 7,
      title: 'Dirty Diana',
      genre: 'Rock',
      group_name: 'Michael Jackson',

      imageUrl:
        'https://live.staticflickr.com/3409/3664485469_ed9f99e2ec_z.jpg',
    },
    {
      id: 8,
      title: 'Poison',
      genre: 'Pop',
      group_name: 'Rita Ora',

      imageUrl: 'https://i.ytimg.com/vi/Q1fGOG3XXIQ/maxresdefault.jpg',
    },
    {
      id: 9,
      title: 'Whiter Shade of Pale',
      genre: 'Rock',
      group_name: 'Procol Halum',

      imageUrl: 'https://ichef.bbci.co.uk/images/ic/1200x675/p0176tg4.jpg',
    },
    {
      id: 10,
      title: 'Enter Sandman',
      genre: 'Rock',
      group_name: 'Metallica',

      imageUrl: 'https://i.ytimg.com/vi/PJpFjI5hqM0/hqdefault.jpg',
    },
  ];

  constructor() {}

  getSongs() {
    return [...this._songs];
  }

  getSong(id: number) {
    return this._songs.find((song) => song.id === id);
  }

  getSongTitle() {
    return this.getSongs().map((x) => x.title);
  }
}

// getSortedSongs(): ISong[] {
//   const obj = this.getSongs();
//   return obj.sort((a, b) => b.rating - a.rating);
// }
