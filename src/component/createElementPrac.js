import React from 'react';

export const createElementPrac = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, createElement!'
);

//위의 코드는 아래와 같은 '리액트 Element'를 만들어내며
// React는 이러한 객체를 읽고 DOM을 구성하고 최신 상태로 유지하는데 사용한다.
// const createElementPrac = {
//     type: 'h1',
//     props: {
//         className: 'greeting',
//         children: 'Hello, React.createElement!'
//     }
// };

