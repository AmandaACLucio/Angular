import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarComentarioPage } from './editar-comentario.page';

describe('EditarComentarioPage', () => {
  let component: EditarComentarioPage;
  let fixture: ComponentFixture<EditarComentarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarComentarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarComentarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
