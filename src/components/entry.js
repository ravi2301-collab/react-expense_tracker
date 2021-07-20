export function Entry({handleChange, record,  handleSubmit}){
    
    return(
        <div>
            <h3 className="font text-primary">Add New Transaction:</h3>
            <form> 
                <div className="row">
                    <div className="col-sm-4 mb-2">
                        <div className="form-group">
                            <label for="amount">Amount</label>
                            <input type="text"  onChange={handleChange} value={record.amount} id="amount" name="amount" className="form-control" placeholder="Amount"/>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-2">
                        <div className="form-group">
                            <label for="item">Particular</label>
                            <input type="text" onChange={handleChange} value={record.particular}  id="particular" name="particular" className="form-control" placeholder="Particular"/>
                        </div>    
                   </div>

                    <div className="col-sm-4 d-flex align-items-end mb-2">
                       <div className="form-group">
                            <button type="button" onClick={handleSubmit} className="btn btn-secondary btn-lg"> Record Transaction</button>
                       </div>
                    </div>
              </div>
            </form>
       </div>
    );
}