import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  lesCategories: string[] = [
    'Fourniture', 'Vêtements', 'Accessoires', 'Informatique', 'Meubles'];

    // productForm: FormGroup = new FormGroup({
    //   reference:new FormControl(0, {nonNullable:true}),
    //   libelle: new FormControl('', {nonNullable:true}),
    //   madeIn: new FormControl('Tunisie', {nonNullable:true}),
    //   categorie: new FormControl('Accessoires', {nonNullable:true}),
    //   nouveau : new FormControl(true, {nonNullable:true})
    //   });
      
    productForm!: FormGroup;

  constructor(private formBuilder:FormBuilder,private produitService:ProduitService) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.nonNullable.group({
      reference:[0],
      libelle: [''],
      madeIn: ['Tunisie'],
      categorie: ['Accessoires'],
      nouveau : true
      })
  
      this.productForm.get('nouveau')?.setValue(false);
  }
  
  lesProduits: Produit[]=[];
   p:Produit[]=[];

  onSubmitForm(){

    console.log(this.productForm.value);
    console.log(this.productForm.value.reference);
    console.log(this.productForm.value['libelle']);
    console.log(this.productForm.get('madeIn')?.value);
    console.log(this.productForm.controls['categorie'].value);

     this.produitService.addPrduits(this.productForm.value);
  }

  onReset(){
    this.productForm.reset();
  }

  reintialiser(){
    this.productForm = this.formBuilder.group({
      reference:[0],
      libelle: [''],
      madeIn: ['Autre'],
      categorie: ['Fourniture'],
      nouveau : true
      })
  }
    

}
