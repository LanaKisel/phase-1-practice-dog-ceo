console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () =>{
    let breed = document.querySelector('#breed');
    fetch(imgUrl)
    .then(res =>res.json())
    .then(result => {
        for (let dog of result.message) {
            let dogsImage = document.createElement('img')
        dogsImage.src = dog
        document.getElementById('dog-image-container').appendChild(dogsImage);}     
    }) 
    .catch(err=> console.log(err))

    fetch(breedUrl)
    .then(res=>res.json())
    .then(result =>{
        for (let dogs in result.message){
           let dogList = document.createElement('li');
         dogList.textContent = dogs  
         document.getElementById('dog-breeds').appendChild(dogList);

         dogList.addEventListener('click', ()=> {
         dogList.style.color='purple'})

         //challenge 4
         const breedDropdown = document.getElementById('breed-dropdown');
         breedDropdown.addEventListener('change', (event) =>{
         const selectValue = event.target.value;
         document.getElementById('dog-breeds').innerHTML = ''
         for (let element in result.message){
            //console.log(element)
            if (element.startsWith(selectValue)){
                let list = document.createElement('li');
                list.textContent = element;
                document.getElementById('dog-breeds').appendChild(list)
                  list.addEventListener('click', ()=>{
                      list.style.color = 'blue';
                })
         }

        //   document.getElementById('dog-breeds').innerHTML = '';
        //   Object.keys(dogs).forEach(dogs => {
        //       if (dogs.startsWith(selectedValues)) {
        //           const list = document.createElement('li');
        //           list.textContent = dogs;
        //           document.getElementById('dog-breeds').appendChild(list)
        //           list.addEventListener('click', ()=>{
        //               list.style.color = 'blue';
        //           })                  
        //       }
        //   })
        }})
        } 
    })
   .catch(err=>console.log(err))
//    const breedDropdown = document.getElementById('breed-dropdown');
//    breedDropdown.addEventListener('change', (event) =>{
//     const selectValue = event.target.value;
//     document.getElementById('dog-breeds').innerHTML = '';
//     Object.keys(dogs).forEach(dogs => {
//         if (dogs.startsWith(selectedValuse)) {
//             const list = document.createElement('li');
//             list.textContent = dogs;
//             document.getElementById('dog-breeds').appendChild(list)
//             list.addEventListener('click', ()=>{
//                 list.style.color = 'blue';
//             })
            
//         }
//     })
//    })

})























console.log("💖hey there Lana😉😉😉😉😉😉😉😉😉😉😉😉😉")