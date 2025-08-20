import React from 'react'
import './qna.scss'
import QnACard from '../qnaCard/QnACard'

const questions = [
  {
    title: "I'm not sure which treatment is best for my skin. How can I choose?",
    answer: "We offer professional consultations to help recommend the most suitable treatment for your specific skin type and concerns. We encourage you to schedule a consultation so we can assess your needs and guide you."
  },
  {
    title: "I'm not sure which treatment is best for my skin. How can I choose?",
    answer: "We offer professional consultations to help recommend the most suitable treatment for your specific skin type and concerns. We encourage you to schedule a consultation so we can assess your needs and guide you."
  },
  {
    title: "I'm not sure which treatment is best for my skin. How can I choose?",
    answer: "We offer professional consultations to help recommend the most suitable treatment for your specific skin type and concerns. We encourage you to schedule a consultation so we can assess your needs and guide you."
  },
  {
    title: "I'm not sure which treatment is best for my skin. How can I choose?",
    answer: "We offer professional consultations to help recommend the most suitable treatment for your specific skin type and concerns. We encourage you to schedule a consultation so we can assess your needs and guide you."
  },
  {
    title: "I'm not sure which treatment is best for my skin. How can I choose?",
    answer: "We offer professional consultations to help recommend the most suitable treatment for your specific skin type and concerns. We encourage you to schedule a consultation so we can assess your needs and guide you."
  },
  {
    title: "I'm not sure which treatment is best for my skin. How can I choose?",
    answer: "We offer professional consultations to help recommend the most suitable treatment for your specific skin type and concerns. We encourage you to schedule a consultation so we can assess your needs and guide you."
  },
  {
    title: "I'm not sure which treatment is best for my skin. How can I choose?",
    answer: "We offer professional consultations to help recommend the most suitable treatment for your specific skin type and concerns. We encourage you to schedule a consultation so we can assess your needs and guide you."
  },
]

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
            {questions.map((question, ind) => (
              <QnACard key={ind} question={question.title} answer={question.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default QnA
