import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecensioneComponent } from './recensioni.component';




describe('RecensioneComponent', () => {
  let component: RecensioneComponent;
  let fixture: ComponentFixture<RecensioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecensioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecensioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});