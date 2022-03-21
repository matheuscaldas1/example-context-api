import React from 'react';

// importo o Hook criado no contexto
import { useTheme, themes } from '../context/Theme';

const Container = () => {
    // Desestruturo o hook pegando os valores e colocando em constantes
    const { theme, setTheme } = useTheme();

    // crio uma div com o style do tema
    return (
        <div style={{
            background: theme.colors.background,
            color: theme.colors.text,
            height: '100vh',
            width: '100vw',
        }}>
            <h1>Hello World</h1>
            
            {/* Hr apenas pra separar os valores */}
            <hr />

            <button onClick={() => setTheme(theme.name === "dark" ? themes[1] : themes[0])}>
                Alterar tema
            </button>
        </div>
    );
}

export default Container;
