import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

export interface CustomerData {
  id?: string | null;
  name: string |null;
  salary: number |null;
  city: string |null;
}

@Injectable({
  providedIn: 'root'
})
export class HomeCrudService {

  constructor(private db: AngularFireDatabase) { }

  loadAllData(): Observable<CustomerData[]> {
    return this.db.list<CustomerData>('StudentCollection').valueChanges();
  }
}
