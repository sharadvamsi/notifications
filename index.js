const Notification = (props) => {
  
  console.log(props.class)
  return(
      <div className = {class}>
          <p>{content}</p>
      </div>
  )
};

const element = (
    <div>
        <div className="main-con">
            <h1 className="heading">Notifications</h1>
            <div className="notification-con">
                <Notification class = "infobox" content = "Information Message" url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
            </div>
        </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
