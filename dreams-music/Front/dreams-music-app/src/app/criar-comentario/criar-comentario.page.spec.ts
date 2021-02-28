import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarComentarioPage } from './criar-comentario.page';

describe('CriarComentarioPage', () => {
  let component: CriarComentarioPage;
  let fixture: ComponentFixture<CriarComentarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarComentarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarComentarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
