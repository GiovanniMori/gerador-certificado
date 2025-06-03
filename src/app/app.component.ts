import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './_components/navbar/navbar.component';
import {BaseUiComponent} from './_components/base-ui/base-ui.component';
import {CertificadosComponent} from './pages/certificados/certificados.component';
import {CertificadoFormComponent} from './pages/certificado-form/certificado-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, BaseUiComponent, CertificadosComponent, CertificadoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gerador-certificado';
}
