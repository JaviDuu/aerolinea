import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit{

  avion: any = {
    dia: ''
  };

  constructor(private rutaActiva: ActivatedRoute){
    this.avion = {
      dia: this.rutaActiva.snapshot.params['id']
    };
  }

  ngOnInit() {
    this.avion = {
      dia: this.rutaActiva.snapshot.params['id']
    };
    console.log(this.avion);
  }
  
}
