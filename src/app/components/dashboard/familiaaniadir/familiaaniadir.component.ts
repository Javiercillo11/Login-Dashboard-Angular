import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FamiliaService } from '../services/familia.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-familiaaniadir',
  templateUrl: './familiaaniadir.component.html',
  styleUrls: ['./familiaaniadir.component.css']
})
export class FamiliaaniadirComponent implements OnInit {
  empForm:FormGroup;
  constructor(
    private _fb: FormBuilder, 
    private _empService: FamiliaService, 
    private _dialogRef: MatDialogRef<FamiliaaniadirComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) { 
    this.empForm = this._fb.group({
      Familia: '',
      });
  }

  ngOnInit() {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data) {
        this._empService
        .updateFamilia(this.data.id, this.empForm.value)
        .subscribe({
          next: (val: any) => {
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }else {
        this._empService
        .addFamilia(this.empForm.value).subscribe({
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
