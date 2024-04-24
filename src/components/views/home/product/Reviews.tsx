"use client";
import AverageRating from "@/components/utils/functions/averageRating";
import { Product } from "@/interface";
import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { GrStar } from "react-icons/gr";

interface ReviewsProps {
  data: Product | undefined;
  isOpen: boolean;
  onToggle: () => void;
}

function Reviews({ data, isOpen, onToggle }: ReviewsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const contentRef = useRef<HTMLParagraphElement | null>(null);
  const modalRef = useRef<HTMLParagraphElement | null>(null);
  const [height, setHeight] = useState<string>("0");

  let modalHeight = modalRef.current && modalRef.current.scrollHeight;
  useEffect(() => {
    if (modalRef.current) {
      modalHeight = modalRef.current.scrollHeight;
    }
    let totalHeight = 0;
    if (contentRef.current) {
      totalHeight += contentRef.current.scrollHeight;
      // If modal closes then remove modalheight from total height
      if (!isModalOpen) {
        totalHeight -= modalHeight!;
      }
      // If the main container is closed, set height to 0
      if (!isOpen) {
        totalHeight = 0;
      }
      setHeight(`${totalHeight}px`);
    }
  }, [isOpen, isModalOpen]);

  const rotatingStyle = {
    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.4s",
  };

  return (
    data && (
      <div className="group rounded-lg bg-gray-50 p-6 pb-3">
        <div
          className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
          onClick={onToggle}
        >
          <h2 className="font-medium">Reviews</h2>
          <div style={rotatingStyle}>
            {isOpen ? (
              <AiOutlineMinusCircle className="h-5 w-5 mx-1 text-gray-900" />
            ) : (
              <AiOutlinePlusCircle className="h-5 w-5 mx-1 text-gray-900" />
            )}
          </div>
        </div>

        <div
          className="mt-4 h-fit overflow-hidden duration-500"
          ref={contentRef}
          style={{ height: height }}
        >
          <div className="flex items-center">
            <div className="flex gap-x-4 items-center">
              <AverageRating reviews={data.reviews} />
            </div>

            <p className="text-sm px-2">
              Based on {data.reviews?.length} review
              {data.reviews.length > 1 && "s"}
            </p>
          </div>
          <div
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
            className="mt-4 text-sm w-fit text-[#EF9A9A] border-b-2 border-[#EF9A9A] pb-0.5 cursor-pointer"
          >
            Write a review
          </div>
          {data.reviews.length > 0 && (
            <div className="my-5 ">
              <hr />
            </div>
          )}

          {/* Modal to write product Review */}
          {isModalOpen && (
            <form action="">
              <div ref={modalRef} className="mt-4 space-y-4 text-sm">
                <p className="text-center text-base">Write a review</p>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name">NAME</label>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-400 bg-transparent px-3 py-2 outline-none rounded-sm"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email">EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-400 bg-transparent px-3 py-2 outline-none rounded-sm"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="rating">RATING</label>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>
                        <input
                          type="radio"
                          name="rating"
                          id={`star${star}`}
                          value={star}
                          onChange={() => setRating(star)}
                          checked={rating === star}
                          style={{ display: "none" }}
                        />
                        <label
                          htmlFor={`star${star}`}
                          style={{
                            fontSize: "20px",
                            color: star <= rating ? "#EF9A9A" : "#C0C0C0",
                            cursor: "pointer",
                          }}
                        >
                          <GrStar />
                        </label>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="title">TITLE</label>
                  <input
                    type="text"
                    id="title"
                    className="border border-gray-400 bg-transparent px-3 py-2 outline-none rounded-sm"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="description">REVIEW:</label>
                  <textarea
                    id="description"
                    className="border border-gray-400 bg-transparent px-3 py-2 outline-none rounded-sm"
                  ></textarea>
                </div>

                <div className="w-full text-right">
                  <button
                    //   type="submit"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      console.log("submit review");
                    }}
                    className="text-sm px-8 py-4 border border-black bg-black text-white rounded-sm hover:bg-white hover:text-gray-700"
                  >
                    SUMBIT REVIEW
                  </button>
                </div>
                {data.reviews.length > 0 && (
                  <div className="my-5">
                    <hr />
                  </div>
                )}
              </div>
            </form>
          )}

          {/* showing product reviews  */}
          {data.reviews && (
            <div className=" text-sm">
              {data.reviews.map((review, i) => (
                <div key={i} className="space-y-2 mt-5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <GrStar
                        key={i}
                        color={i < review.rating ? "#EF9A9A" : "#C0C0C0"}
                        size="16px"
                      />
                    ))}
                  </div>
                  <p className="text-base">{review.title}</p>
                  <p>
                    <span className="font-semibold">{review.name}</span> on{" "}
                    <span className="font-semibold">{review.date}</span>
                  </p>
                  <p className="text-xs">{review.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  );
}

export default Reviews;
