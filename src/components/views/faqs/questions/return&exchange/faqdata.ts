interface QuestionProps {
  id: number;
  question: string;
  answer: string;
}

const faqData: QuestionProps[] = [
  {
    id: 1,
    question: "How do I return an item?",
    answer: "We want you to be completely satisfied with your purchase. Not the perfect fit? Just let us know—we’re happy to help! We offer free shipping on all U.S. returns."
  },
  {
    id: 2,
    question: "What's the return policy?",
    answer: "A return must be requested 30 days of the ship date, after which merchandise must be sent back within 15 days. Merchandise must not be worn, washed, dyed, or altered. Merchandise must be returned in its original packaging. Returns must include the packing slip supplied during return process (packing slip will auto-generate along with the return label). Package should only include items listed in that particular return packing slip. Merchandise that appears to be worn and/or washed and not in its original/sellable condition may result in a delayed refund/exchange, or may not qualify for a refund or exchange. In these cases, the item(s) will be returned to you. Certain items are marked as not refundable and are not eligible for returns (ie. gift cards, gifts with purchase). Sets and Kits are not eligible for partial exchange or return."
  },
  {
    id: 3,
    question: "I am expecting a refund. How long does this take?",
    answer: "Please allow 6-12 business days for us to receive your order. Heads up—it may take up to 10 business days for us to process your return. Once your items have undergone (and passed!) inspection, we will issue your refund to the original form of payment and will notify you of your refund via email. After your refund has been issued by us, please allow 2 additional business days for those funds to be posted to your account. Please note that your refund may only be credited to your original method of payment."
  }
];

export default faqData;
