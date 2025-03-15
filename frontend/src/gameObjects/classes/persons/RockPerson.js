// interface
import IPerson from '../../interfaces/Iperson';

// modules
import modulesData from '../../../data/modulesData';

// img
import iconImg from '../../../assets/persons/rock.png';

class RockPerson extends IPerson {
  constructor(map_ref, i, j) {
    super("Rock", [], iconImg, 110, map_ref, i, j);

    this.modules = [
      new modulesData.AttackModule(this, 1, 1),
    ];
  }
}

export default RockPerson;