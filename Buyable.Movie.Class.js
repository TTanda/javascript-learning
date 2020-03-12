import { Movie } from"./Movie.Class.js"; // Bring in our file.
export class BuyableMovie  extends Movie {
    constructor ( name, genre, year, price ) {
        this.name = name;
        this.genre = genre;
        this.year = year;
        this.price = price;
    }
    get getPrice () {
        return this.price;
    }

    set setPrice ( price ) {
        this.price = parseFloat( price );
    }
}