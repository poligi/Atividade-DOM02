/*Utilize os arquivos de base disponibilizados para realizar os exercícios
propostos. Manipule os elementos HTML utilizando o querySelectorAll e o
setAttribute, aplicando as alterações necessárias para que fique
semelhante a imagem abaixo. 
*/

/* 1. Capture, armazene e manipule todos os elementos de classe "card".
Modifique os estilos necessários nesses elementos para que fique
semelhante a imagem. 
*/

const styleCard = document.querySelectorAll('.card');

function estilizarCard() {
    styleCard.forEach((card) => {
        card.style.backgroundColor = 'orange';
        card.style.color = 'white';
        card.style.padding = '15px';
        card.style.margin = '10px';
        card.style.alignItems = 'center';
    });
}
estilizarCard();

/* 2. Capture, armazene e manipule todos os elementos de classe
"titulo-card". Modifique os estilos necessários nesses elementos
para que fique semelhante a imagem. 
*/

/* 3. Modifique o texto dos títulos nos cards para "Meu card". */

const styleTitle = document.querySelectorAll('.titulo-card')

function estilizarTitulo() {
    styleTitle.forEach((title) => {
        title.style.color = 'rgb(43, 56, 91)';
        title.style.padding = '18px'

        //3
        title.textContent = 'Meu Card'
    })
}
estilizarTitulo();

/*4. Capture, armazene e manipule todos os elementos de classe
"descricao-card". Modifique os estilos necessários nesses elementos
para que fique semelhante a imagem.

5. Modifique o texto das descrições nos cards para "Descrição
modificada pelo JavaScript". 
*/

const styleDescription = document.querySelectorAll('.descricao-card')

function estilizarDescricao() {
    styleDescription.forEach((description) => {
        description.style.padding = '10px';

        //5
        description.textContent = 'Descrição modificada pelo JavaScript';
    })
}
estilizarDescricao()

/*6. Capture, armazene e manipule todos os elementos de classe
"botao-editar". Modifique o estilo desses elementos para que fique
semelhante a imagem. 

8. Adicione o atributo 'onclick' nos elementos de classe “botão-editar”.
Ao clicar nesses elementos, deve chamar a função 'editarCard()'.
Essa função deve mostrar um alerta com a mensagem "Clicou em
Editar!".
*/

const styleEditButton = document.querySelectorAll('.botao-editar')

function estilizarBotaoEditar() {
    styleEditButton.forEach((button) => {
        button.style.backgroundColor = 'green';
        button.style.color = 'white'
        button.style.padding = '10px'
        button.style.borderRadius = '15px'

        //8
        button.onclick = function editarCard() {
            alert('Clicou em editar!')
        }
    })
}
estilizarBotaoEditar()

/* 7. Capture, armazene e manipule todos os elementos de classe
"botao-apagar". Modifique o estilo desses elementos para que fique
semelhante a imagem. 

9. Adicione o atributo 'onclick' nos elementos de classe
“botão-apagar”. Ao clicar nesses elementos deve chamar a função
'apagarCard()'. Essa função deve perguntar ao usuário se ele tem
certeza da exclusão do card. Se o usuário confirmar a exclusão deve
mostrar um alerta com a mensagem "Confirmado!", se não deve
mostrar a mensagem "Cancelou!".
*/

const styleDeleteButton = document.querySelectorAll('.botao-apagar')

function estilizarBotaoApagar() {
    styleDeleteButton.forEach((button) => {
        button.style.backgroundColor = 'red'
        button.style.color = 'white'
        button.style.padding = '10px'
        button.style.borderRadius = '15px'

        //9
        button.onclick = function apagarCard() {
            confirm('Atenção! Tem certeza que quer excluir esse card?')

            if (confirm === true) {
                alert('Confrimado!')
            } else {
                alert('Cancelou!')
            }
        }
    })
}
estilizarBotaoApagar()
