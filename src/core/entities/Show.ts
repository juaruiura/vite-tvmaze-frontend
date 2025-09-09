import type { Season } from "./Season";

export class Show {
  private id: string;
  private name: string;
  private premiereDate: Date;
  private rating: number;
  private imagePath: string;
  private seasons: Season[];

  constructor(
    id: string,
    name: string,
    premiereDate: Date,
    rating: number,
    imagePath: string,
    seasons: Season[],
  ) {
    this.id = id;
    this.name = name;
    this.premiereDate = premiereDate;
    this.rating = rating;
    this.imagePath = imagePath;
    this.seasons = seasons;
  }

  get Id(): string { return this.id; }
  get Name(): string { return this.name; }
  get PremiereDate(): Date { return this.premiereDate; }
  get Rating(): number { return this.rating; }
  get ImagePath(): string { return this.imagePath; }
  get Seasons(): Season[] { return this.seasons; }
}