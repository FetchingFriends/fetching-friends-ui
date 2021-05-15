export default function renderQuestion(reRenderH1, questions) {
  if (reRenderH1 === 'name') {
    return (
      <>
        <h1 className='fade-in'>{questions[0].question}</h1>
        <input type='text' className='text-input'></input>
      </>
    )
  } else if (reRenderH1 === 'age') {
    return (
      <>
        <h1 className='fade'>{questions[1].question}</h1>
        <input type='number' className='numInput'></input>
      </>
    )
  }
}