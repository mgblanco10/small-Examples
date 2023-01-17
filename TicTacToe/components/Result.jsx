function Result(props){
    const result = props.result
    const onPlayAgainClick = props.onPlayAgainClick

    return result && <>
    <p className="result">{result.lenght === 0?'Draw':'Won'}:{result}</p>
    <button classname="buttonPlayAgain"onClick ={onPlayAgainClick}> Play again</button>
    </>
}