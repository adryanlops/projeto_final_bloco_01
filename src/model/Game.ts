export abstract class Game {

    private _nome: string;
    private _genero: string;
    private _tipo: number;
    private _preco: number;
    
    
    constructor(nome: string, genero: string, tipo: number, preco: number ) {
        this._nome = nome;
        this._genero = genero;
        this._tipo = tipo;
        this._preco = preco;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }
    
    public get genero(): string {
        return this._genero;
    }
    
    public set genero(genero: string) {
        this._genero = genero;
    }

    public get tipo(): number {
        return this._tipo;
    }
    
    public set tipo(tipo: number) {
        this._tipo = tipo;
    }


    public get preco(): number {
        return this._preco;
    }
    
    public set preco(preco: number) {
        this._preco = preco;
    } 
    
    public visualizar(): void {

        let genero: string = this._genero;
        let disponivel = "";

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Jogo de Desktop";
                break;
            case 2:
                tipo = "Jogo de Console";
                break;
        }

        
        console.log("\n\n*****************************************************");
        console.log("Dados do Jogo:");
        console.log("*****************************************************");
        console.log("Nome do Jogo: " + this._nome);
        console.log("Gênero: " + genero);
        console.log("Tipo: " + this._tipo);
        console.log("Disponibilidade: " + disponivel);
        console.log("Preço: " + this._preco.toFixed(2));
        console.log("*****************************************************\n");

    }
    

}