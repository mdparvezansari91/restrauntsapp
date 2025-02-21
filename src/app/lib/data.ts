import { v4 as uuidv4 } from "uuid";
import { RestrauntMenu } from "./definitions";

const restaurantMenu = [
    {
        name: "Spaghetti Carbonara",
        description: "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
        price: 15.00,
        category: "Pasta",
        image: "/images/menuimages/Spaghetti-Carbonara.jpg",
        isBestSeller: true,
    },
    {
        name: "Fettuccine Alfredo",
        description: "Fettuccine pasta tossed in a creamy Alfredo sauce with parmesan cheese.",
        price: 14.00,
        category: "Pasta",
        image: "/images/menuimages/Fettuccine-Alfredo.jpg",
        isBestSeller: true,
    },
    {
        name: "Tiramisu",
        description: "Coffee-flavored Italian dessert made with mascarpone cheese and cocoa.",
        price: 7.00,
        category: "Dessert",
        image: "/images/menuimages/Tiramisu.jpg",
        isBestSeller: true,
    },
    {
        name: "Margherita Pizza",
        description: "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
        price: 12.00,
        category: "Pizza",
        image: "/images/menuimages/Margherita-Pizza.jpg",
        isBestSeller: true,
    },
    {
        name: "Lasagna",
        description: "Layers of pasta, meat, cheese, and marinara sauce baked to perfection.",
        price: 16.00,
        category: "Pasta",
        image: "/images/menuimages/Lasagna.jpg",
        isBestSeller: true,
    },
    {
        name: "Bruschetta",
        description: "Grilled bread topped with a mixture of diced tomatoes, garlic, basil, and olive oil.",
        price: 8.00,
        category: "Appetizer",
        image: "/images/menuimages/Bruschetta.jpg",
        isBestSeller: true,
    },
    {
        name: "Caprese Salad",
        description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
        price: 9.00,
        category: "Salad",
        image: "/images/menuimages/Caprese-Salad.jpg",
        isBestSeller: true,
    },
    {
        name: "Panna Cotta",
        description: "Creamy Italian dessert made with sweetened cream thickened with gelatin.",
        price: 6.00,
        category: "Dessert",
        image: "/images/menuimages/Panna-Cotta.jpg",
        isBestSeller: true,
    },
    {
        name: "Pesto Pasta",
        description: "Pasta tossed in a vibrant basil pesto sauce with pine nuts and parmesan.",
        price: 13.00,
        category: "Pasta",
        image: "/images/menuimages/Pesto-Pasta.jpg",
        isBestSeller: true,
    },
    {
        name: "Seafood Risotto",
        description: "Creamy risotto cooked with shrimp, scallops, and mussels.",
        price: 20.00,
        category: "Main Course",
        image: "/images/menuimages/Seafood-Risotto.jpg",
        isBestSeller: true,
    },
    {
        name: "Garlic Bread",
        description: "Toasted bread topped with garlic butter and herbs.",
        price: 5.00,
        category: "Appetizer",
        image: "/images/menuimages/Garlic-Bread.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: false,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: false,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: 8.00,
        category: "Dessert",
        image: "/images/menuimages/Chocolate-Lava-Cake.jpg",
        isBestSeller: true,
    }
].map(item => ({ ...item, id: uuidv4() }));


const cartItems = [{

}
].map(item=>({...item, id:uuidv4()}))




const getUniqueCategories = (menu: RestrauntMenu[]): string[] => {
    const categories = menu.map(item => item.category);
    return [...new Set(categories)]

}

const getFilteredItemsByQuery = (menu: RestrauntMenu[], searchQuery: string) => {
    if (!searchQuery) {
        return menu
    }

    const filteredItems = menu.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) 
        || 
        item.description.toLocaleLowerCase().includes(searchQuery.toLowerCase()))
    return filteredItems;


}


const getFilteredItemsByCategory = (menu: RestrauntMenu[], selectedCategories: string[]) => {
    console.log("getfilters")

    if (selectedCategories.length > 0) {

        // Filter items that match any of the selected categories
        const filteredItems = menu.filter(item => selectedCategories.includes(item.category));
        console.log({ "filteredItems": filteredItems })
        return filteredItems;
    } else {
        // If no categories are selected, return all items
        return menu;
    }
}


const addToCart = ()=>{

}

export { getUniqueCategories, getFilteredItemsByCategory, getFilteredItemsByQuery,restaurantMenu, cartItems, addToCart };

