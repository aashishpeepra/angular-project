import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <div id="navigation">
      <div class="navigation">
        <h4>Anjali Gupta</h4>
        <img src="/assets/profile.png" alt="profile picture of the user" />
      </div>
    </div>
  `,
  styles: [
    `
      .navigation {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: flex-end;
        padding: 0px 50px;
        background: #f7f8fa;
        height: 80px;
      }
    `,
    `
      .navigation h4 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height, or 143% */

        text-align: right;
        letter-spacing: 0.15px;

        color: #1d262d;
        margin-right: 36px;
      }
    `,
    `
      .navigation img {
        height: 45px;
        width: 45px;
        border-radius: 45px;
      }
    `,
  ],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
