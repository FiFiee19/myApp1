import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CustomerData, HomeCrudService } from './HomeCrudService.page';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  datalist: CustomerData[] = [];
  private dataSubscription!: Subscription;

  constructor(
    private dataService: HomeCrudService,
    private modalCtrl: ModalController,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.dataSubscription = this.dataService.loadAllData().subscribe(
      res => {
        this.datalist = res;
        console.log('Data loaded:', this.datalist);
        this.cd.detectChanges();
      },
      error => {
        console.error('Error loading data', error);
      }
    );
  }


}
