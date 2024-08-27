

export function renderTabContent(type, tabPanes) {
    const tabContentContainer = document.querySelector('.tab-content');
    tabContentContainer.innerHTML = ""; // Clear previous content

    // Tạo một row mới cho mỗi nhóm sản phẩm
    let row;

    // Lọc các tabPanes dựa trên type
    const filteredPanes = tabPanes.filter(item => String(item.type) === String(type));

    filteredPanes.forEach((item, index) => {
        // Tạo một row mới sau mỗi 4 sản phẩm
        if (index % 4 === 0) {
            row = document.createElement('div');
            row.className = 'row'; // Đặt class 'row' cho mỗi nhóm 4 sản phẩm
            tabContentContainer.appendChild(row);
        }

        // Tạo cột cho sản phẩm
        const col = document.createElement("div");
        col.className = 'col-3'; // 3 cột mỗi sản phẩm (trong 12 cột của Bootstrap)
        col.innerHTML = `
            <div class="card mb-4">
                <img class="card-img-top" src="${item.imgSrc_jpg}" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.desc}</p>
                    <button class="btn btn-primary" onclick="tryOn('${item.id}')">Thử Đồ</button>
                </div>
            </div>
        `;
        row.appendChild(col);
    });
}
