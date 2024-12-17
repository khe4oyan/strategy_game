// interface
import IPerson from "../../interfaces/Iperson";

// img
import iconImg from "../../../assets/persons/jellyfish.png";

// modules
import MoveModule from '../modules/MoveModule';
import AttackModule from '../modules/AttackModule';

class JellyfishPerson extends IPerson {
  constructor(map_ref, i, j) {
    super("Jellyfish", [], iconImg, 80, map_ref, i, j);

    this.modules = [
      new MoveModule(this, 2),
      new AttackModule(this, 75, 3),
    ];
  }
}

export default JellyfishPerson;
