import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClient } from '@angular/common/http';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './forms.component.html',
})
export class AppFormsComponent {
  donorForm: FormGroup;
  mockDonor: { name: string; cpf: string; rg: string; birthDate: string; sex: string; motherName: string; fatherName: string; email: string; postalCode: string; address: string; number: number; neighborhood: string; city: string; state: string; landline: string; mobile: string; height: number; weight: number; bloodType: string; };

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.donorForm = this.fb.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      birthDate: ['', Validators.required],
      sex: ['', Validators.required],
      motherName: ['', Validators.required],
      fatherName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      postalCode: ['', Validators.required],
      address: ['', Validators.required],
      addressNumber: ['', Validators.required],
      neighborhood: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      landline: [''],
      mobile: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      bloodType: ['', Validators.required]
    });

    this.mockDonor = {
      name: "Milena Analu Pires",
      cpf: "77525609950",
      rg: "440845415",
      birthDate: "1964-05-23",
      sex: "FEMALE",
      motherName: "Isadora Marli",
      fatherName: "Noah Severino César Pires",
      email: "mmilenaanalupires@keffin.com.br",
      postalCode: "39801-678",
      address: "Rua Kurt W. Rothe",
      number: 675,
      neighborhood: "Castro Pires",
      city: "Teófilo Otoni",
      state: "MG",
      landline: "(33) 3611-4613",
      mobile: "(33) 98481-0191",
      height: 1.53,
      weight: 80.0,
      bloodType: "O-"
    };
  }

  populateFormWithMockData() {
    this.donorForm.setValue(this.mockDonor);
  }

  apiUrl = 'http://localhost:8097/api/bloodDonation/create';

  onSubmit() {
    //try {
      //console.log(this.donorForm.value);
      this.http.post(this.apiUrl, this.mockDonor).subscribe({
        next: (response: any) => {
          console.log('Success:', response);
        },
        error: (error : any) => {
          console.error('Error:', error);
        }
      });
    /* } catch(error) {
      console.error('Form is invalid');
    } */
  }

  country: Food[] = [
    { value: 'steak-0', viewValue: 'USA' },
    { value: 'pizza-1', viewValue: 'India' },
    { value: 'tacos-2', viewValue: 'France' },
    { value: 'tacos-3', viewValue: 'UK' },
  ];

  selectedCountry = this.country[2].value;

  city: Food[] = [
    { value: 'steak-0', viewValue: 'Mexico' },
    { value: 'pizza-1', viewValue: 'Mumbai' },
    { value: 'tacos-2', viewValue: 'Tokyo' },
    { value: 'tacos-3', viewValue: 'New York' },
  ];

  selectedCity = this.city[1].value;

  state: Food[] = [
    { value: 'steak-0', viewValue: 'Cuba' },
    { value: 'pizza-1', viewValue: 'Djibouti' },
    { value: 'tacos-2', viewValue: 'Bulgaria' },
    { value: 'tacos-3', viewValue: 'Cabo Verde' },
  ];

  selectedState = this.state[3].value;
}



