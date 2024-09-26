import User from "../../models/user";
import "./topBox.scss"

function TopBox(){

  const topSalesmen1 = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      name: "Elva McDonald",
      email: "elva@gmail.com",
      amount: "10",
    },
  ];

  //TODO: fetch

  const topSalesmen : User[] = [];

  return (
    <div className="topBox">
      <h1>Top Salesmen</h1>
      <div className="list">
        {topSalesmen.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              {/* <img src={user.img} alt="" /> */}
              <div className="userTexts">
                <span className="username">{user.name}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">{user.reports_count} <br /> {user.reports_count === 1 ? "report" : "reports"}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox