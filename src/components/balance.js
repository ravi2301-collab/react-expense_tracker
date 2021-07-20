export function Balance({books, balance}){
    
    return(
        <div>
            <h4 className="font">Total Balance</h4>
            <h3 className="display-4">$ { balance } </h3>
        </div>
    );
}
