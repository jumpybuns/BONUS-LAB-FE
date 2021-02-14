import React, { useState } from 'react';

export const useForm = () => {
  const [form, setForm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Receivers
          <input type="text" />
        </label>
        <input
          type="submit"
          value={{ form }}
          onChange={(e) => setForm(e.target.value)}
        />
      </form>
    </>
  );
};
