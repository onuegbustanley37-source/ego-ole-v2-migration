'use client'
import { useState, useEffect } from 'react'

export default function AdminUploadPage(){
 const [pw,setPw]=useState('')
 const [ok,setOk]=useState(false)
 const [products,setProducts]=useState<any[]>([])
 const [form,setForm]=useState({name:'',price:'',market:'Onitsha Main Market',category:'Fashion'})

 useEffect(()=>{
  if(localStorage.getItem('isAdmin')==='true') setOk(true)
  const saved = localStorage.getItem('ego-products')
  if(saved) setProducts(JSON.parse(saved))
 },[])

 if(!ok) return(
  <div style={{padding:40,textAlign:'center',background:'black',minHeight:'100vh',color:'white'}}>
   <h1 style={{color:'#d4af37'}}>EGO OLE? ADMIN LOGIN</h1>
   <p>Enter password to access upload area</p>
   <input type="password" value={pw} onChange={e=>setPw(e.target.value)} placeholder="Password" style={{padding:15,width:'90%',borderRadius:10,marginTop:15,color:'black'}}/>
   <br/>
   <button onClick={()=>{
    if(pw==='stanley1991'){localStorage.setItem('isAdmin','true'); setOk(true)}
    else alert('Wrong password! Use stanley1991')
   }} style={{marginTop:20,padding:15,background:'#d4af37',border:'none',borderRadius:10,fontWeight:'bold',width:'90%',color:'black'}}>UNLOCK UPLOAD</button>
   <p style={{marginTop:15,fontSize:12,color:'#d4af37'}}>Password: stanley1991</p>
  </div>
 )

 const handleAdd = ()=>{
  if(!form.name || !form.price) return alert('Enter name and price')
  const newP = {...form, id: Date.now()}
  const updated = [...products, newP]
  setProducts(updated)
  localStorage.setItem('ego-products', JSON.stringify(updated))
  setForm({name:'',price:'',market:'Onitsha Main Market',category:'Fashion'})
  alert('Product Added! ✅')
 }

 return(
  <div style={{padding:20,background:'white',minHeight:'100vh',color:'black'}}>
   <h1 style={{textAlign:'center'}}>✅ Admin Unlocked</h1>
   <p style={{textAlign:'center'}}>Welcome Stanley! Upload products for EGO OLE?</p>
   
   <div style={{maxWidth:500,margin:'20px auto',border:'2px solid #d4af37',padding:20,borderRadius:12}}>
    <h3>Add New Product</h3>
    <input placeholder="Product Name e.g. Lace Fabric" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={{padding:12,width:'100%',marginTop:10,borderRadius:8,border:'1px solid #ccc'}}/>
    <input placeholder="Price e.g. 15000" value={form.price} onChange={e=>setForm({...form,price:e.target.value})} type="number" style={{padding:12,width:'100%',marginTop:10,borderRadius:8,border:'1px solid #ccc'}}/>
    <select value={form.market} onChange={e=>setForm({...form,market:e.target.value})} style={{padding:12,width:'100%',marginTop:10,borderRadius:8}}>
     <option>Onitsha Main Market</option>
     <option>Head Bridge Market</option>
     <option>Ochanja Market</option>
     <option>3-3 Market</option>
    </select>
    <select value={form.category} onChange={e=>setForm({...form,category:e.target.value})} style={{padding:12,width:'100%',marginTop:10,borderRadius:8}}>
     <option>Fashion</option>
     <option>Electronics</option>
     <option>Food</option>
     <option>Building Materials</option>
    </select>
    <button onClick={handleAdd} style={{marginTop:15,padding:15,background:'#d4af37',border:'none',borderRadius:10,fontWeight:'bold',width:'100%',color:'black'}}>ADD PRODUCT</button>
   </div>

   <a href="/" style={{display:'block',background:'black',padding:15,marginTop:20,borderRadius:10,fontWeight:'bold',color:'white',textDecoration:'none',textAlign:'center',maxWidth:500,marginLeft:'auto',marginRight:'auto'}}>Go to Home</a>
   <button onClick={()=>{localStorage.removeItem('isAdmin'); setOk(false)}} style={{display:'block',background:'#eee',padding:10,marginTop:10,borderRadius:10,width:'100%',maxWidth:500,marginLeft:'auto',marginRight:'auto'}}>Logout</button>
  </div>
 )
}
