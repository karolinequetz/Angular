import { ListInvestmentsService } from './../../services/list-investments.service';
import { Component, OnInit } from '@angular/core';

//Model
import { Investments } from '../../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public investments!: Array<Investments>;
  constructor(private listInvestmentsService: ListInvestmentsService) {}

  ngOnInit(): void {
    this.listInvestmentsService
      .list()
      .subscribe({ next: (res) => (this.investments = res) });
  }
}
