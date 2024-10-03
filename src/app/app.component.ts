import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";
import {LanguageSwitcherComponent} from './public/components/language-switcher/language-switcher.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatAnchor, RouterLink, LanguageSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'upctp111';
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  options = [
    {path: '/home', title: 'Home'},
    {path: '/nursing/mental-state-exams', title: 'Mental State Exams'}
]
}
