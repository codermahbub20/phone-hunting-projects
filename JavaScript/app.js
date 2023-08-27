const loadPhone = async (searchText) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await response.json();
    const phones = data.data;
    displayPhones(phones);
}


const displayPhones = (phones) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    phones.forEach(phone => {
        console.log(phone);
        // Create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 p-0 md:p-8 lg:p-4 bg-gray-100 mb-4 container mx-auto gap-0 md:gap-6 lg-gap-4 mt-4 shadow-xl`;
        phoneCard.innerHTML = `
    <figure class="px-10 pt-10">
         <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
        <button class="btn btn-primary">Buy Now</button>
     </div>
    </div>
    `
    phoneContainer.appendChild(phoneCard);
    });
}


const handleSearch = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText);
}

