import { TestBed } from '@angular/core/testing';

import { UsuarioSenhaIguais.ValidatorService } from './usuario-senha-iguais.validator.service';

describe('UsuarioSenhaIguais.ValidatorService', () => {
  let service: UsuarioSenhaIguais.ValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioSenhaIguais.ValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
