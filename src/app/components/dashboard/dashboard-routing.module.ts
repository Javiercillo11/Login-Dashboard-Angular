import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FamiliaComponent } from './familia/familia.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { FacgastosComponent } from './facgastos/facgastos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children:[
    { path: 'link1', component: ClientesComponent },
    { path: 'link2', component: ProveedoresComponent },
    { path: 'link3', component: ArticulosComponent },
    { path: 'link4', component: FamiliaComponent },
    { path: 'link5', component: FacgastosComponent },
    //{ path: 'link6', component: LoginComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
