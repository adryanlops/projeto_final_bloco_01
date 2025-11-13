export class Game {

    private _nome: string;
    private _genero: string;
    private _disponivel: boolean = true;
    private _preco: number;
    
    
    constructor(nome: string, preco: number, genero: string, disponivel: boolean = true) {
        this._nome = nome;
        this._genero = genero;
        this._preco = preco;
        this._disponivel = disponivel;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get disponivel(): boolean {
        return this._disponivel;
    }
    
    public set disponivel(disponivel: boolean) {
        this._disponivel = disponivel;
    }

    public get genero(): string {
        return this._genero;
    }
    
    public set genero(genero: string) {
        this._genero = genero;
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

        if(this._disponivel === true){ 
            disponivel = "Disponível";
        } else {
            disponivel = "Indisponível";
        }
        
        console.log("\n\n*****************************************************");
        console.log("Dados do Jogo:");
        console.log("*****************************************************");
        console.log("Nome do Jogo: " + this._nome);
        console.log("Gênero: " + genero);
        console.log("Disponibilidade: " + disponivel);
        console.log("Preço: " + this._preco.toFixed(2));
        console.log("*****************************************************\n");

    }
    

}