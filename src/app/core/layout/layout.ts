import { Header } from './components/header/header';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [Header],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
