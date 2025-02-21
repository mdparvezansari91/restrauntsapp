'use client'
import { restaurantMenu, getFilteredItemsByCategory, getFilteredItemsByQuery } from "../lib/data";
import CardLayout from "@/components/CardLayout/CardLayout";
import { useSearchParams } from "next/navigation";
import Search from "@/components/Search/search";
import FilterLayout from "@/components/FilterLayout/FilterLayout";
import { Suspense } from "react";

const RestrauntMenu: React.FC = () => {
    const searchParams = useSearchParams();
    const categories = searchParams.get('category');
    const searchQuery = searchParams.get('query');
    const selectedCategories = categories ? categories.split(',') : [];

    let items = restaurantMenu;

    if (selectedCategories.length > 0) {
        items = getFilteredItemsByCategory(restaurantMenu, selectedCategories);
    }

    if (searchQuery) {
        items = getFilteredItemsByQuery(items, searchQuery);
    }

    return (
        <>
            <div className="p-10">
                <Search placeholder="Search food" />
            </div>
            <div className="flex">
                <div>
                    <Suspense fallback={<div>Loading filters...</div>}>
                        <FilterLayout />
                    </Suspense>
                </div>
                <CardLayout cards={items} />
            </div>
        </>
    );
}

// Wrap the RestrauntMenu component in a Suspense boundary
const RestrauntMenuWithSuspense: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading menu...</div>}>
            <RestrauntMenu />
        </Suspense>
    );
}

export default RestrauntMenuWithSuspense;