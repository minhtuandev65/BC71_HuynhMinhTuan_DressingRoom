import { renderNavPills } from "../controllers/main.js";
import { renderTabContent } from "../models/ListChosen.js";





export let fetchProductData = async () => { 
    try {
        const response = await fetch("../data/Data.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data); // Debugging.
        return data;
    } catch (error) {
        console.error(error);
    }
 }

 fetchProductData()
    .then(data => {
        renderNavPills(data.navPills);
        renderTabContent(data.tabPanes);
    })
    .catch(error => {
        // Handle the error as needed
        console.error('Failed to load data:', error);
    });
 fetchProductData();