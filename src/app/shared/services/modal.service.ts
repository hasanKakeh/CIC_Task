import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalRef: NgbModalRef[];
  constructor(private _modalService: NgbModal) {
    this.modalRef = [];
  }
  getRef() {
    const length = this.modalRef.length;
    return this.modalRef[length - 1];
  }
  open(content: any, extraOptions?: any) {
    let options = { centered: true };
    options = Object.assign(options, extraOptions);
    this.modalRef.push(this._modalService.open(content, options));
  }
  close() {
    let ref = this.modalRef.pop();
    if (ref) ref.close();
  }
}
