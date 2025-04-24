import React from 'react';
import Calendar from '../../components/Calendar';
import CategoryTodo from '../../components/CategoryTodo';

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">📅 My Todo Calendar</h1>
      <Calendar />
      <CategoryTodo />
    </div>
    
  );
};

export default MainPage;

