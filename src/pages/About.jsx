function About(){
    return(
      
    
    <div id="about" class="tile is-ancestor" style={{textAlign:'center'}}>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">one</p>
      <p class="subtitle">Deposit amount must be greater than zero</p>
      <p class="subtitle">&& <br/> Deposit amount cannot be greater than 1000 ether</p>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">two</p>
      <p class="subtitle">Withdrawal amount must be greater than zero</p>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">three</p>
      <p class="subtitle">Withdrawal amount cannot be greater than 1 ether</p>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">fourth</p>
      <p class="subtitle">1% fee on withdrawals</p>
      {/* <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div> */}
    </article>
  </div>
</div>
    );

}

export default About;