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
      new modulesData.MoveModule(this, 2),
      new modulesData.AttackModule(this, 50, 6),
      new modulesData.TeleportModule(this, 4),
      new modulesData.PotionModule(this, 20, 5, 2),
      new modulesData.VampirismModule(this, 10, 1),
    ];
  }
}

export default MonequinPerson;