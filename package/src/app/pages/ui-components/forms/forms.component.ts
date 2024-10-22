import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

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
  //styleUrls: ['./forms.component.css']
})
export class AppFormsComponent {

  donorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.donorForm = this.fb.group({
      name: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      rg: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      birthDate: ['', Validators.required],
      sex: ['', Validators.required],
      motherName: ['', Validators.required],
      fatherName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      postalCode: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      address: ['', Validators.required],
      addressNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      neighborhood: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      landline: ['', Validators.pattern(/^\(\d{2}\) \d{4}-\d{4}$/)],
      mobile: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)]],
      height: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      weight: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      bloodType: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.donorForm.valid) {
      console.log(this.donorForm.value);
    } else {
      console.error('Form is invalid');
    }
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
