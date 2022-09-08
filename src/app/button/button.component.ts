import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button type="button">
      {{ title }}
    </button>
  `,
  styles: [
    `
      button {
        background: #1d262d;
        border-radius: 4px;
        height: 44px;
        width: 160px;
        text-align: center;
        color: #fff;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 36px;
        cursor:pointer;
      }
    `,
  ],
})
export class ButtonComponent implements OnInit {
  title = 'View Insights';
  constructor() {}

  ngOnInit(): void {}
}
