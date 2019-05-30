// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConfigProvider } from '../../../providers/config/config';
import { TranslateService } from '@ngx-translate/core';
import { SharedDataProvider } from '../../../providers/shared-data/shared-data';
import { trigger, style, animate, transition } from '@angular/animations';
import { NavController, Content } from 'ionic-angular';
import { SubCategories6Page } from '../../categorie-pages/sub-categories6/sub-categories6';
import { CartPage } from '../../cart/cart';
import { SearchPage } from '../../search/search';
import { ProductsPage } from '../../products/products';

@Component({
  selector: 'page-home5',
  animations: [
    trigger(
      'animate', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('500ms', style({ opacity: 1 }))
        ]),
        transition(':leave', [
          style({ opacity: 1 }),
          animate('700ms', style({ opacity: 0 }))
        ])
      ]
    )
  ],
  templateUrl: 'home5.html',
})

export class Home5Page {
  @ViewChild(Content) content: Content;

  segments: any = 'topSeller';
  constructor(
    public http: Http,
    public config: ConfigProvider,
    public shared: SharedDataProvider,
    public navCtrl: NavController,
    translate: TranslateService) {
  }
  openSubCategories(parent) {
    let count = 0;
    for (let val of this.shared.subCategories) {
      if (val.parent == parent) count++;
      console.log(val.parent + "   " + parent);
    }
    if (count == 0)
      this.navCtrl.push(ProductsPage, { id: parent, name: "", sortOrder: 'newest' });
    else
      this.navCtrl.push(SubCategories6Page, { 'parent': parent });
  }

  ngAfterViewChecked() {
    this.content.resize();
  }
  openCart() {
    this.navCtrl.push(CartPage);
  }
  openSearch() {
    this.navCtrl.push(SearchPage);
  }

  // ionViewWillEnter() {
  //   if (this.config.admob == 1) this.shared.showAd();
  // }

}
