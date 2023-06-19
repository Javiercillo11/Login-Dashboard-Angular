import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientesaniadirComponent } from '../clientesaniadir/clientesaniadir.component';
import { ClientesService } from '../services/clientes.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'Razon_Social', 'Persona_de_contacto'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    // private _empService: ClientesService,
    private _dialog: MatDialog,
    //private _empService: ClientesService
  ) {}

  ngOnInit(): void {
    //this.getClienteList();
  }

  openAddEditEmpForm(){
    const dialogRef = this._dialog.open(ClientesaniadirComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          //this.getClienteList();
        }
      }
    });
  }

  // getClienteList() {
  //   this._empService.getClienteList().subscribe({
  //     next: (res) => {
  //       this.dataSource = new MatTableDataSource(res);
  //       this.dataSource.sort = this.sort;
  //       this.dataSource.paginator = this.paginator;
  //     },
  //     error: console.log,
  //   });
  // }

  // applyFilter(event: Event) {
  //     const filterValue = (event.target as HTMLInputElement).value;
  //     this.dataSource.filter = filterValue.trim().toLowerCase();

  //     if (this.dataSource.paginator) {
  //       this.dataSource.paginator.firstPage();
  //     }
  //   }

  //   deleteCliente(id: number){
  //     this._empService.deleteCliente(id).subscribe({
  //       next: (res) => {
  //         this.getClienteList();
  //       },
  //       error: console.log,
  //     });
  //   }

  //   openEditForm(data: any){
  //      const dialogRef = this._dialog.open(ClientesaniadirComponent, {
  //       data,
  //      });

  //      dialogRef.afterClosed().subscribe({
  //       next: (val) => {
  //         if(val) {
  //           this.getClienteList();
  //         }
  //       }
  //     });
  //   }
}
