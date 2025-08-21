import React from 'react'
import './qna.scss'
import QnACard from '../qnaCard/QnACard'
import { Faqs } from '../../constants'

const QnA = () => {

  return (
    <section className='qna-section'>
      <div className="container">
        <div className="qna-wrapper">
          <div className="qna-container-left">
            <p>FAQ</p>
            <h2>Frequently asked questions</h2>
            <p>Not sure about something?<br/> Check our FAQ for quick answers and helpful details.</p>
          </div>
          <div className="question-list">
            {Faqs.map((question, ind) => (
              <QnACard key={ind} question={question.title} answer={question.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default QnA
