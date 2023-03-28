import { ethers } from 'ethers';
import React from 'react';
import { useContract, useSigner } from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../constants'

function Form() {
  
  const [depositInput, setDepositInput] = React.useState('')
  const [withdrawInput, setWithdrawInput] = React.useState('')
  const [balance, setBalance] = React.useState('')

  const [dLoading, setDloading] = React.useState(false)
  const [wLoading, setWloading] = React.useState(false)
 
  const { data: signer, isError, isLoading } = useSigner()
  const contract = useContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    signerOrProvider: signer,
  })

  async function deposit(e) {
    try {
      e.preventDefault();
      console.log('deposit......', depositInput)

      setDloading(true)

      const tx = await contract.deposit({value: ethers.utils.parseEther(depositInput)});
      const hash = await tx.wait();
      console.log("🚀 ~ file: Form.jsx:25 ~ deposit ~ hash:", hash)

      setDepositInput('')
      getBalance()
      setDloading(false)
    } catch (error) {
      console.log("🚀 ~ file: Form.jsx:25 ~ deposit ~ error:", error)
    }

  }

  async function withdraw(e) {
    try {
      e.preventDefault();
      console.log('withdrawing......', withdrawInput)

      setWloading(true)

      const tx = await contract.withdraw(ethers.utils.parseEther(withdrawInput.toString()));
      const hash = await tx.wait();
      console.log("🚀 ~ file: Form.jsx:25 ~ deposit ~ hash:", hash)

      setWithdrawInput('')
      getBalance()
      setWloading(false)
    } catch (error) {
      console.log("🚀 ~ file: Form.jsx:45 ~ withdraw ~ error:", error.data.message)
      
    }

  }

  async function getBalance() {
    try {
      console.log('getting balance......')

      const bal = await contract.getBalance();

      setBalance(ethers.utils.formatEther(bal))
    } catch (error) {
      console.log("🚀 ~ file: Form.jsx:66 ~ getBalance ~ error:", error)
      
    }

  }

  return (
    <div>
    <div style={{paddingBottom:'15px'}}>
      <article class="message is-info"  >
      <div class="message-header" style={{backgroundColor:'#fdd700'}}>
        Did You know?
        <button class="delete"></button>
      </div>
      <div class="message-body" style={{backgroundColor:'white',color:'black'}}>
      Money laundering using crypto refers to the process of concealing the source, ownership, or destination of illegally obtained funds through cryptocurrency transactions. It involves converting illegally obtained funds into cryptocurrencies, using a series of complex transactions to obscure the origin of the funds, and then converting the cryptocurrencies back into fiat currencies to make them appear legitimate.  
      </div>
    </article>
    <div id='save'  style={{ display: 'flex', justifyContent: 'space-between', marginTop: 100 }}>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <form>
          <label></label>
          <input 
          style={{paddingLeft:'15px',borderRadius:'10px',fontSize:'20px',marginRight:'10px'}}
            type="text" 
            name="Amount" 
            value={withdrawInput}
            onChange={e=>setWithdrawInput(e.target.value)}
          />
          <button 
          style={{paddingLeft:'15px',borderRadius:'10px',fontSize:'20px',marginRight:'10px',backgroundColor:'#fdd700'}}
            onClick={(e) => withdraw(e)}
            type="submit"
          >{wLoading ? 'Withdrawing...' : 'Withdraw'}</button>
        </form>
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form>
          <label></label>
          <input 
          style={{paddingLeft:'15px',borderRadius:'10px',fontSize:'20px',marginRight:'10px'}}
            type="text" 
            name="Amount" 
            value={depositInput}
            onChange={e=>setDepositInput(e.target.value)}
          />
          <button
          style={{paddingLeft:'15px',borderRadius:'10px',fontSize:'20px',marginRight:'10px',backgroundColor:'#fdd700'}} 
            onClick={(e) => deposit(e)}
            type="submit"
          >{dLoading ? 'Depositing...' : 'Deposit'}</button>
        </form>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label>{balance}ETH</label>
        <button
        style={{paddingLeft:'15px',borderRadius:'10px',fontSize:'20px',marginRight:'10px',backgroundColor:'#fdd700'}}
          onClick={()=>getBalance()}
        >Balance</button>
      </div>

    </div>
    </div>
    {/* <div class="notification is-danger" >
  <button class="delete"></button>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
</div> */}
    <div class="card">
  <div class="card-content" id='tips'>
    <p class="title">
      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
    </p>
    <p class="subtitle">
      Jeff Atwood
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        View on <a href="#">Twitter</a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        Share on <a href="#">Facebook</a>
      </span>
    </p>
    
  </footer>
  <article class="message is-info"  >
      <div class="message-header" style={{backgroundColor:'#fdd700'}}>
        Did You know?
        <button class="delete"></button>
      </div>
      <div class="message-body" style={{backgroundColor:'white',color:'black'}}>
      Cryptocurrencies are often used for money laundering due to their decentralized and anonymous nature, making it difficult for authorities to trace transactions and identify the parties involved. Moreover, the global nature of cryptocurrencies allows for easy transfer of funds across borders, further complicating law enforcement efforts.
      </div>
    </article>

</div>
    </div>
  );
}

export default Form;
