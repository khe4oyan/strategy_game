// interface
import IPerson from "../../interfaces/Iperson";

// modules
import modulesData from '../../../data/modulesData';

// img
import iconImg from "../../../assets/persons/jellyfish.png";

class JellyfishPerson extends IPerson {
  constructor(map_ref, i, j) {
    super("Jellyfish", [], iconImg, 80, map_ref, i, j);

    this.modules = [
      new modulesData.MoveModule(this, 2),
      new modulesData.AttackModule(this, 75, 3),
    ];
  }
}

export default JellyfishPerson;
