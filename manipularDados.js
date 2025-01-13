const listas = document.querySelectorAll('ul');
const dadosJson = await getdataJson();
let dadosxml = await getdataXml();
const rows = dadosxml.getElementsByTagName('row');
console.log(rows);

//Pega os dados do arquivo JSON
async function getdataJson(){
    const response = await fetch('dados.json');
    const data = await response.json();
    return data;
}

async function postData(params) {
    
}

//Pega os dados do arquivo XML
async function getdataXml(){
    const response = await fetch('dados (2).xml'); 
    const text = await response.text(); 
    const parser = new DOMParser(); 
    const xmlDoc = parser.parseFromString(text, "text/xml");
    return xmlDoc;
}


for (let i = 0; i < dadosJson.length; i++) {
    listas[0].innerHTML += `<li>${dadosJson[i].dia} - ${dadosJson[i].valor.toFixed(2)}</li>`
}

for (let i = 0; i < rows.length; i++) {
    const valor = rows[i].getElementsByTagName('valor')[0].textContent;
    const dia = rows[i].getElementsByTagName('dia')[0].textContent;
    listas[1].innerHTML += `<li>${dia} - ${valor}</li>`
}

