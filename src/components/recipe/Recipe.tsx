import React, { FC, useEffect, useState } from 'react';
import Recipe, { IRecipeProps, IRecipeTypeProps } from "../recipe/Recipe";

export interface IRecipeProps {
    id: number,
    name: string,
    ingredients?: string[],
    instructions: string[],
    prepTimeMinutes?: number,
    cookTimeMinutes?: number,
    servings?: number,
    difficulty?: string,
    cuisine: string,
    caloriesPerServing?: number,
    tags?: string[],
    userId?: number,
    image: string,
    rating?: number,
    reviewCount?: number,
    mealType?: string[]
}

export type IRecipeTypeProps = IRecipeProps & { children?: React.ReactNode };

const Recipe: FC<IRecipeTypeProps> = ({
                                          id,
                                          name,
                                          mealType,
                                          cuisine,
                                          instructions,
                                          image
                                      }) => {
    return (
        <div>
            <h2>{name}. {mealType}. {cuisine}</h2>

            <img src={image} alt={name}/>

            <ul>
                {
                    instructions?.map((instruction, index) => <li key={index}>{instruction}</li>)
                }
            </ul>

        </div>
    );
};

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
};

const Products: FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(response => response.json())
            .then(({ products }) => {
                setProducts(products);
            });
    }, []);

    return (
        <div>
            {
                products.map((product: Product) => (
                    <Recipe
                        key={product.id}
                        id={product.id}
                        name={product.title}
                        mealType={[product.category]}
                        cuisine={product.brand}
                        instructions={[product.description]}
                        image={product.thumbnail}
                    />
                ))
            }
        </div>
    );
};

export default Products;