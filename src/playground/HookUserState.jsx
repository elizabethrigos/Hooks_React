import { useState } from "react";

function Contador(){
    const [count, setCount] = useState(0);

    function aumentar() {
        setCount(count+1);
    }

    function disminuir() {
        setCount(count-1);
    }

    return(
        <div>
            <h1>≧▽≦</h1>
            <div className="container text-center">
                <h1>Contador {count} </h1>
                <div className="btn-group gap-3">
                    <button onClick={aumentar} className="btn btn-success"> 
                        Aumentar
                    </button>

                    <button onClick={disminuir} className="btn btn-warning">
                        Disminuir
                    </button>
                </div>
                <hr />
                <a href="/" >homehooks</a>
            </div>
        </div>
    );

}

export default Contador;