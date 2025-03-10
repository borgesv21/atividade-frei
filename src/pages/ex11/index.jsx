import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'

export default function E11() {
    const [valor, setValor] = useState(0);
    const [tabuadas, setTabuadas] = useState([]);

    function calcularTabuada() {
        let tabuada = []
       
        for (let i = 1; i <= 10; i++) {
            tabuada.push(`${valor} x ${i} = ${valor * i}`)
        }

        // Cada posição do array deve ser uma string "A x B = X"
        
        // Dica:
        // tabuada.push

        setTabuadas(tabuada)
    }

    return (
        <div className='pagina-e11'>
            <div className='cabecalho'>
                <div className='titulo'>
                    <img src='/logo.png' alt='logo'/>
                    <h1>
                        React FreiS
                    </h1>
                </div>
                <div className='links'>
                    <Link to='/' className='link'>Inicio</Link>
                    <Link to='/sobre' className='link'>Sobre</Link>
                </div>
            </div>
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 11 - Tabuada</h2>
                    </div>
                    <div className='faixa roxa'/>
                </div>
                <div className='descricao'>
                    <p>Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.</p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Tabuada do:</label>
                            <input placeholder='0' onChange={e => setValor(e.target.value)} />
                        </div>
                        
                        <button className='executar' onClick={calcularTabuada}>Executar</button>
                    </div>
                    
                    <div className='resultados'>
                        {tabuadas.map((tabuadas, index) => 
                            <h3 key={index} className='resultado'>
                                {tabuadas}
                            </h3>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
