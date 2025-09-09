import type { Episode } from "./Episode";

export class Season {
  private id: string;
  private seasonNumber: number;
  private episodeCount: number;
  private premiereDate: Date;
  private imagePath: string;
  private episodes: Episode[];

  constructor(
    id: string,
    seasonNumber: number,
    episodeCount: number,
    premiereDate: Date,
    imagePath: string,
    episodes: Episode[],
  ) {
    this.id = id;
    this.seasonNumber = seasonNumber;
    this.episodeCount = episodeCount;
    this.premiereDate = premiereDate;
    this.imagePath = imagePath;
    this.episodes = episodes;
  }

  get Id(): string { return this.id; }
  get SeasonNumber(): number { return this.seasonNumber; }
  get EpisodeCount(): number { return this.episodeCount; }
  get PremiereDate(): Date { return this.premiereDate; }
  get ImagePath(): string { return this.imagePath; }
  get Episodes(): Episode[] { return this.episodes; }
}