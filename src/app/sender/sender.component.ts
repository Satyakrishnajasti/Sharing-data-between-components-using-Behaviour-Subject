import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss'],
})
export class SenderComponent implements OnInit {
  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    let details = [
      {
        name: 'hello',
        place: 'India',
      },
    ];
    this.sendData(details);
  }

  public sendData(message: any) {
    this.dataService.sendData(message);
  }
}
