import { CustomElement, Prop, Listen } from 'custom-elements-ts';

@CustomElement({
  tag: 'cts-message',
  template: '<h1></h1>',
  style: `
    :host {
      margin: 0 auto;
      margin-top: 50px;
      display: block;
      width: calc(100% - 50px);
      text-align: center;
      cursor: pointer;
    }
    h1 {
      font-size: 14px;
      margin: 0 auto;
      padding: 20px;
      background: #2e8edf;
      color: whitesmoke;
      border-radius: 3px;
    }
  `
})
export class MessageElement extends HTMLElement {

  @Listen('click')
  handleClick() {
    alert('what are you waiting for?');
  }

  @Prop() message: string;

  connectedCallback(){
    this.shadowRoot.querySelector('h1').innerHTML = this.message;
  }
}