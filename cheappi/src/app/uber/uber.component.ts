import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiClientServiceService } from '../api-client-service.service';


@Component({
  selector: 'app-uber',
  templateUrl: './uber.component.html',
  styleUrls: ['./uber.component.css']
})
export class UberComponent implements OnInit {

  @Input() params: Params;

  constructor(private apiClientService: ApiClientServiceService) { }


  getParams(): void {
    this.apiClientService.getEstimate().subscribe((params: Params) => this.params = params.values);
  }

  ngOnInit() {
    this.getParams();
  }

}
