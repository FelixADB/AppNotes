function addNote(){
    const noteInput = document.getElementById('noteInput');
    const noteList = document.getElementById('noteList');

    if(noteInput.value.trim() !== ""){ //.trim borra los espacios en blanco a la derecha e izquierda
        const newNote = document.createElement('li');
        newNote.textContent = noteInput.value;
        noteList.appendChild(newNote);
        noteInput.value = "";
    }
    else{
        alert("Por favor, escriba una nota antes de agregar xd")
    }
}