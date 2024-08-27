import { fetchProductData } from "../utils/callData.js";
import { renderTabContent } from "../models/ListChosen.js";

export let renderNavPills = async (tabs) => {
    const navPillsContainer = document.querySelector('.nav-pills');
    navPillsContainer.innerHTML = '';
    let data;
    try {
        data = await fetchProductData();
    } catch (error) {
        console.error(error);
        return;
    }

    // Hàm để xử lý khi click vào thẻ <a>
    const handleTabClick = (tabName) => {
        // Tìm tabType tương ứng với tabName
        const tab = tabs.find(t => t.tabName === tabName);
        if (tab) {
            // Gọi renderTabContent với tabType của tab
            renderTabContent(tab.type, data.tabPanes);
        }
    };

    tabs.forEach(tab => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = `
            <a class="nav-link" 
               href="#${tab.tabName}" 
               data-toggle="pill"
               data-tab-name="${tab.tabName}">${tab.showName}</a>
        `;
        navPillsContainer.appendChild(li); // Append vào navPillsContainer
    });

    // Xử lý sự kiện click cho các tab
    navPillsContainer.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('nav-link')) {
            const tabName = target.getAttribute('data-tab-name');
            handleTabClick(tabName);
        }
    });
}

