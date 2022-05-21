
showNotes();

//if user add a note,add it to local storage.
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj ={
        title:addTitle.value,
        text:addTxt.value
    };

    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = '';
    addTitle.value = '';

    console.log(notesObj);
    
  showNotes();

});

//function to show elements from local storage

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function (element, index) {

        html += ` 
         
    <div class="noteCard mx-2 my-2 card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
        </div>
     </div>
   `;


    });

let notesElm = document.getElementById('notes');
if(notesObj.length != 0){
notesElm.innerHTML = html;

}
else{
    notesElm.innerHTML = `Nothing to show! use "Add a note" section above to add note`
}
}

//function to delete a note

function deleteNote(index){
    console.log('deleting.....',index)
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener('input',function(){
    let inputValue = searchTxt.value.toLowerCase(); 
    console.log('input event fired',inputValue  );
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerHTML;
        // console.log(cardTxt);
        if(cardTxt.includes(inputValue)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';

        }
    })
})