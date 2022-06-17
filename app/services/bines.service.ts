import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, query, doc, OrderByDirection, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Bienes from '../interface/bienes.interface';


@Injectable({
  providedIn: 'root'
})
export class BinesService {

  constructor(private firestore:Firestore) { }

  //GET BINES
  searchBines(nombre:string){
    const nombreRef = collection(this.firestore, 'bienes');
  }

  //GET BINES
  getBines() : Observable<Bienes[]>{
    const bienesRef = collection(this.firestore, 'bienes');
    return collectionData(bienesRef) as Observable<Bienes[]>;
  }

}
