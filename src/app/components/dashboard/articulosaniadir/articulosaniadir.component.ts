import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticulosService } from '../services/articulos.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-articulosaniadir',
  templateUrl: './articulosaniadir.component.html',
  styleUrls: ['./articulosaniadir.component.css']
})
export class ArticulosaniadirComponent implements OnInit {
  empForm:FormGroup;

  constructor(
    private _fb: FormBuilder, 
    private _empService: ArticulosService, 
    private _dialogRef: MatDialogRef<ArticulosaniadirComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) { 
    this.empForm = this._fb.group({
      Codigo: '',
      Concepto: '',
      Familia: '',
      Proveedor: '',
      PrecioBase: '',
      Tarifa1: '',
      Tarifa2: '',
      Tarifa3: '',
      Tarifa4: '',
      Nºdecimales: '',
      Iva: '',
      Stock: '',
      Minimo: '',
      Foto: '',
      Observaciones: '',
      });
  }

  ngOnInit() {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data) {
        this._empService
        .updateArticulo(this.data.id, this.empForm.value)
        .subscribe({
          next: (val: any) => {
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }else {
        this._empService
        .addArticulo(this.empForm.value).subscribe({
          next: (val: any) => {
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
      
    }
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // Aquí puedes procesar el archivo seleccionado, como cargarlo en tu servidor
      // Puedes acceder al archivo a través de la variable 'file'
      console.log(file);
    }
  }

  openFilePicker() {
    const fileInput = document.getElementById('Foto');
    if (fileInput) {
      fileInput.click();
    }
  }
}
