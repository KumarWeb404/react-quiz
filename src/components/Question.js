import Options from './Options';

function Question({ dispatch, question, points, answer }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        dispatch={dispatch}
        answer={answer}
        points={points}
      />
    </div>
  );
}

export default Question;
