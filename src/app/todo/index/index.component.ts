import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private toastr: ToastrService) {}

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
