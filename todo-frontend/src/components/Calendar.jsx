import React from 'react';

const Calendar = ({ onDateSelect, selectedDate }) => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handleDateClick = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    onDateSelect(date);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-lg font-semibold mb-2">
        {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
      </h2>
      <div className="grid grid-cols-7 gap-2">
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((day, idx) => (
          <div key={idx} className="text-center font-medium">{day}</div>
        ))}
        {/* 빈 칸 채우기 */}
        {Array.from({ length: firstDayOfMonth }, (_, i) => (
          <div key={`empty-${i}`} className="h-20"></div>
        ))}
        {/* 날짜 칸 */}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const isSelected = selectedDate && 
            selectedDate.getDate() === day && 
            selectedDate.getMonth() === currentMonth && 
            selectedDate.getFullYear() === currentYear;
          
          return (
            <div 
              key={day} 
              onClick={() => handleDateClick(day)}
              className={`h-20 bg-gray-100 text-center p-2 rounded cursor-pointer hover:bg-gray-200 transition-colors
                ${isSelected ? 'bg-red-500 text-white hover:bg-blue-600' : ''}`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
