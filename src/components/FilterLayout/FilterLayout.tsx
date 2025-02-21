import React, { useCallback, useEffect, useState } from 'react';
import {restaurantMenu} from "@/app/lib/data"; // Adjust the import path based on your file structure
import { getUniqueCategories } from "@/app/lib/data";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const FilterLayout = () => {
    // Get unique categories from the restaurant menu
    const categories = getUniqueCategories(restaurantMenu);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    // State to track selected categories
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleClick = useCallback((selectedCategory: string) => {
        setSelectedCategories(prev => {
            // Toggle the selected category
            if (prev.includes(selectedCategory)) {
                return prev.filter(category => category !== selectedCategory); // Remove if already selected
            } else {
                return [...prev, selectedCategory]; // Add if not selected
            }
        });
    },[]);

    // Update URL parameters
    useEffect(()=>{
        const updateUrl = () => {
            const params = new URLSearchParams(searchParams.toString());
            // Join selected categories into a comma-separated string
            params.set('category', selectedCategories.join(','));
            replace(`${pathname}?${params.toString()}`);
        };
        updateUrl();

    }, [selectedCategories, searchParams, pathname, replace])

    // Call updateUrl whenever selectedCategories changes
    
    return (
        <div className='sticky top-0'>
            <h2 className="text-xl font-bold mb-4">Filter</h2>
            <ul className="list-disc pl-5">
                {categories.map((category, index) => (
                    <li 
                        key={index} 
                        className={`text-lg cursor-pointer ${selectedCategories.includes(category) ? 'font-bold text-lime-600' : ''}`} 
                        onClick={() => handleClick(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterLayout;