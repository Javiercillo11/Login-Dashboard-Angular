import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ArticulosService } from '../services/articulos.service';
import { ArticulosaniadirComponent } from '../articulosaniadir/articulosaniadir.component';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
})
export class ArticulosComponent implements OnInit {
  displayedColumns: string[] = [
    'codigo',
    'concepto',
    'familia',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    //private _empService: ArticulosService
  ) {}

  ngOnInit(): void {
    //this.getArticuloList();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(ArticulosaniadirComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          //this.getArticuloList();
        }
      },
    });
  }

  // getArticuloList() {
  //   this._empService.getArticuloList().subscribe({
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

  // deleteArticulo(id: number) {
  //   this._empService.deleteArticulo(id).subscribe({
  //     next: (res) => {
  //       this.getArticuloList();
  //     },
  //     error: console.log,
  //   });
  // }
  // openEditForm(data: any) {
  //   const dialogRef = this._dialog.open(ArticulosaniadirComponent, {
  //     data,
  //   });

  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       if (val) {
  //         this.getArticuloList();
  //       }
  //     },
  //   });
  // }
}
