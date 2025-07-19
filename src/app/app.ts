import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar-component/navbar-component";
import { BannerComponent } from "./banner-component/banner-component";
import { ContainerTableComponent } from "./container-table-component/container-table-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, BannerComponent, ContainerTableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gecova');
}
