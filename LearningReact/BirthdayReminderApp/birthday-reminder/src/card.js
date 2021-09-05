export function Card(props){
  const {name,age,img} = props.data;

  return(
    <div className="cardContainer" style={{display: 'flex', margin: '20px', borderRadius:'5px', width: '90%'}}>
      <img src={img} style={{width:'70px', height:'70px', marginLeft:'5px'}} alt="card" className="cardImage" />
      <p className="cardName" style={{position:'absolute', margin: '20px 80px', fontWeight:'800'}}>{name}</p>
      <p className="cardAge" style={{position:'absolute', margin:'40px 80px', color:'gray'}}>{age}</p>
    </div>
  )
}