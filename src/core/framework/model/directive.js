/**
 * Um post feito por um usuário do sistema
 */
export class Directive {
  name = "";
  action = () => {
    console.warn(`directive ${this.name} not implemented`);
  };

  constructor(name, action) {
    this.name = name;
    this.action = action;
  }
}
