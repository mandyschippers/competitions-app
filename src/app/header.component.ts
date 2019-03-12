import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  template: `<h1>{{title}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HeaderComponent  {
  @Input() title: string;
}
