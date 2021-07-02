import { Component, OnInit, Input } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  private show: boolean = false;

  constructor(
    private spinnerService: SpinnerService
  ) {
    this.spinnerService.ObtenerLoading().subscribe(value => this.show = value);
  }

  @Input() diameter = 80;
  @Input() mode = 'indeterminate';
  @Input() strokeWidth = 10;
  @Input() color = 'primary';
  // @Input() show = false;

  ngOnInit(): void {
  }

}
