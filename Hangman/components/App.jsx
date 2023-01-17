class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { view: 'select word', result: null, wordShown: null, counter: 10}
    }

    handleOnChooseWordFormSubmit = event => {
        //event.preventDefault()
        const wordSelected = event.target.input.value
        event.target.reset()
        this.setState({ result: wordSelected, view: 'playing', wordShown: "_".repeat(wordSelected.length) })
    }

    handleOnCharacterForm = event => {
        const charTried = event.target.input.value
        event.target.reset()
        let newWordShown = this.state.wordShown.split('')
        

        // VERIFICO SI EL CARACTER ESTÁ EN EL RESULTADO Y TRANSFORMO LA PALABRA MOSTRADA EN ARRAY
        if (this.state.result.includes(charTried)) {
            
            // LOCALIZO LOS ÍNDICES EN LOS QUE ESTÁ EL CARACTER Y MODIFICO LA PALABRA MOSTRADA EN ESOS ÍNDICES
            for (let i = 0; i < this.state.result.length; i++)
                if (this.state.result[i] === charTried)
                    newWordShown[i] = charTried

            this.setState({ wordShown: newWordShown.join('')})
     
        } else {
            const newCounter = this.state.counter - 1
            this.setState({ counter: newCounter })
            if (newCounter === 0) {
                this.setState({ view: 'gameOver' })
            }
            
        }
        if (this.state.result===newWordShown.join('')){
            this.setState({view: 'win'})
        }      
    }

    handlePlayClick = () => {
        this.setState({view: 'select word', result: null, wordShown: null, counter: 10})
    }
    
    render() {
        return (
            <main>
            
                {this.state.view === "select word" &&
                    <Form placeholder="Enter the word" onSubmit={this.handleOnChooseWordFormSubmit} buttonText="START" />
                }

                {this.state.view === "playing" &&
                    <>
                   
                        <h1 className="wordShown">{this.state.wordShown}</h1>
                        <Form placeholder="Enter the letter" buttonText="TRY" onSubmit={this.handleOnCharacterForm} />
                        <div className="tries">Tries:{this.state.counter}</div>
                    </>
                }
                {this.state.view === "gameOver" &&
                <>
                <h2> Right word: {this.state.result}</h2>
                    <span> Tries remaining: 0 </span>
                    <h2>Game Over</h2>
                    <button onClick={this.handlePlayClick}>TRY AGAIN</button>
                </>
                }
                {this.state.view === "win" &&
                <>
                    <h1>Right word: {this.state.wordShown}</h1>
                    <h2>You won the game</h2>
                    <span>Tries remaining: {this.state.counter} </span> 
                    <button onClick={this.handlePlayClick}>TRY AGAIN</button>
                </>   
                }

            </main>
        )
    }
}



