import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaComponent } from './tabla-component/tabla-component'
import { NavbarComponent } from "./navbar-component/navbar-component";
import { BannerComponent } from "./banner-component/banner-component";
import { ButtonComponent } from "./button-component/button-component";
import { FiltrosComponent } from "./filtros-component/filtros-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TablaComponent, NavbarComponent, BannerComponent, ButtonComponent, FiltrosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gecova');
}
