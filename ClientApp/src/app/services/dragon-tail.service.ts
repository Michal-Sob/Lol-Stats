import { Injectable } from '@angular/core';
import { ChampionBasic } from "../../app/models/Assets/Champion/championBasic.model"
import champions from "../../assets/data/DragonTail/version/data/en_US/champion.json"

@Injectable({
  providedIn: 'root'
})
export class DragonTailService {

  constructor() { }

  championById(id) {

    for (let champion in champions.data)
      if (champions.data[champion].key == id) {
        let selectedChampion = Object.assign(new ChampionBasic(), champions.data[champion])

        return selectedChampion
      }
  }
}
