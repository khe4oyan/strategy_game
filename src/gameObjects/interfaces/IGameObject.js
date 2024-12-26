class IGameObject {
  map_ref;
  img;
  i;
  j;

  constructor(img, i, j, map_ref) {
    this.img = img;
    this.i = i; 
    this.j = j;
    this.map_ref = map_ref;
  }

  isMapOverflow(i, j) {
    if (
      i > -1 && i < this.map_ref.length &&
      j > -1 && j < this.map_ref[i].length
    ) {
      return false;
    } else {
      return true;
    }
  }
}

export default IGameObject;