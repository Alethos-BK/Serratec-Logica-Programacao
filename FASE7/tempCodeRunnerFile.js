var molho = prompt(`Escolha 1 tipo de molho: 1-não quero molho // 2- barbecue (R$1,50)// 3- cheddar (R$2,00)//4- ketchup (R$0,90)//
                     5- molho especial (R$3,00)`)
var valorMolho;
var mensagem;

switch(molho){
  case "1": valorMolho = 0.00, mensagem = "Sem molho";break;
  case "2": valorMolho = 2.00;break;
  case "3": valorMolho = 1.50;break;
  case "4": valorMolho = 0.90;break;
  case "5": valorMolho = 3.00;break;

}
