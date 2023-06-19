import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  link1Clicked: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  menuOpen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products'];
}
