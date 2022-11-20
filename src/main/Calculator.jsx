import React, {Component} from 'react'

import Button from '../components/Button'
import Display from '../components/Display'


const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    /* Esse valor para indicar qual valor vou manipular o 0 ou 1 do array acima */
    current: 0,
}

export default class Calculator extends Component {

    state = {...initialState}
    
    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({operation, current: 1, clearDisplay: true})
        } else {
            const equals = operation === "="
            const currentOperation = this.state.operation

            const values = [... this.state.values]
            try{
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch(e) {
                values[0] = this.state.values[0]
            }
            
            values[1] = 0

            this.setState({displayValue: values[0],
            operation: equals ? null : operation,
            current: equals ? 0 : 1,
            clearDisplay: !equals,
            values
        })
        }
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay: false})

        if (n !== '.') {
            /* Pegar o indice que estou para saber se é o 0 ou 1 */
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            /* como coloquei esse values com mesmo nome da chave
            nao preciso fazer assim para setar o valor
            values: values
            ou 
            values: variavel mudança
            eu ja passando values ele ja vai alterar */
            this.setState({values: values})
            console.log(values)
        }
    }

    
    render() {
        const addDigit = n => this.addDigit(n)
        const setOperation = n => this.setOperation(n)
        
        return(
            <div className="grid w-full h-screen p-32 m-auto bg-gradient-to-r from-slate-400 to-slate-800">
                    <div className="m-auto text-5xl text-white -mb-28">
                        <h1>Calculadora</h1>
                    </div>
                    <div className="grid w-64 m-auto mt-32 overflow-hidden rounded-lg bg-gradient-to-r from-slate-400 to-slate-800 h-80">
                        <div className="grid bg-slate-400 grid-cols-425 grid-rows-48">
                            <Display value={this.state.displayValue}></Display>
                            <Button label="AC" click={(n) => this.clearMemory(n)} triple/>
                            <Button label="/" click={setOperation} operation/>
                            <Button label="7" click={addDigit}/>
                            <Button label="8" click={addDigit}/>
                            <Button label="9" click={addDigit}/>
                            <Button label="*" click={setOperation} operation/>
                            <Button label="4" click={addDigit}/>
                            <Button label="5" click={addDigit}/>
                            <Button label="6" click={addDigit}/>
                            <Button label="-" click={setOperation} operation/>
                            <Button label="1" click={addDigit}/>
                            <Button label="2" click={addDigit}/>
                            <Button label="3" click={addDigit}/>
                            <Button label="+" click={setOperation} operation/>
                            <Button label="0" click={addDigit} double/>
                            <Button label="." click={addDigit}/>
                            <Button label="=" click={setOperation} operation/>
                        </div>
                    </div>
            </div>
                
          
         
        )
    }
}