import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerPostPage } from './ver-post.page';

describe('VerPostPage', () => {
  let component: VerPostPage;
  let fixture: ComponentFixture<VerPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
