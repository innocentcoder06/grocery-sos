import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class SadminService {

  constructor(private webReqService: WebRequestService) { }


  newFranchise(data: Object) {
    return this.webReqService.post(`superAdmin/createFranchise`, data);
  }

  editFranchise(data: Object, pincode: string) {
    return this.webReqService.post(`superAdmin/editFranchise/${pincode}`, data);
  }

  fetchAllFranchise() {
    return this.webReqService.get(`superAdmin/franchise/fetch/all`);
  }

  fetchFranchise(_id: string) {
    return this.webReqService.get(`superAdmin/franchise/fetch/${_id}`);
  }

}
