interface QuestionProps {
  id: number;
  question: string;
  answer: string;
}

const faqData: QuestionProps[] = [
  {
    id: 1,
    question: " How do you choose what materials to use?",
    answer: "Each piece we create is the product of years of designing, sourcing, and producing with the highest-quality materials and with like-minded production partners. We thoroughly research and vet our raw materials to make sure they meet our standards, are good for you and better for the environment. In addition to thinking about the impact on people and the environment, we consider factors like availability, preferred fiber content, water and energy input, and GHG emissions."
  },
  {
    id: 2,
    question: " Where are your products made?",
    answer: "We like our fabric quality like we like our sleep quality: premium. We source and manufacture our apparel all over the world depending on where we can find the highest quality fabrics and excellent factories that can produce garments to the standards our customers expect. We partner with world-class manufacturers that are committed to fair and equitable practices. The more we grow, and as our manufacturing quantities increase, this will continue to be a priority for us."
  },
  {
    id: 3,
    question: "What are you doing to be more sustainable?",
    answer: "Trust us when we say our sustainability goals are as ambitious as waking up before the alarm. These goals are designed to innovate and better how we design and manufacture, which means that we: thoughtfully consider and care about the materials we source, the production methods we use, how we distribute and our practices at our headquarters and Bedroom locations.In addition to our fabric selection and how we manufacture, we are also doing what we can by minimizing production quantities with demand-oriented ordering to minimize unnecessary waste and unnecessary production. "
  }
];

export default faqData;
