import readlinesync = require("readline-sync");
import { GameController } from "./src/controller/GameController";
import { JogoDesktop } from "./src/model/JogoDesktop";

export function main() {


    let game: GameController = new GameController();
    
    let nome, genero: string;
    let preco, tipo: number;
    let requisitosMinimos: { so: string; espaco: number; ram: number };
    const tiposJogos = ["Desktop", "Console"];

    
    const jogo: JogoDesktop = new JogoDesktop("The Witcher 3", 99.99, 1, "RPG", { so: "Windows 10", espaco: 50, ram: 8 });
    
    let opcao: number;
    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                     Gamer-Pede                      ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Listar todos os jogos                ");
        console.log("            2 - Buscar jogo por nome                 ");
        console.log("            3 - Cadastrar jogo                       ");
        console.log("            4 - Comprar jogo                         ");
        console.log("            5 - Atualizar dados do jogo              ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\nGame-Pede - Seu brechó de jogos!!");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nListar todos os jogos\n\n");

                game.listarTodas();
                
                keyPress();
                break;
            case 2:
                console.log("\n\nBuscar dados do jogo por nome\n\n");

                break;
            case 3:
                console.log("\n\nComprar jogo por nome\n\n");

                break;
            case 4:
                console.log("\n\nVender jogo\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");
                
                keyPress();
                break;
        }
    }

}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
  }


main();