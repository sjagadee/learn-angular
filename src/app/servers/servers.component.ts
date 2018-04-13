import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  allowNewServer = false;
  serverCreationStatus = "No Server was created";
  serverName = 'Test Server';
  isServerCreated = false;
  servers = ["TestServer", "TestServer 2" ];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit() {
  }

  onServerCreate() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created, with name " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
