import { AnimaisService } from './../animais.service';
import { Component, OnInit } from '@angular/core';
import { Animais } from '../animais';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-de-animais',
  templateUrl: './lista-de-animais.component.html',
  styleUrls: ['./lista-de-animais.component.css']
})
export class ListaDeAnimaisComponent implements OnInit {

  animais !: Animais;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.animais = this.activatedRoute.snapshot.data['animais'];
    })
  }

}
