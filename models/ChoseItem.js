import { fetchProductData } from "../utils/callData.js";

export let tryOn = async (productId) => {
    let data;
    try {
        data = await fetchProductData();
    } catch (error) {
        console.error(error);
        return;
    }
    const cartItem = data.tabPanes.find(item => String(item.id) === String(productId));
    if (cartItem){
        let targetElement;
        switch (cartItem.type) {
            case 'topclothes':
                targetElement = document.querySelector('.bikinitop');
                break;
            case 'botclothes':
                targetElement = document.querySelector('.bikinibottom');
                break;
            case 'shoes':
                targetElement = document.querySelector('.feet');
                break;
            case 'handbags':
                targetElement = document.querySelector('.handbag');
                break;
            case 'necklaces':
                targetElement = document.querySelector('.necklace');
                break;
            case 'hairstyle':
                targetElement = document.querySelector('.hairstyle');
                break;
            case 'background':
                targetElement = document.querySelector('.background');
                break;
            default:
                console.error('Unknown type');
                return;
        }
        if (targetElement) {
            targetElement.style.backgroundImage = `url(${cartItem.imgSrc_png})`;
            if (cartItem.type === 'topclothes') {
                document.querySelector('.bikinibottom').style.display = 'none'; // ��n phần tử đang chọn
            }
            targetElement.style.display = 'block'; // Hiển thị phần tử nếu đang bị ẩn
        } else {
            console.error('Target element not found');
        }
    }
}
window.tryOn = tryOn;