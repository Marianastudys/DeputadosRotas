import { Component, signal } from '@angular/core';
import { ConsultaDeputados } from './consulta-deputados/consulta-deputados';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('deputados');
}
