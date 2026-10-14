"use client"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <>
      <div style={{padding:20, textAlign:"center", background:"white", color:"black"}}>
        <h1 style={{fontWeight:"bold", fontSize:22, marginBottom:20}}>RENT YOUR STALL (N12,500 PER MONTH)</h1>
        
        <div style={{border:"1px solid #ccc", textAlign:"left", padding:20, borderRadius:10, maxWidth:500, margin:"0 auto", background:"white"}}>
          Bank: UBA BANK<br/>
          Account Number: 2087484005<br/>
          WhatsApp: 08161280254<br/><br/>
          
          <a href="https://wa.me/2348161280254?text=Hello%20I%20Want%20To%20Rent%20Stall%20-%20My%20Number%20is%202087484005" style={{display:"block", background:"black", color:"white", textAlign:"center", padding:12, borderRadius:8, textDecoration:"none", fontWeight:"bold"}}>
            Pay on WhatsApp - Send Receipt
          </a>
          <p style={{marginTop:10, fontSize:12, textAlign:"center"}}>We will verify and activate your stall within 24 hours - EGO OLE Team</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
