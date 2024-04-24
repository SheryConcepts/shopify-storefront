import Search from '../questions/search'
import ReturnExchange from '../questions/return&exchange'
import Sustainability from '../questions/sustainability'
import Ordering from '../questions/ordering'
import Shipping from '../questions/shipping'
import { FAQPage } from '@/lib/helpers'
import { hyphenize } from '@/lib/utils'
import QuestionsSection from '../questionsSections'

function FaqsQuestions({
  sections,
}: {
  sections: FAQPage['question_sections']
}) {
  return (
    <div className='flex flex-col flex-1 mx-4'>
      <div>
        <Search />
      </div>

      <div>
        {sections.map((s) => (
          <div key={s.title} className='mb-8' id={hyphenize(s.title)}>
            <QuestionsSection section={s} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FaqsQuestions
