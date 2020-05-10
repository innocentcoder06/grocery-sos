import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-vadmin-page',
  templateUrl: './vadmin-page.component.html',
  styleUrls: ['./vadmin-page.component.scss']
})
export class VadminPageComponent implements OnInit {

  isInventory: boolean;
  isProfile: boolean;

  isNewProduct: boolean;
  isEditProduct: boolean;

  newProduct = new FormGroup({
    productName: new FormControl(null),
    productCategory: new FormControl(null),
    unit: new FormControl(null),
    quantity: new FormControl(null),
    stockCnt: new FormControl(null),
    MRP: new FormControl(null)
  });

  editProduct = new FormGroup({

  });

  constructor() {
    this.isInventory = true;
  }

  ngOnInit() {
  }

  Inventory() {
    this.isInventory = true;
    this.isProfile = false;
  }

  Profile() {
    this.isInventory = false;
    this.isProfile = true;
  }

  NewProduct() {
    this.isNewProduct = !this.isNewProduct;
  }

  EditProduct() {
    this.isEditProduct = !this.isEditProduct;
  }

}
