"use client";
import React from "react";
import Question from "@/components/utils/questionanswer";
import { useState } from "react";
import { FAQPage } from "@/lib/helpers";

export default function QuestionsSection({
  section: { title, questions },
}: {
  section: FAQPage["question_sections"]["0"];
}) {
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenQuestionId((prevId) => (prevId === id ? null : id));
  };
  return (
    <div>
      <div className="space-y-4 mx-1 py-8">
        <h2 className="md:text-2xl max-lg2:text-4xl text-gray-700">{title}</h2>
        {questions.map((faq, index) => (
          <Question
            key={index}
            question={faq.question}
            answer={faq.answer}
            url={/contact us/i}
            isOpen={index === openQuestionId}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}
