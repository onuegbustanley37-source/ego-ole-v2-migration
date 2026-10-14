'use client'
export default function Page(){
 return(
 <div style={{padding:20, textAlign:"center", background:"white", color:"black", minHeight:"100vh"}}>
   <h1 style={{fontWeight:900,marginTop:15,color:'black'}}>RENT YOUR STALL</h1>
   <p style={{color:'#b8960c',fontWeight:'bold',fontSize:22}}>₦2,000 per month</p>
   <div style={{border:'2px solid #d4af37',textAlign:'left',padding:15,borderRadius:10,marginTop:15,color:'black',background:'#fffbeb'}}>
    <b>PAYMENT DETAILS</b><br/>
    Bank: UBA Bank<br/>
    Name: Stanley Onuegbu<br/>
    No: <b>2087484005</b><br/>
    WhatsApp: 08161280254
   </div>
   <a href="https://wa.me/2348161280254?text=Hello%20EGO%20OLE%2C%20I%20paid%20N2000%20to%202087484005" style={{display:'block',background:'#d4af37',padding:16,marginTop:15,borderRadius:10,fontWeight:'bold',color:'black',textDecoration:'none'}}>
    Pay on WhatsApp - Send Receipt
   </a>
   <p style={{fontSize:12,marginTop:10}}>Verification within 24 hours - EGO OLE? Live Market</p>
  </div>
 )
}
