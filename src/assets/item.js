export default class {
  constructor(str) {
    const date = new Date();
    this.name = str;
    this.created = (date.getHours() + 1) + ":" +
                   date.getMinutes() + ", " +
                   date.getDate() + "/" +
                   (date.getMonth() + 1) + "/" +
                   date.getFullYear();
    this.completed = false;
  }
};
