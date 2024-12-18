// interface
import IPerson from "../../interfaces/Iperson";

// modules
import modulesData from '../../../data/modulesData';

// img
import iconImg from '../../../assets/persons/man.png';

class ManPerson extends IPerson {
  constructor(map_ref, i, j) {
    super("Man", [], iconImg, 100, map_ref, i, j);
  
    this.modules = [
      new modulesData.MoveModule(this, 3),
      new modulesData.AttackModule(this, 25, 5),
    ];
  }
}

export default ManPerson;