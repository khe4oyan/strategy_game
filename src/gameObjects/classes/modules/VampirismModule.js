import IModule from '../../interfaces/IModule';
import iconImg from '../../../assets/modules/vampire.png';

class VampirismModule extends IModule{
  blood;

  constructor(person_ref, blood = 10) {
    super("Vampirism", person_ref, iconImg);
    this.blood = blood;
  }

  actionWhenSelect(map_ref) {
    for (let i = 0; i < map_ref.length; ++i) {
      for (let j = 0; j < map_ref[i].length; ++j) {
        if (map_ref[i][j].person !== null && map_ref[i][j].person.isDead === false) {
          map_ref[i][j].isActiveSquare = true;
        }
      }
    }
  }

  actionWhenUse(map_ref, {i, j}) {
    const targetPerson = map_ref[i][j].person;
    const targetHP = targetPerson.hp;

    map_ref[i][j].person.damage(this.blood);
    
    if (this.blood >= targetHP) {
      this.person_ref.damage(-targetHP);
    } else {
      this.person_ref.damage(-this.blood);
    }
  }
}

export default VampirismModule;