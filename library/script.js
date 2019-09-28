class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  set isCheckedOut(checkedOut) {
    this._isCheckedOut = checkedOut;
  }
  get ratings() {
    return this._ratings;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    const ratings = [...this._ratings];
    return (ratings.reduce((a,e) => a + e, 0)/ratings.length).toFixed(2);
  }

  addRating(rating) {
    if (rating < 1 || 5 < rating) {
      console.log('Rating should be between 1 to 5');
      return;
    }
	  this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
}

class Movie extends Media {
  constructor(director, title, runTime, movieCast, songTitles) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
    this._songTitles = songTitles;
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  get movieCast() {
    return this._movieCast;
  }
  get songTitles() {
    return this._songTitles;
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
  shuffle() {
    let songs = [...this._songs];
    for (let i = 0; i < songs.length; i++) {
      const j = Math.floor(Math.random() * i);
      const temp = songs[i];
      songs[i] = songs[j];
      songs[j] = temp;
    }
    return songs;
  }
}

class Catalog {
  constructor(books, movies, cds) {
    this._items = [...books, ...movies, ...cds];
  }

  get items() {
    return this._items;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116, ['Ann', 'John'], ['fly', 'love']);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const cdplay = new CD('Christina', 'Beautiful', ['wonderful day', 'jump', 'fly high']);
cdplay.addRating(4);
cdplay.addRating(3);
console.log(cdplay.artist);
console.log(cdplay.songs);
console.log(cdplay.shuffle());

const catalog = new Catalog([historyOfEverything], [speed], [cdplay]);
console.log(catalog.items);
