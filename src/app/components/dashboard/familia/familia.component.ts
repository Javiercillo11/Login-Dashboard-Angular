import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FamiliaService } from '../services/familia.service';
import { FamiliaaniadirComponent } from '../familiaaniadir/familiaaniadir.component';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.css']
})
export class FamiliaComponent implements OnInit {
  displayedColumns: string[] = [
    'familia',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private _dialog: MatDialog,
    //private _empService: FamiliaService
    
    ) { }

  ngOnInit() {
    //this.getFamiliaList();
  }
  
  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(FamiliaaniadirComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          //this.getFamiliaList();
        }
      },
    });
  }

  // getFamiliaList() {
  //   this._empService.getFamiliaList().subscribe({
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

  // deleteFamilia(id: number) {
  //   this._empService.deleteFamilia(id).subscribe({
  //     next: (res) => {
  //       this.getFamiliaList();
  //     },
  //     error: console.log,
  //   });
  // }
  // openEditForm(data: any) {
  //   const dialogRef = this._dialog.open(FamiliaaniadirComponent, {
  //     data,
  //   });

  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       if (val) {
  //         this.getFamiliaList();
  //       }
  //     },
  //   });
  // }

}
