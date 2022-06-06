import { LightningElement } from "lwc";
export default class HelloWorld extends LightningElement {
  
  greeting = 'Wolrd';

  firstName = "";
  lastName = "";

  areDetailsVisible = false;

  contacts = [
    {
      Id: 1,
      FirstName: "Amy",
      LastName: "Taylor",
    },
    {
      Id: 2,
      FirstName: "Michael",
      LastName: "Jones",
    },
    {
      Id: 3,
      FirstName: "Jennifer",
      LastName: "Wu",
    },
  ];

  handleChange(event) {
    const field = event.target.name;
    if (field === "firstName") {
      this.firstName = event.target.value;
    } else if (field === "lastName") {
      this.lastName = event.target.value;
    }
  }

  get uppercasedFullName() {
    return `${this.firstName} ${this.lastName}`.toUpperCase();
  }

  handleCheckBoxChange(event) {
    this.areDetailsVisible = event.target.checked;
  }

  
  //LIFE HOOKS
  constructor(){
    super();
    console.log('Construtor!');
  }

  connectedCallback(){
    console.log('connectedCallback!');
  }

  renderedCallback(){
      console.log('renderedCallback!');
  }

  // render(){
  //     return `<div>Teste</div>`;
  // }

  disconnectedCallback(){
    console.log('disconnectedCallback!');
  }


}
