'use client';
import React, { FormEvent, useEffect, useState } from 'react';

export function AddFruitForm() {
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements[0] as HTMLInputElement;
    if (!input.value) {
      setFeedbackMessage('Empty not allowed');
      setTimeout(() => {
        setFeedbackMessage('');
      }, 4000);
      return;
    }
    fetch('/api/fruits', {
      method: 'POST',
      body: JSON.stringify({ name: input.value }),
    })
      .then((response) => response.json())
      .then(({ message }) => {
        setFeedbackMessage(message);
        setTimeout(() => {
          setFeedbackMessage('');
        }, 3000);
      });
  };

  return (
    <div className="flex flex-row py-5 bg-orange-300 p-3 rounded-lg shadow-lg w-full h-fit">
      <form
        onSubmit={handleSubmit}
        className="space-y-3 w-full"
        autoComplete="off"
      >
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-orange-900"
        >
          Fruit Name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Cherry"
          />
        </div>
        <p className="block text-xs font-light leading-6 text-orange-900 h-3">
          {feedbackMessage}
        </p>
        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 rounded h-10 shadow-md active:shadow-sm shadow-orange-900/50 p-2"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddFruitForm;
