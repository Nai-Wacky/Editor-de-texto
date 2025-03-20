function buscarTexto() {
    let searchValue = document.getElementById("searchText").value;
    let editor = document.getElementById("editor");
    let content = editor.innerHTML;
    
    if (searchValue.trim() !== "") {
        let regex = new RegExp(searchValue, "gi");
        let highlighted = content.replace(regex, match => `<mark>${match}</mark>`);
        editor.innerHTML = highlighted;
    }
}

function reemplazarTexto() {
    let searchValue = document.getElementById("searchText").value;
    let replaceValue = document.getElementById("replaceText").value;
    let editor = document.getElementById("editor");
    let content = editor.innerHTML;
    
    if (searchValue.trim() !== "") {
        let regex = new RegExp(searchValue, "gi");
        let replaced = content.replace(regex, replaceValue);
        editor.innerHTML = replaced;
    }
}

function convertirMinusculas() {
    let editor = document.getElementById("editor");
    editor.innerHTML = editor.innerHTML.toLowerCase();
}

function convertirMayusculas() {
    let editor = document.getElementById("editor");
    editor.innerHTML = editor.innerHTML.toUpperCase();
}