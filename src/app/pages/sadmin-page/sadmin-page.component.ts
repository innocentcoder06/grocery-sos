import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { SadminService } from '../../services/sadmin.service';
import { Franchise } from '../../../../../grocery-master/models/franchise.js';

@Component({
  selector: 'app-sadmin-page',
  templateUrl: './sadmin-page.component.html',
  styleUrls: ['./sadmin-page.component.scss']
})
export class SadminPageComponent implements OnInit {

  isFranchise: boolean;
  isAdmin: boolean;
  isProfile: boolean;

  franchise: Franchise[];


  isNewFranchise: boolean;
  isEditFranchise: boolean;

  isNewAdmin: boolean;
  isEditAdmin: boolean;

  newFranchise = new FormGroup({
    pinCode: new FormControl(null),
    city: new FormControl(null),
    district: new FormControl(null),
    country: new FormControl(null),
    franchiseName: new FormControl(null)
  });

  editFranchise = new FormGroup({
    pinCode: new FormControl(null),
    city: new FormControl(null),
    district: new FormControl(null),
    country: new FormControl(null),
    franchiseName: new FormControl(null)
  });

  newAdmin = new FormGroup({
    fname: new FormControl(null),
    lname: new FormControl(null),
    whatsApp: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null)
  });

  editAdmin = new FormGroup({
    fname: new FormControl(null),
    lname: new FormControl(null),
    whatsApp: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    doorNo: new FormControl(null),
    addressLine1: new FormControl(null),
    addressLine2: new FormControl(null),
    city: new FormControl(null),
    district: new FormControl(null),
    pinCode: new FormControl(null),
    country: new FormControl(null),
    mobile: new FormControl(null)
  });


  constructor(private userService: UserService, private sadminService: SadminService) {
    this.Franchise();
  }

  ngOnInit() {
  }

  Franchise() {
    this.isFranchise = true;
    this.isAdmin = false;
    this.isProfile = false;
    return this.sadminService.fetchAllFranchise().subscribe((franchiseDoc: Franchise[]) => {
      this.franchise = franchiseDoc;
    });
  }

  Admin() {
    this.isFranchise = false;
    this.isAdmin = true;
    this.isProfile = false;
  }

  Profile() {
    this.isFranchise = false;
    this.isAdmin = false;
    this.isProfile = true;
  }

  NewAdmin() {
    this.isNewAdmin = !this.isNewAdmin;
  }

  EditAdminByCode(pincode: number, _id: string) {
    this.EditAdmin();

  }

  EditAdmin() {
    this.isEditAdmin = !this.isEditAdmin;
  }

  NewFranchise() {
    this.isNewFranchise = !this.isNewFranchise;
    this.newFranchise.reset();
  }

  EditFranchiseById(_id: string) {
    this.EditFranchise();
    return this.sadminService.fetchFranchise(_id).subscribe((franchiseDoc: any) => {
      if (franchiseDoc) {
        console.log(franchiseDoc.pinCode);
        this.editFranchise.patchValue({
          'pinCode': franchiseDoc.pinCode
        });
      }
    });
  }

  EditFranchise() {
    this.isEditFranchise = !this.isEditFranchise;
  }

  newAdminSave() {
    this.newAdmin.addControl('role', new FormControl(null));
    this.newAdmin.get('role').setValue('franchiseAdmin');
  }

  editAdminSave() {

  }

  newFranchiseSave() {
    this.newFranchise.addControl('createdBy', new FormControl(null));
    this.newFranchise.get('createdBy').setValue(this.userService.getUserId());
  }

  editFranchiseSave() {

  }

}
