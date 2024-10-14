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
        title.textContent = 'Meu Card'
        title.style.padding = '18px'
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