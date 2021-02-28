import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovaPostagemPage } from './nova-postagem.page';

describe('NovaPostagemPage', () => {
  let component: NovaPostagemPage;
  let fixture: ComponentFixture<NovaPostagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaPostagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovaPostagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
