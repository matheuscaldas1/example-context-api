import React from 'react';

import { useTheme } from '../context/Theme';

const Container = () => {
    const { theme, setTheme } = useTheme();

    return <div>
        <h1>Hello World</h1>
    </div>
}

export default Container;
