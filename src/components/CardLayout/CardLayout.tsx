import { RestrauntMenu } from '@/app/lib/definitions';
import React from 'react';
import Counter from '../Counter/Counter';
import Image from 'next/image';

interface CardLayourProps{
    cards:RestrauntMenu[],
    // searchquery:{}
}

const CardLayout:React.FC<CardLayourProps> = ({ cards}) => {
    return (
        <div className="flex flex-wrap justify-around p-4">
            {cards.map(card => (
                <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-white transition-transform transform hover:scale-105" key={card.id}>
                    <div className='relative w-full h-48'>
                    <Image className="object-cover" fill src={card.image} alt={card.name} />
                    </div>
                    <div className="px-6 py-4">
                        <h3 className="font-bold text-xl mb-2">{card.name}</h3>
                        <p className="text-gray-700 text-base">{card.description}</p>
                    </div>
                    <div className="px-6 flex gap-5 py-4 justify-center">
                        <Counter />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardLayout;