"use client";
import React from "react";
import Question from "@/components/utils/questionanswer";
import faqData from "./faqdata";
import { useState } from "react";

export default function ReturnExchange() {
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenQuestionId((prevId) => (prevId === id ? null : id));
  };
  return (
    <div>
      <div className="space-y-4 mx-1 py-8">
        <h2 className="md:text-2xl max-lg2:text-4xl text-gray-700">
          Return & Exchange
        </h2>
        {faqData.map((faq, index) => (
          <Question
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={faq.id === openQuestionId}
            onToggle={() => handleToggle(faq.id)}
          />
        ))}
      </div>
    </div>
  );
}
