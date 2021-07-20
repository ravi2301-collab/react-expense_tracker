export function Status({revenue, expense}){
    return(
        <div>
        <div className="text-white">
            <div className="d-flex status bg-danger flex-column text-center p-3 align-items-center">
                <h3 className="lead">Expense</h3>
                <p> { expense } </p>
            </div>
        </div>
        <div className="text-white ">
            <div className="status d-flex bg-success flex-column text-center p-3 align-items-center">
                <h3 className="lead">Revenue</h3>
                <p> { revenue } </p>
            </div>
        </div>
    </div>
    );
}