interface QuestionProps {
  id: number,
  question: string;
  answer: string;
}

const faqData: QuestionProps[] = [
  {
    id: 1,
    question: "What size should I buy?",
    answer: "If you’re not quite sure which size is right for you, refer to our size guides. They're located underneath the available sizes for each of our products. For any additional questions, contact us. We will ask your typical size and how you like to wear your tops, shorts, and pants so we can suggest the best size for you!"
  },
  {
    id: 2,
    question: "Can I cancel my order?",
    answer: "We completely get it, we change our minds too! While we wish could, once an order is placed, we are unable to alter or cancel it at this time. We hope to have a cancellation window one day in the future."
  },
  {
    id: 3,
    question: "What if I want to speak to someone?",
    answer: "We want to speak to you too! Contact us with any questions, concerns, or feedback. We will be sure to get back to you within 48 hours. However, please note that inquiries sent on Fridays will receive a reply the following Monday, but possibly sooner."
  }
];

export default faqData;
