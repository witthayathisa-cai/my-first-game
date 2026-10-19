import React, { useState } from 'react';

export default function NumberMatchingGame() {
  // จำลองข้อมูลคำถาม (อ้างอิงจากแผนการสอนวันที่ 1: นับภาพสิ่งของจับคู่ตัวเลข 1-10 และ ๑-๑๐)
  const [currentQuestion] = useState({
    itemImage: '✏️✏️✏️', // ตัวอย่างภาพสิ่งของ (ดินสอ 3 แท่ง)
    itemCount: 3,
    options: [2, 3, '๓', 5] // ตัวเลือกมีทั้งเลขอารบิกและเลขไทย
  });

  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');

  // ฟังก์ชันตรวจสอบคำตอบเมื่อเด็กกดเลือกตัวเลข
  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === currentQuestion.itemCount || selectedOption === '๓') {
      setFeedback('🎉 เก่งมากค่ะ! ถูกต้องนะคะ');
      setScore(score + 1);
    } else {
      setFeedback('💡 อุ๊ย! ลองนับใหม่อีกรอบนะจ๊ะ');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-100 p-6 font-sans">
      {/* ส่วนหัวข้อเกม */}
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-purple-700">
          สวนสัตว์พาเพลิน: จับคู่ภาพกับตัวเลข[cite: 4, 10]
        </h1>
        <p className="text-gray-600 mt-2">หน่วย: แรกรับประทับใจ (อนุบาล 5 ขวบ)[cite: 1, 2]</p>
      </header>

      {/* พื้นที่เล่นเกมหลัก */}
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-lg text-center border-4 border-yellow-300">
        {/* แสดงภาพสิ่งของที่ให้เด็กนับ */}
        <div className="text-7xl mb-6 p-4 bg-yellow-50 rounded-2xl inline-block">
          {currentQuestion.itemImage}
        </div>
        
        <p className="text-xl font-medium text-gray-700 mb-6">
          ช่วยนับและเลือกตัวเลขที่ถูกต้องกันเถอะค่ะ!
        </p>

        {/* ปุ่มตัวเลือกคำตอบ */}
        <div className="grid grid-cols-2 gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              className="bg-pink-400 hover:bg-pink-500 text-white text-3xl font-bold py-5 rounded-2xl shadow-md transition-transform transform hover:scale-105 active:scale-95"
            >
              {option}
            </button>
          ))}
        </div>

        {/* ส่วนแสดงผลการตอบ (Feedback) */}
        {feedback && (
          <div className="mt-6 text-2xl font-semibold text-green-600 animate-bounce">
            {feedback}
          </div>
        )}
      </div>

      {/* แถบแสดงคะแนนดาวสะสม */}
      <footer className="mt-6 text-xl font-bold text-orange-500 bg-white px-6 py-2 rounded-full shadow-md">
        ⭐ คะแนนดาวสะสม: {score} ดวง
      </footer>
    </div>
  );
}