import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import * as socketIo from 'socket.io-client';
import { environment } from "../../environments/environment";
@Component({
  selector: 'app-header-section',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  count = {};
  constructor(private dataService: DataService) { }
  ngOnInit() {
    const socket = socketIo('http://10.10.114.97:5555');
    socket.on('dataRefresh', (dt) => {
      this.dataService.getDataCount().subscribe(data => { this.count = data; });
    });
    this.dataService.getDataCount().subscribe(data => { this.count = data; });
  }
}
