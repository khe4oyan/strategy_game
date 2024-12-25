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
}

export default IGameObject;