import {Component, OnInit} from '@angular/core';
import { SwPush } from "@angular/service-worker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pwa-test';
  resp: string = '';

  constructor(private _swPush: SwPush) {}

  ngOnInit() {
    // this.requestSubscription();
    (navigator as any).setAppBadge( 100 );
  }

  requestSubscription = () => {
    if (!this._swPush.isEnabled) {
      console.log("Notification is not enabled.");
      return;
    }

    this._swPush.requestSubscription({
      serverPublicKey: 'BDkzqsc9wHMHb-gxoo7_dA0DDx39dxlUAqgM-TRkFQ8t_Kt9AH8s4fLqPyIK14cyZ_N6PL4mOb7CO_ztZgAOB10'
    }).then((_) => {
      console.log(JSON.stringify(_));
      this.resp = JSON.stringify(_);
    }).catch((_) => console.log);
  };

}
