// select all classes & id

const title = document.querySelector('#title')
const author = document.querySelector('#author')
const year = document.querySelector('#year')            
const btn = document.querySelector('#btn')       
const bookList= document.querySelector('#book-list')        


// btn


btn.addEventListener('click', function(e){
  e.preventDefault();
  
  if (title.value=='' && author.value=='' && year.value=='') {
    alert('Input your data otherwise it not works')
 
  }else{
    
    const newRow= document.createElement('tr')
    
    // new title create
    
    const newTitle= document.createElement('th')
    newTitle.innerHTML= title.value
    newRow.appendChild(newTitle)
    
    // new author create
    
    const newAuthor= document.createElement('th')
    newAuthor.innerHTML= author.value
    newRow.appendChild(newAuthor)
    
    //new year create
    
    var newYear= document.createElement('th')
    newYear.innerHTML= year.value
    newRow.appendChild(newYear);
    
    
    
    
    
    
    bookList.appendChild(newRow);
  }
  
})
