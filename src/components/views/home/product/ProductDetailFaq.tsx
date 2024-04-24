"use client";

import Question from "@/components/utils/questionanswer";
import { useState } from "react";
import Reviews from "./Reviews";
import { Product } from "@/interface";

type Props = {
  // data: CarouselProps[];
  data: Product | undefined;
};

interface Faq {
  id: number;
  question: string;
  answer: string;
}

export type FaqArray = Faq[];

export default function ProductDetailFaq({ data }: Props) {
  const dataArray: FaqArray | undefined = data?.questionsAndAnswers;
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenQuestionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="space-y-4 mx-1 py-8">
      {dataArray?.map((faqItem) => (
        <div key={faqItem.id}>
          <Question
            key={faqItem.id}
            question={faqItem.question}
            answer={faqItem.answer}
            isOpen={faqItem.id === openQuestionId}
            onToggle={() => handleToggle(faqItem.id)}
          />
        </div>
      ))}

      <Reviews
        data={data}
        isOpen={0 === openQuestionId}
        onToggle={() => handleToggle(0)}
      />
    </div>
  );
}
