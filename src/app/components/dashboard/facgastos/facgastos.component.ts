import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FacgastosService } from '../services/facgastos.service';
import { FacgastosaniadirComponent } from '../facgastosaniadir/facgastosaniadir.component';

@Component({
  selector: 'app-facgastos',
  templateUrl: './facgastos.component.html',
  styleUrls: ['./facgastos.component.css']
})
export class FacgastosComponent implements OnInit {
  displayedColumns: string[] = [
    'Numero',
    'Fecha',
    'Proveedor'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private _dialog: MatDialog,
    //private _empService: FacgastosService
    ) { }

  ngOnInit() {
    //this.getFacList();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(FacgastosaniadirComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          //this.getFacList();
        }
      },
    });
  }

  // getFacList() {
  //   this._empService.getFacList().subscribe({
  //     next: (res) => {
  //       this.dataSource = new MatTableDataSource(res);
  //       this.dataSource.sort = this.sort;
  //       this.dataSource.paginator = this.paginator;
  //     },
  //     error: console.log,
  //   });
  // }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  // deleteFac(id: number) {
  //   this._empService.deleteFac(id).subscribe({
  //     next: (res) => {
  //       this.getFacList();
  //     },
  //     error: console.log,
  //   });
  // }
  // openEditForm(data: any) {
  //   const dialogRef = this._dialog.open(FacgastosaniadirComponent, {
  //     data,
  //   });

  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       if (val) {
  //         this.getFacList();
  //       }
  //     },
  //   });
  // }

}
