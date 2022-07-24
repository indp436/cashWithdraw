import {Component} from 'react'
import './index.css'
import MakeCard from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg">
        <div className="card">
          <div className="name-box">
            <div className="profile-pic">S</div>
            <p className="profile-name">Sarah Williams</p>
          </div>

          <div className="balance-box">
            <p className="your-balance">Your Balance</p>
            <p className="balance">{balance}</p>
          </div>
          <p className="in-rupees">In Rupees</p>
          <h2 className="withdraw">Withdraw</h2>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ul">
            {denominationsList.map(each => (
              <MakeCard key={each.id} value={each.value} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
