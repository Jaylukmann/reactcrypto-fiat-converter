    const  appStyle = {
    textAlign: 'center',
    background: 'red',
    border : 'solid  white 2px',
    boxShadow:'2px 2px'
  }

  export default appStyle;

  <p>{this.state.arr1.map((item,index)=>(<this.renderListItem key={item.id} item={item}/>))}</p>