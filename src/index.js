import App from './App';
import React from 'react';
// load middlewares
import middlewares from './middlewares';
// relation
import relation from './relations';

import { render } from 'react-dom';

import Mox from 'tinper-mox';
import todos from './models/Todos';
// model
import user from './models/User';

console.log( Mox );

// 直接渲染
Mox.createMoxApp({
    component: App,
    container: '#root',
    models: {
        user,
        todos
    },
    middlewares,
    relation

});
