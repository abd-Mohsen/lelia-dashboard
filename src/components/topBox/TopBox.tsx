import "./topBox.scss"
import {topSalesmen} from "../../data.ts"

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Salesmen</h1>
      <div className="list">
        {topSalesmen.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">{user.amount} <br /> {user.amount === "1" ? "report" : "reports"}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox