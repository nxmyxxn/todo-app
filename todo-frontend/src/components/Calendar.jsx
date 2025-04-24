import React from 'react';

const Calendar = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-lg font-semibold mb-2">April 2025</h2>
      <div className="grid grid-cols-7 gap-2">
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((day, idx) => (
          <div key={idx} className="text-center font-medium">{day}</div>
        ))}
        {/* 임시 날짜 박스 */}
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="h-20 bg-gray-100 text-center p-2 rounded">
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
