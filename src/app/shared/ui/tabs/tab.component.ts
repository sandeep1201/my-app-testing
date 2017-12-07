import { Component, EventEmitter, Output, Input, HostListener} from '@angular/core';

@Component({
  selector: 'tab',
  template: `<div [hidden]="!active" class="pane">
    <ng-content></ng-content>
  </div>`
})
export class TabComponent  {
  @Output() tabClick: EventEmitter<any> = new EventEmitter();
  @Input('tabTitle') title: string;
  @Input() active = false;
  constructor() { }

  @HostListener('click') tabClickActivity() {
    debugger;
    this.tabClick.emit(true);
  }

}
