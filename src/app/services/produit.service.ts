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
    categorie:"Accessoires"
    },    
    {
      reference:23, 
      libelle:'cartable', 
      nouveau:true, 
      madeIn:"Autre", 
      categorie: "Fourniture"
    }
  ];

  public getProduits(){
    return this.lesProduits;
  }
  constructor() { }
}
