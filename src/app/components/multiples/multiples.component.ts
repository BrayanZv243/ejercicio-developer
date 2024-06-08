import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-multiples',
  templateUrl: './multiples.component.html',
  styleUrls: ['./multiples.component.scss'],
})
export class MultiplesComponent {
  number: number = 0;
  multiplesList: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  findMultiples() {
    this.multiplesList = [];
    for (let i = 0; i <= this.number; i++) {
      const multiples = [];
      let color = 'black';
      if (i % 3 === 0) {
        multiples.push(3);
        color = 'green';
      }
      if (i % 5 === 0) {
        multiples.push(5);
        if (color === 'black') color = 'red';
      }
      if (i % 7 === 0) {
        multiples.push(7);
        if (color === 'black') color = 'blue';
      }
      this.multiplesList.push({ value: i, multiples, color });
    }
    this.saveToFirebase();
  }

  saveToFirebase() {
    this.firebaseService.saveRequest({
      number: this.number,
      result: this.multiplesList,
      timestamp: new Date(),
    });
  }
}
