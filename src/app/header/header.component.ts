import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  page: any = 1;

  @Output() pageEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  choosePage(num: number): void {
    this.page = num;
    this.pageEvent.emit(this.page);
  }

}
