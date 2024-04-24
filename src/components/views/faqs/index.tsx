import { FAQPage } from '@/lib/helpers'
import FaqsQuestions from './faq'
import QuestionLinks from './questionlinks'

function FaqsMain({ sections }: { sections: FAQPage['question_sections'] }) {
  const sectionTitles = sections.map((i) => i.title)
  return (
    <div className='flex justify-between items-start mx-4 md:mx-24'>
      <div className='w-1/4 hidden md:block mb-12 sticky top-24 h-full overflow-y-auto pr-4'>
        <QuestionLinks questionsSection={sectionTitles} />
      </div>
      <div className='w-full md:w-3/4 md:pr-12 overflow-y-auto'>
        <FaqsQuestions sections={sections} />
      </div>
    </div>
  )
}

export default FaqsMain
