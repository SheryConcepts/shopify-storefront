interface QuestionProps {
  id: number;
  question: string;
  answer: string;
}

const faqData: QuestionProps[] = [
  {
    id: 1,
    question: "What is the shipping policy?",
    answer: "Once your order is placed, you will receive a confirmation email letting you know that our fulfillment team has received your order. Once your order is fulfilled, you will receive an email notification with your tracking information. Shipping fees are non-refundable in the case of returns.For information about International shipping click here"
  },
  {
    id: 2,
    question: "What shipping providers do you use?",
    answer: "We use FedEx for all U.S. orders. Ground shipping for U.S. orders may take up to 5-9 business days to arrive from the day you receive your shipping confirmation."
  },
  {
    id: 3,
    question: "My package was lost, stolen or damaged?",
    answer: "Oh no! Please file a claim with the shipping carrier first, then contact us letting us know your order number and your specific claim number. Once we receive that, we will work together to come to the best resolution."
  }
];

export default faqData;
