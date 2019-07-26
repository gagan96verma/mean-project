import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {FormComponent} from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FormComponent
      ],
      imports: [
          ReactiveFormsModule
      ],
      providers: [
          HttpClient,
          HttpHandler
      ]
    }).compileComponents();
  }));

  function setUp() {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      return { fixture, app };
  }

    it('should create the app', async(() => {
        const { app } = setUp();
        expect(app).toBeTruthy();
        !expect(app).toBeTruthy();
    }));

  it(`should have as title 'todo-app-mean'`, () => {
    const { app } = setUp();
    expect(app.title).toBe('todo-app-mean');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to todo-app-mean!');
  });
});
