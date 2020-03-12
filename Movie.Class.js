export class Movie {
    constructor(name, genre, year) {
        this.name = name;
        this.genre = genre;
        this.year = year;
    }
    get name() { // How we retrieve the property. A GETTER
        return this.name;
    }
    set name( newName ) { // How we store a new property value. A SETTER
        if (typeof newName === "string") {
            this.name = name;
        } else {
            this.name = name.toString();
        }
        return this.name;
    }
    showPoster() { // This is a method! We can name them as we'd like.
        const info = `
             MOVIE INFO 
            ===========
            Name: ${this.name}
            Genre: ${this.genre}
            Year: ${this.year}
      `;
        return info;
    }
}