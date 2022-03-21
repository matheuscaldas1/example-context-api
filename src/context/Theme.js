// primeiro importa as dependências, funções e hooks do react
import React, { createContext, useContext, useState } from "react";

/** Cria um contexto pra sua aplicação (necessário exportar se não for
  criar um hook)
**/
const ThemeContext = createContext();

// Depois cria um array com os temas que serão utilizados
export const themes = [
    {
        name: 'dark',
        colors: {
            background: '#333',
            text: 'white',
        }
    },
    {
        name: 'light',
        colors: {
            background: 'white',
            text: 'black',
        }
    }
]

/**Cria um Provider, que vai englobar todos os filhos que poderão acessar o
 contexto. LEMBRAR DE EXPORTAR NO APP
**/

export default function ThemeProvider({ children }) {

    // Criando o estado já com um valor padrão pra ser usado.

    const [theme, setTheme] = useState(themes[0]);

    // Retorno o provider com os valores e o children dentro

    return(
        <ThemeContext.Provider value={{ theme, setTheme, }}>
            {children}
        </ThemeContext.Provider>
    );
}

/** Com o código acima o contexto ja estaria pronto, porém, uma boa prática
 * é criar um hook do contexto, mantendo o código limpo e fácil de ser
 * utilizado
 */

export function useTheme() {

    // Crio uma variável usando o contexto do tema.
    const context = useContext(ThemeContext);
 
    // Validação para certificar que o hook seja utilizado corretamente
    if (!context) throw new Error('useTheme deve ser utilizado dentro do ThemeProvider');
    
    // Faço desestruturação dos valores do contexto e retorno.
    const { theme, setTheme } = context;
    return { theme, setTheme };
}