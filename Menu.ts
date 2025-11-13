import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                     Game-Pede                       ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Listar todos os jogos                ");
        console.log("            2 - Buscar jogo por nome                 ");
        console.log("            3 - Comprar jogo                         ");
        console.log("            4 - Vender jogo                          ");
        console.log("            5 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 5) {
            console.log("\nGame-Pede - Seu brechó de jogos!!");
            break;
        }

        switch (opcao) {
            case 1:
                console.log("\n\nListar todos os jogos\n\n");

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

                break;
        }
    }

}
 

main();