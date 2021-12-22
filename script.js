if(localStorage.getItem('htmlLayout') !== null) {
        document.querySelector('main').innerHTML = localStorage.getItem('htmlLayout')
    }


const item = document.querySelector('.image');

item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
     
    }, 0);
}
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


document.querySelectorAll('.cover-div').forEach(box => {
  box.addEventListener('dragenter', dragEnter)
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragleave', dragLeave);
  box.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
  }
  
  function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
  }
  
  function dragLeave(e) {
    e.target.classList.remove('drag-over');
  }
  
  function drop(e) {
    // e.target.appendChild(plusIcon)
    let mainTarget = e.target
    if(e.target.nodeName == 'I') {
      mainTarget = e.target.parentElement
    }
    mainTarget.innerHTML = ''
    mainTarget.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    mainTarget.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide'); 
    document.querySelectorAll('.box').forEach((el)=>{
      if(mainTarget !== el ) {
        el.innerHTML = `<i class="fa fa-plus-circle" style="font-size:36px ; color: grey;"></i>` 
      }
    })
 
}

document.querySelector('.finish button').addEventListener('click', () => {
  localStorage.setItem('htmlLayout', document.querySelector('main').innerHTML)
})
