import React, { FC, useEffect, useState } from 'react';
import Recipe from "../recipe/Recipe";

type ProductProps = IRecipeProps & {
    description: string;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
};

const Recipes: FC = () => {
    const [products, setProducts] = useState<ProductProps[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(response => response.json())
            .then(({ products }) => {
                setProducts(
                    products.map((product: ProductProps) => ({
                            id: product.id,
                            title: product.title,
                            description: product.description,
                            discountPercentage: product.discountPercentage,
                            rating: product.rating,
                            stock: product.stock,
                            brand: product.brand,
                            category: product.category,
                            thumbnail: product.thumbnail,
                            images: product.images,
                            mealType: product.category,
                            instructions: product.description,
                            image: product.thumbnail,
                            cuisine: product.brand,
                        })
                    );
            });
    }, []);

    return (
        <div>
            {
                products.map((product: ProductProps) => (
                    <Recipe
                        key={product.id}
                        id={product.id}
                        name={product.title}
                        cuisine={product.cuisine}
                        mealType={product.mealType}
                        instructions={product.instructions}
                        image={product.image}
                    />
                ))
            }
        </div>
    );
};

export default Recipes;