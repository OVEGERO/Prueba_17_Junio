import { Component, OnInit } from '@angular/core';
import Bienes from 'src/app/interface/bienes.interface';
import { BinesService } from 'src/app/services/bines.service';

@Component({
  selector: 'app-filtrer',
  templateUrl: './filtrer.component.html',
  styleUrls: ['./filtrer.component.scss']
})
export class FiltrerComponent implements OnInit {

  bienes: Bienes[];
  filtrado: [] = [];
  selector:number=0;

  constructor(private service: BinesService) {

    this.bienes = [{
      nombre: 'jhon',
      precio: 12000,
      direccion:'Calle Ville Nueve'
    }];

   }

  ngOnInit(): void {
    this.service.getBines().subscribe(bienes => {
      this.bienes = bienes;
    });
  }

  onSelect(event: any): void {
    if (event.target.value === 'nombre') {
      this.service.getBines().subscribe(data => {
        data.forEach((element:any) => {
          console.log(element.nombre);
          this.filtrado=element.nombre;
          this.selector=1;
        });
      });
    }
  }

}
