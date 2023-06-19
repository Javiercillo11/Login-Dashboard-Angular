import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientesService } from '../services/clientes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-clientesaniadir',
  templateUrl: './clientesaniadir.component.html',
  styleUrls: ['./clientesaniadir.component.css']
})
export class ClientesaniadirComponent implements OnInit {
  empForm: FormGroup;

  constructor(
    private _fb: FormBuilder, 
    private _empService: ClientesService, 
    private _dialogRef: MatDialogRef<ClientesaniadirComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    ){
    this.empForm = this._fb.group({
    _id: '',
    Razon_social: '',
    Persona_de_contacto: '',
    Direccion: '',
    Ciudad: '',
    Provincia: '',
    Codigo_Postal: '',
    Telefono: '',
    Movil: '',
    Descuento: '',
    recargo_Eq: '',
    Observaciones: '',
    Foto: '',
    Correo_E: '',
    Login: '',
    Password: '',
    Tarifa: '',
    action: ''
    });
  }

  ngOnInit(): void {
      this.empForm.patchValue(this.data);
  }

  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data) {
        this._empService
        .updateCliente(this.data.id, this.empForm.value)
        .subscribe({
          next: (val: any) => {
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }else {
        this._empService
        .addCliente(this.empForm.value).subscribe({
          next: (val: any) => {
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
      
    }
  }

  selectFile(): void {
    const fileInput = document.getElementById('fileInput');
    fileInput?.click(); // Simular el clic en el campo de archivo oculto
  
    fileInput?.addEventListener('change', (event: any) => {
      const file: File = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
  
        reader.onload = () => {
          const fileDataURL = reader.result as string;
          this.empForm.patchValue({ Foto: fileDataURL });
        };
      }
    });
  }

  openFilePicker() {
    const fileInput = document.getElementById('Foto');
    if (fileInput) {
      fileInput.click();
    }
  }
}