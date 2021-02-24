import { ChampionBasic } from "../../app/models/Assets/Champion/championBasic.model"
import champions from "../assets/data/DragonTail/version/data/en_US/champion.json"

export class DragonTail {

  constructor() { }

  championById(id) {
    
    console.log(champions.Data)

    for (let i in champions.Data)
      console.log(i)

    console.log("heh")

    for (let i of champions.Data)
      console.log(i)

    console.log("end")
  }
}
