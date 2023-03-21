import React from 'react';

function Form() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <form>
          <label>
            Amount Withdraw:
            <input type="text" name="Amount" />
          </label>
          <button type="submit">Submit</button>
        </form>

              </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form>
          <label>
            Amount-Deposit:
            <input type="text" name="Amount" />
          </label>
          <button type="submit">Submit</button>
        </form>
              </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button>Balance</button>
      </div>
    </div>
  );
}

export default Form;
