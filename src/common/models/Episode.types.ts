import { ICharacter } from "./Character.types";

export interface IEpisode {
  id: string;
  name: string;
  episode: string;
  characters?: ICharacter[];
}
