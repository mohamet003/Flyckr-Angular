import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPictureComponent } from './dialog-picture.component';

describe('DialogPictureComponent', () => {
  let component: DialogPictureComponent;
  let fixture: ComponentFixture<DialogPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
