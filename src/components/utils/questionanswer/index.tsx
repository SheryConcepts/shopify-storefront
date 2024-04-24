"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

interface QuestionProps {
  question: string;
  answer: string;
  url?: RegExp | null;
  isOpen: boolean;
  onToggle: () => void;
}

function Question({ question, answer, url = null, isOpen, onToggle }: QuestionProps) {
  const contentRef = useRef<HTMLParagraphElement | null>(null);
  const [height, setHeight] = useState<string>('0');

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setHeight('0');
      }
    }
  }, [isOpen]);

  const rotatingStyle = {
    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",

  };

  let contactRegex = url;
  const answerElements = answer.split(contactRegex!).map((part, index) => {
    if (index < answer.split(contactRegex!).length - 1) {
      return (
        <span key={index}>
          {part}
          <Link href="/contactus" className="text-rose-500 underline">
            contact us
          </Link>
        </span>
      );
    } else {
      return <span key={index}>{part}</span>;
    }
  });

  return (
    <div className="group rounded-lg bg-gray-50 p-6 pb-3">
      <div
        className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
        onClick={onToggle}
      >
        <h2 className="font-medium">{question}</h2>
        <div style={rotatingStyle}>
          {isOpen ? (
            <AiOutlineMinusCircle className="h-5 w-5 mx-1 text-gray-900" />
          ) : (
            <AiOutlinePlusCircle className="h-5 w-5 mx-1 text-gray-900" />
          )}
        </div>
      </div>

      <p
        ref={contentRef}
        className="pt-3 leading-relaxed text-gray-700 overflow-hidden transition-height duration-500"
        style={{ height: height }}
      >
        {answerElements}
      </p>
    </div>
  );
}

export default Question;