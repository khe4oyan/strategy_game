// interface
import IPerson from "../../interfaces/Iperson";

// modules
import modulesData from '../../../data/modulesData';

// img
import iconImg from '../../../assets/persons/monequin.png';

class MonequinPerson extends IPerson {
  constructor(map_ref, i, j) {
    super("Monequin", [], iconImg, Infinity, map_ref, i, j);

    this.modules = [
      new modulesData.MoveModule(this, 4),
      new modulesData.AttackModule(this, 50, 6),
      new modulesData.TeleportModule(this, 4),
    ];
  }
}

export default MonequinPerson;