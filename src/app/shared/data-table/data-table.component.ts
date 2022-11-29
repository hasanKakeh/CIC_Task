import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  @Input() columns: any[] = [];
  @Input() data: any[];
  @Output() onClickAction = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
