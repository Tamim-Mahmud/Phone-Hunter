const loadData = async (value) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${value}`
    const res = await fetch(url);
    const data = await res.json();
    showData(data);
}
const showData = (data) => {
    data.data.forEach(i => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        `
        const parent = document.getElementById('search-body');
        parent.appendChild(div);

    });

}

document.getElementById('search-btn').addEventListener('click', function () {
    const searchData = document.getElementById('input-field').value;
    loadData(searchData);


})
