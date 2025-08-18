import React, { useState } from 'react'

const App0818c = () => {
    // const txt = 'user';
    const [txt, setTxt] = useState('user');

    return (
        <div>
            <h2>Text Input</h2><hr />
            account: <input type="text" value={txt} onChange={(e) => {
                setTxt(e.target.value);
                console.log(e.target.value);
            }} />
            <button onClick={(e) => {
                alert(`account: ${txt}`)
            }}>confirm & submit</button>
        </div>
    )
}

export default App0818c