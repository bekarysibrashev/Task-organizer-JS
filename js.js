
const circles = document.querySelectorAll('.circle')
const createCart = document.getElementById('create_cart')
const cartContainer = document.getElementById('cartContainer')
const text = document.getElementById('heading_name')
let addTask = document.querySelectorAll('.addNewTask')

let state = '' 
let cart = []
let counter = 0

circles.forEach(function(el) {
    el.addEventListener('click', function(){
        const selected = document.querySelector('.circle_selected');
        // selected.id = el.target.id
        selected.id = el.id
        state = selected.id
        // console.log(state)  
        // console.log('1')
    })
} )

function cartCreater(){
    if(state && text.value !== ''){
        // console.log('cart created')
        const newCart = document.createElement('div');
        newCart.className = 'cart'
        counter += 1
        newCart.id = counter

        const newLine = document.createElement('div')
        newLine.className = 'line'
        newLine.id = state


        const title = document.createElement('h1')
        title.textContent = text.value
        const titleBlock = document.createElement('div')
        titleBlock.className = 'card_title'

        const deleteBtn = document.createElement('img')
        deleteBtn.src = 'img/icomoon-free_bin.svg'
        deleteBtn.id = 'remove_card'

        titleBlock.appendChild(title)
        titleBlock.appendChild(deleteBtn)

        const btnBlock = document.createElement('div')
        const btn = document.createElement('button')
        btnBlock.className = 'btn'
        btn.textContent = 'Add new task'
        btn.className = 'addNewTask' 
        btn.classList.add('shadow')
        
        btn.id = counter
        btnBlock.appendChild(btn)


    
        newCart.appendChild(newLine)
        newCart.appendChild(titleBlock)
        newCart.appendChild(btnBlock)

        cart.push(newCart)
        cartContainer.appendChild(newCart)
        text.value = ''
    }else{
        console.log('error')
    }

}

let cart_id = null

function createTask(id){
    cart.forEach(function(cart_){
        console.log('carts')
        if(cart_.id == id){
            cart_id = cart.indexOf(cart_)
            console.log(`${cart_id} =-------`)
        }
    })

    console.log(`${id} id`)
    const task = document.createElement('div')
    task.className = 'task'
    task.classList.add('shadow')

    const title = document.createElement('h3')
    title.textContent = prompt('task name?')
    const del = document.createElement('button')
    del.className = 'delete_task'
    del.textContent = '-'



    task.appendChild(title)
    task.appendChild(del)

    cart[cart_id].appendChild(task)
    
}   



function update(){
    return addTask = document.querySelectorAll('.addNewTask')
}




document.addEventListener('DOMContentLoaded', function() {
    createCart.addEventListener('click', cartCreater);

    cartContainer.addEventListener('click', function(event) {
        const btn = event.target.closest('.addNewTask');
        if (btn) {
            createTask(btn.id);
        }




        let deleteButtons = document.querySelectorAll('.delete_task');

        deleteButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                // Получаем родительский элемент .task и удаляем его
                var taskElement = button.closest('.task');
                if (taskElement) {
                    taskElement.remove();
                }
            });
        });



        let deleteCard = document.querySelectorAll('#remove_card')

        deleteCard.forEach(function(img){
            img.addEventListener('click', function(){
                var el = img.closest('.cart')
                if (el){
                    el.remove()
                }
            })
            
        })

        
    });
});

