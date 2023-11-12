function Options({ question, dispatch, points, answer }) {
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${answer === index ? 'answer' : ''} ${
            answer !== null
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          key={option}
          disabled={answer !== null}
          onClick={() => dispatch({ type: 'newAnswer', payLoad: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
