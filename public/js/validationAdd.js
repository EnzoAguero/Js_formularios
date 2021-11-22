const $ = id => document.getElementById(id)

window.onload = function () {
    console.log('Vinculado')

    $('title').addEventListener('blur', () => {
        if(!$('title').value){
            $('title').classList.add('is-invalid')
                $('error-title').innerHTML = "Debes ingresar un titulo válido"
        }else{
            $('title').classList.remove('is-invalid')
            $('title').classList.add('is-valid')
            $('error-title').innerHTML = null
        }
    })

    $('calification').addEventListener('blur', () => {
        if(!$('calification').value){
            $('calification').classList.add('is-invalid')
                $('error-calification').innerHTML = "Debes ingresar una calificacion válida"
        }else{
            $('calification').classList.remove('is-invalid')
            $('calification').classList.add('is-valid')
            $('error-calification').innerHTML = null
        }
    })

    $('awards').addEventListener('blur', () => {
        if(!$('awards').value){
            $('awards').classList.add('is-invalid')
                $('error-awards').innerHTML = "Debes ingresar un numero de premios válido"
        }else{
            $('awards').classList.remove('is-invalid')
            $('awards').classList.add('is-valid')
            $('error-awards').innerHTML = null
        }
    })

    $('date').addEventListener('blur', () => {
        if(!$('date').value){
            $('date').classList.add('is-invalid')
                $('error-date').innerHTML = "Debes ingresar una fecha válida"
        }else{
            $('date').classList.remove('is-invalid')
            $('date').classList.add('is-valid')
            $('error-date').innerHTML = null
        }
    })

    $('duration').addEventListener('blur', () => {
        if(!$('duration').value){
            $('duration').classList.add('is-invalid')
                $('error-duration').innerHTML = "Debes ingresar un tiempo válido"
        }else{
            $('duration').classList.remove('is-invalid')
            $('duration').classList.add('is-valid')
            $('error-duration').innerHTML = null
        }
    })

    $('select').addEventListener('blur', () => {
        if(!$('select').value){
            $('select').classList.add('is-invalid')
                $('error-select').innerHTML = "Debes ingresar un genero válido"
        }else{
            $('select').classList.remove('is-invalid')
            $('select').classList.add('is-valid')
            $('error-select').innerHTML = null
        }
    })
}

$("title").focus();


form.addEventListener('submit', e => {
    e.preventDefault()

    let elementsForm = $('form').elements;
    let error = false;

    for (let i = 0; i < elementsForm.length - 1; i++) {
        
        if(!elementsForm[i].value){
            elementsForm[i].classList.add('is-invalid')
            $('error-empty').innerHTML = 'Los campos señalados son obligatorios';
            error = true
        }
    }
    if(!error){
        $('form').submit()
    }
})


let formulario = document.forms["form"]

formulario.onsubmit = (e) => {
    e.preventDefault()
    let input = document.querySelectorAll('input')
    let select = document.querySelector('select')
    if(!input.value && !select.value){
        alert('que haces')
    }else{
        alert('Pelicula guardada')
    }
}


