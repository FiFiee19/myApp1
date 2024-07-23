import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mylist1Page } from './mylist1.page';

describe('Mylist1Page', () => {
  let component: Mylist1Page;
  let fixture: ComponentFixture<Mylist1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Mylist1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
