
// Aqui começa a função para pegar os estados no site do ibge, e transformar a formatação de texto para html
function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

        for( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    } )
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`


    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        
        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false

    } )

}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities) 

// Aqui termina a função de pegar estado e cidade




// aqui começam os itens de coleta
// vamos pegar todas as LIs

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)

}



    const collectedItems = document.querySelector("input[name=items]")

    // variavel: quais são os itens selecionados.  abaixo
    let selectedItems = []


    function handleSelectedItem(event) {

        const itemLi = event.target

        // adiocionar ou remover uma classe com javascript [deixa o item selecionado com 1 click e com outro remove a seleção]
        itemLi.classList.toggle("selected")

        const itemId = itemLi.dataset.id


        // para verificar no terminal do vs code se os itens estão voltando
        // console.log('ITEM ID: ', itemId)

        
        // verificar se existem itens selecionados, se sim
        // pegar os itens selecionados
        const alreadySelected = selectedItems.findIndex( item => {
            const itemFound = item == itemId  //isso será verdadeiro ou falso. true or false
            return itemFound
        })


        // ja ja tiver selecionado, 
        if(alreadySelected >=0 ) {
            // tirar da seleção
            const filteredItems = selectedItems.filter( item => {
                const itemIsDifferent = item != itemId //false
                return itemIsDifferent
            })

            selectedItems = filteredItems
        } else {
            // se não tiver selecionado, adicionar a seleção
            selectedItems.push(itemId)
        }

        // para verificar no terminal do vs code se os itens estão voltando
        // junto com o comando da linha 86
        // console.log('selectedItems: ', selectedItems)

        // atualizar o campo escondido com os itens selecionados
        collectedItems.value = selectedItems

    }

    
    