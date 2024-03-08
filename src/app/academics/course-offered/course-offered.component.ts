import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AngularFirestore } from '@angular/fire/compat/firestore';


interface Qouta {
  name: string;
  code: string;
}
interface TnauCounselling {
  name: string;
  code: string;
}


@Component({
  selector: 'app-course-offered',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, InputGroupModule, InputGroupAddonModule, FormsModule, DropdownModule],
  templateUrl: './course-offered.component.html',
  styleUrl: './course-offered.component.scss'
})
export class CourseOfferedComponent implements OnInit {
  showApplicationForm: boolean = false;
  dialogVisible: boolean = false;
  value: any;
  qouta: Qouta[] | undefined;
  tnauCounselling: TnauCounselling[] | undefined

  first_name: any;
  last_name: any;
  email: any;
  tel: any;
  selectedQouta: Qouta | undefined;
  selectedtnauCounselling: TnauCounselling | undefined;
  your_msg: any;


  constructor(private activatedRouter: ActivatedRoute,private firestore: AngularFirestore) {
    this.activatedRouter.params.subscribe((params: any) => {
      console.log(params['id']);
      if (params['id']) {
        this.showApplicationForm = true
      }

    })


  }
  ngOnInit() {
    this.qouta = [
      { name: 'Counselling', code: 'C' },
      { name: 'Management', code: 'M' },
    ];
    this.tnauCounselling = [
      { name: 'Yes', code: 'Y' },
      { name: 'No', code: 'N' },
    ];

    if (this.qouta.length > 0) {
      this.selectedQouta = this.qouta[0];
    }
    if (this.tnauCounselling.length > 0) {
      this.selectedtnauCounselling = this.tnauCounselling[0];
    }
  }
  showDialog() {
    this.dialogVisible = true;
  }
  submitApplicationForm() {
    let applicationFormDetails = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      mobile_number: this.tel,
      selectedQouta: this.selectedQouta?.name,
      selectedtnauCounselling: this.selectedtnauCounselling?.name,
      your_msg: this.your_msg
    }
    console.log("applicationFormDetails::", applicationFormDetails);

     // Write data to Firestore
  this.firestore.collection('applicationForms').add(applicationFormDetails)
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });

  }
}
