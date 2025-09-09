export class Episode {
  private id: string;
  private name: string;
  private airedOn: Date;
  private summary: string;

  constructor(
    id: string,
    name: string,
    airedOn: Date,
    summary: string,
  ) {
    this.id = id;
    this.name = name;
    this.airedOn = airedOn;
    this.summary = summary;
  }

  get Id(): string { return this.id; }
  get Name(): string { return this.name; }
  get AiredOn(): Date { return this.airedOn; }
  get Summary(): string { return this.summary; }
}