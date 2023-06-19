import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProveedoresaniadirComponent } from '../proveedoresaniadir/proveedoresaniadir.component';
import { ProveedoresService } from '../services/proveedores.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit{
  displayedColumns: string[] = [
    'id',
    'RazonSocial',
    'PersonaContacto',
    'Direccion',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor (
    private _dialog: MatDialog, 
    //private _empService: ProveedoresService,
  
    ) {}

  ngOnInit(): void {
      //this.getProveedorList();
  }

  openAddEditEmpForm(){
    const dialogRef = this._dialog.open(ProveedoresaniadirComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          //this.getProveedorList();
        }
      }
    });
  }

  // getProveedorList() {
  //   this._empService.getProveedorList().subscribe({
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

  //   deleteProveedor(id: number){
  //     this._empService.deleteProveedor(id).subscribe({
  //       next: (res) => {  
  //         this.getProveedorList();
  //       },
  //       error: console.log,
  //     });
  //   }

  //   openEditForm(data: any){
  //      const dialogRef = this._dialog.open(ProveedoresaniadirComponent, {
  //       data, 
  //      });

  //      dialogRef.afterClosed().subscribe({
  //       next: (val) => {
  //         if(val) {
  //           this.getProveedorList();
  //         }
  //       }
  //     });
  //   }
}

