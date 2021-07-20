export function Transactions({books, remove}){
    if(books.length === 0){
        return (
        <div className="d-flex h-100  align-items-center justify-content-center"> 
            <p className="text-center lead font-weight-bold mt-4">  There are no transaction</p>
        </div>);
    }
    const type = (value) =>{
        if(value >=0){
            return { bootstrap: 'badge-success', pOrL: 'Revenue'}
        }
        return { bootstrap: 'badge-danger', pOrL: 'Expense'}
    }

    return(
        <div className="history mt-3">
            <h4 className="text-center font text-dark ">Transactions</h4>
                <table className="table transaction">
                    {books.map((item,index) => {
                        return(
                            <tr>
                            <td>{item.particular}</td>
                            <td>${item.amount}</td>
                            <td><span className={`badge ${type(item.amount).bootstrap}`}>{type(item.amount).pOrL }</span></td>
                            <td><button type="button" onClick={()=> {remove(index)} } className="btn btn-circle btn-sm btn-danger">&times; </button></td>
                        </tr>
                        );
                    })}
                       
                </table>
        </div>
    );
}