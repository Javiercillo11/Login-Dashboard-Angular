import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FacgastosService } from '../services/facgastos.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-facgastosaniadir',
  templateUrl: './facgastosaniadir.component.html',
  styleUrls: ['./facgastosaniadir.component.css']
})
export class FacgastosaniadirComponent implements OnInit {

  empForm:FormGroup;
  constructor(
    private _fb: FormBuilder, 
    private _empService: FacgastosService, 
    private _dialogRef: MatDialogRef<FacgastosaniadirComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) { 
    this.empForm = this._fb.group({
      Numero: '',
      Fecha: '',
      Proveedor: '',
      Cif: '',
      Base1: '',
      Iva1: '',
      Re1: '',
      Base2: '',
      Iva2: '',
      Re2: '',
      Base3: '',
      Iva3: '',
      Re3: '',
      Base4: '',
      Iva4: '',
      Re4: '',
      Base5: '',
      Iva5: '',
      Re5: '',
      BaseTotal: '',
      IvaTotal: '',
      ReqTotal: '',
      TotalFactura: '',
      NºFactura: '',
      Apartado: '',
      Deducible: '',
      Pagado: '',
      });
  }

  ngOnInit() {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data) {
        this._empService
        .updateFac(this.data.id, this.empForm.value)
        .subscribe({
          next: (val: any) => {
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }else {
        this._empService
        .addFac(this.empForm.value).subscribe({
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
