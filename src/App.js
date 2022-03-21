import React from 'react';

// Importar o theme provider para englobar a aplicação
import ThemeProvider from './context/Theme';
import Container from './Components/Container';

function App() {
  return (
    /** Passar o theme provider por volta de todos os componentes  que
     * podem utilizar o contexto
    **/
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
}

export default App;
