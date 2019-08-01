// foo.js = dedicated component to web 
import React from 'react';

import Title from '../Title';
import * as COMMON from '../../common/example.js';

export default () =>
    <div className="container">
        <Title/>
		<button type="button" onClick={COMMON.function1}>Click a Button !</button>
    </div>;