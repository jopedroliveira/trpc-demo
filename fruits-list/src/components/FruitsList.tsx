'use client';
import React, { useEffect, useState } from 'react';

type Fruit = { id: number; name: string };

export function FruitsList() {
  const [fruits, setFruits] = useState<Fruit[]>([]);

  const fetchFruits = async () => {
    await fetch('/api/fruits', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setFruits(data));
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <div className="py-5 bg-violet-200 p-3 rounded-lg shadow-lg w-full h-fit">
      <button
        className="bg-violet-600 hover:bg-violet-700 rounded h-10 shadow-md active:shadow-sm shadow-violet-900/50 w-fit p-2"
        onClick={() => fetchFruits()}
      >
        Fetch Fruits
      </button>
      <ol className="py-10">
        {fruits?.map((fruit) => (
          <li key={fruit.id} className="py-2">
            <h1 className="text-xl text-orange">
              {fruit.id} {fruit.name}
            </h1>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default FruitsList;
