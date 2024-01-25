const categories = document.querySelector('.category');
const sec_03_box_each = document.querySelectorAll('#sec_03_box_each_label');

categories.addEventListener('click', function(event) {
    console.log(event);

    const filter = event.target.dataset.category;
    console.log(filter);

    sec_03_box_each.forEach((sec_03_box_each)=>{

        if (filter === 'All' || filter === sec_03_box_each.dataset.type){
            sec_03_box_each.style.display = 'block';
        }
        else{
            sec_03_box_each.style.display = 'none';
        }

        if(filter == null) {
            return;
        }
    })
    
    const active_button = document.querySelector('.category_selected');
    active_button.classList.remove('category_selected');
    event.target.classList.add('category_selected');
    console.log(event.target); 
})


