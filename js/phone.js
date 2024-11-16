const loadPhone = async(searchText,isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
 const data = await res.json()
 const phones =data.data

 displayPhones(phones,isShowAll)
}

const displayPhones = (phones,isShowAll) =>{
// console.log(phones)
const phoneContainer = document.getElementById('phone-container')
//clear phone container cards before adding new cards
phoneContainer.textContent = '';

//display show all button if there are more than 12 phones
const showAllContainer = document.getElementById('showallContainer')
if (phones.length>12 && !isShowAll){
    showAllContainer.classList.remove('hidden')
}
else{
    showAllContainer.classList.add('hidden')
}
console.log('is show all',isShowAll)
//slice those phones because of want to show 10 or 20 (limited elements)by using slice if not show all
if (!isShowAll){
    phones = phones.slice(0,12)
}


phones.forEach(phone=>{
    console.log(phone)
    //1.create a div
    const PhoneCard = document.createElement('div')
    PhoneCard.classList =`card bg-gray-100 p-4 shadow-xl`
    PhoneCard.innerHTML = `
        <figure>
            <img
            src="${phone.image}"
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
    </div>
    `
    phoneContainer.appendChild(PhoneCard)
})

//hide loading spinner; this code written when handling with loading too much after
 toggleLoadingSpinner(false)
}
// handle search button
const handleSearch =(isShowAll) =>{
//for toggle
toggleLoadingSpinner(true)
   const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    // console.log(searchText)
    loadPhone(searchText,isShowAll)
}

//handle search recap
// const handleSearch2 =()=>{
//     //for toggleloadingspinner call after showing 
//      toggleLoadingSpinner(true)

//      //this code should be written before toggleloading spinner
//     const searchField2 = document.getElementById('search-field2')
//     const searchField2Text = searchField2.value;
//     console.log(searchField2Text) 
//      loadPhone(searchField2Text)
// }

const toggleLoadingSpinner = (isLoading) =>{
    const LoadingSpinner = document.getElementById("loadingSpinner")
   if(isLoading){
    LoadingSpinner.classList.remove('hidden')
   }
   else{
    LoadingSpinner.classList.add('hidden')
   }
}

//handle show all
const handleShowAll =() =>{
    handleSearch(true)

}


// loadPhone()