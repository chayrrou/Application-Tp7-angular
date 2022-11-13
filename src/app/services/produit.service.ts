import { Injectable } from '@angular/core';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private lesProduits:Produit[] =[    
    {
    reference:15, 
    libelle:'montre', 
    nouveau:false, 
    madeIn:"Tunisie", 
    categorie:"Accessoires",
    pointsVentes:["Tunis","Sfax"]
    },    
    {
      reference:23, 
      libelle:'cartable', 
      nouveau:true, 
      madeIn:"Autre", 
      categorie: "Fourniture",
      pointsVentes:["Nabeul","Béjà"]
    }
  ];

  public getProduits(){
    return this.lesProduits;
  }
  public addPrduits(p:Produit){
    this.lesProduits.push(p);
  }
 

  constructor() { }
}
