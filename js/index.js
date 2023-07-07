const loadData = async (value) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${value}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const displayData =(item)=>{
  
    item.forEach(data => {
      console.log(data);
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="card card-compact w-96 bg-base-100 shadow-xl p-5">
            <figure><img class= "" src="${data.image}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${data.brand} ${data.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button id="details-btn" class="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        `
      const parent = document.getElementById('search-body');
      parent.appendChild(div);
      

    });
};
const showData = (item) => {
 
  const items=item.data.slice(0,10);
  document.getElementById('search-body').innerText = '';
  if (item.data.length > 0) {
    displayData(items);
  }
  else {
    const div = document.createElement('div');
    div.innerHTML = `
        <h2>No Result Found<h2>
        `
    const parent = document.getElementById('search-body');
    parent.appendChild(div);
  }
  if(item.data.length > 10){
    document.getElementById('show-all').classList.remove('hidden');
  }

}

const searchPhone = async ()=>{
  document.getElementById('spinner').classList.remove('hidden');
  const searchData = document.getElementById('input-field').value;
  const data=  await loadData(searchData);
  console.log(data);
  showData(data);
  document.getElementById('spinner').classList.add('hidden');
}

const showAll = async ()=>{
  document.getElementById('search-body').innerText = '';
  document.getElementById('spinner').classList.remove('hidden');
  const searchData = document.getElementById('input-field').value;
  const data=  await loadData(searchData);
  displayData(data.data);
  document.getElementById('show-all').classList.add('hidden');
  document.getElementById('spinner').classList.add('hidden');
  
}

