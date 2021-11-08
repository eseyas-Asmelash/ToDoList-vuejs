export class DatabaseItem {
  constructor(id) {
    this.id = id;
  }
}

export class Character extends DatabaseItem {
  constructor(id, name, age) {
    super(id);

    this.name = name;
    this.age = age;
  }
}
