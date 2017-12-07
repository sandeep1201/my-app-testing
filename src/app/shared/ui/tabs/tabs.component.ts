import {AfterContentInit, Component, ContentChildren, EventEmitter, Output, QueryList} from '@angular/core';
import { TabComponent  } from './tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
  @Output() tabsClick: EventEmitter<any> = new EventEmitter();


  constructor() { }

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    //get all active tabs

    let activeTabs = this.tabs.filter((tab) => tab.active);

    // if there are no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // deactivate all the tabs
    debugger;
    this.tabs.toArray().forEach(tab => tab.active = false);
    this.tabsClick.emit(tab);

    // activate the tab user has clicked on
    tab.active = true;
  }

}
