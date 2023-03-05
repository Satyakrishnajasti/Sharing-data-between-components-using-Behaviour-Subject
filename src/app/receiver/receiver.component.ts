import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss'],
})
export class ReceiverComponent implements OnInit {
  constructor(private dataService: DataService) {}

  public showData: any;

  ngOnInit(): void {
    this.dataService.data.subscribe({
      next: (value) => {
        this.showData = value;
      },
      error: (err) => {
        alert(err);
      },
    });
  }
}
