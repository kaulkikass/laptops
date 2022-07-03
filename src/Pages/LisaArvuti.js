import { useRef, useState } from 'react';

function LisaArvuti() {

    const [message, setMessage] = useState('Lisa arvuti');
    const markRef = useRef();
    const mudelRef = useRef();
    const maksumusRef = useRef();

    const addProduct = () => {
        setMessage('Arvuti lisatud');
        console.log(markRef.current.value);
        localStorage.setItem('mark', markRef.current.value);
        localStorage.setItem('mudel', mudelRef.current.value);
        localStorage.setItem('maksumus', maksumusRef.current.value);

    }

    return ( 
        <div>
            <div>{message}</div>
            <label>Mark</label> <br />
            <input ref={markRef} type="text" /> <br />
            <label>Mudel</label> <br />
            <input ref={mudelRef} type="text" /> <br />
            <label>Maksumus</label> <br />
            <input ref={maksumusRef} type="number" /> <br />
            { message === 'Lisa arvuti' && <button onClick={() => addProduct()}>Sisesta</button>}
        </div>
     );
}

export default LisaArvuti;