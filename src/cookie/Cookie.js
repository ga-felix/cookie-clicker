import { useState } from 'react';
import './Cookie.css'

function Cookie(props) {

    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function clickCookie() {
        increment()
    }

    return (
        <div id="superCookie">
            <h1>You've clicked {count} times!</h1>,
            <img onClick={clickCookie} onAnimationEnd={console.log("end")} src="/cookie.png" width={props.width} height={props.height} alt="The big cookie" class="center"></img>
        </div>
    );

}

export default Cookie;