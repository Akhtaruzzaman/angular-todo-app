import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  hrf=(this.platformLocation as any).location;
  constructor(private toastr: ToastrService, private platformLocation: PlatformLocation) {}

  ngOnInit(): void {
  }

  showSuccess(title, msg) {
    this.toastr.success(title, msg);
  }
  showInfo(title, msg) {
    this.toastr.info(title, msg);
  }
  showError(title, msg) {
    this.toastr.error(title, msg);
  }
  showWarning(title, msg) {
    this.toastr.warning(title, msg);
  }
}
