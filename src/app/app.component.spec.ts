import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Directive } from '@angular/core';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

@Directive({
  selector: '[fullpage]',
  standalone: true
})
class MockFullpageDirective { }

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    }).overrideComponent(AppComponent, {
      remove: {
        imports: [AngularFullpageModule]
      },
      add: {
        imports: [MockFullpageDirective]
      }
    })
      .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Bible or Metal?'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Bible or Metal?');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#menu').textContent).toContain('🏠');
  });
});
