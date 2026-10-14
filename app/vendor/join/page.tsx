'use client'
export default function Page(){
 return(
  <div style={{padding:20,textAlign:'center',background:'white',minHeight:'100vh'}}>
   <img src="/EGO OLE LOGO 1.jpeg" style={{width:130,margin:'0 auto',borderRadius:50}}/>
   <h1 style={{fontWeight:900,marginTop:10}}>RENT YOUR STALL</h1>
   <p style={{color:'#d4af37',fontWeight:'bold',fontSize:20}}>₦2,000 per month</p>
   <div style={{border:'1px solid #d4af37',textAlign:'left',padding:15,borderRadius:10,marginTop:15}}>
    <b>PAYMENT DETAILS</b><br/>
    Bank: UBA Bank<br/>
    Name: Stanley Onuegbu<br/>
    No: <b>2087484005</b><br/>
    WhatsApp: 08161280254
   </div>
   <a href="https://wa.me/2348161280254" style={{display:'block',background:'#d4af37',padding:15,marginTop:15,borderRadius:10,fontWeight:'bold',color:'black',textDecoration:'none'}}>
    Pay on WhatsApp - Send Receipt
   </a>
   <p style={{fontSize:12,marginTop:10}}>Verification within 24 hours</p>
  </div>
 )
}
