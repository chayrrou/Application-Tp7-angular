export class Produit {
    constructor(
        public reference: number,
        public libelle: string,
        public nouveau: boolean,
        public madeIn: string,
        public categorie: string) {
    }
}
