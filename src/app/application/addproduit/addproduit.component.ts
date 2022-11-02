import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  lesCategories: string[] = [
    'Fourniture', 'Vêtements', 'Accessoires', 'Informatique', 'Meubles'];

    productForm: FormGroup = new FormGroup({
      reference:new FormControl(0, {nonNullable:true}),
      libelle: new FormControl('', {nonNullable:true}),
      madeIn: new FormControl('Tunisie', {nonNullable:true}),
      categorie: new FormControl('Accessoires', {nonNullable:true}),
      nouveau : new FormControl(true, {nonNullable:true})
      });
      

  constructor() { }

  ngOnInit(): void {
  }
  onSubmitForm(){
    console.log(this.productForm.value);
    console.log(this.productForm.value.reference);
    console.log(this.productForm.value['libelle']);
    console.log(this.productForm.get('madeIn')?.value);
    console.log(this.productForm.controls['categorie'].value);
  }
  onReset(){
    this.productForm.reset();
  }
    

}
