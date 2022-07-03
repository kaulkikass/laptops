function Avaleht() {

    const viimaneMark = localStorage.getItem("mark");
    const viimaneMudel = localStorage.getItem("mudel");
    const viimaneMaksumus = localStorage.getItem("maksumus");

    return ( 
        <div className="avaleht-text">
            <div>
                Tere
            </div> <br /><br />
            <div>Siin lehel saad sülearvuteid vaadata ja lisada</div>
            <div>{viimaneMark} {viimaneMudel} hinnaga {viimaneMaksumus}</div>
        </div>
     );
}

export default Avaleht;