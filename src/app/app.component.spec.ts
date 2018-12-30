import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(async () => {
    await TestBed
      .configureTestingModule({
        declarations: [
          AppComponent
        ],
        imports: [
          RouterTestingModule
        ]
      })
      .compileComponents();

    fixture = TestBed.createComponent(AppComponent);

    app = fixture.debugElement.componentInstance as AppComponent;

    fixture.detectChanges();
  }));

  it('creates the app', async () =>
    expect(app)
      .toBeTruthy()
  );
});
