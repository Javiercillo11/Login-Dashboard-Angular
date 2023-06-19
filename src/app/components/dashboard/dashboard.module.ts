import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NavComponent } from './nav/nav.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesaniadirComponent } from './clientesaniadir/clientesaniadir.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FamiliaComponent } from './familia/familia.component';
import { FamiliaaniadirComponent } from './familiaaniadir/familiaaniadir.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticulosaniadirComponent } from './articulosaniadir/articulosaniadir.component';
import { FacgastosComponent } from './facgastos/facgastos.component';
import { FacgastosaniadirComponent } from './facgastosaniadir/facgastosaniadir.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedoresaniadirComponent } from './proveedoresaniadir/proveedoresaniadir.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    ClientesComponent,
    ClientesaniadirComponent,
    FamiliaComponent,
    FamiliaaniadirComponent,
    ArticulosComponent,
    ArticulosaniadirComponent,
    FacgastosComponent,
    FacgastosaniadirComponent,
    ProveedoresComponent,
    ProveedoresaniadirComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatToolbarModule
  ]
})
export class DashboardModule { }
