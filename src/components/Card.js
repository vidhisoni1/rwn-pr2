import React from 'react'
import { useState } from 'react'
import './style.css'


const Card = () => {
  const product = [
    {
      img : 'https://tse1.mm.bing.net/th?id=OIP.glYTJlF69Nxx4CVlZPs4WwHaFj&pid=Api&P=0&h=180',
      price :'$15' 
    },
    {
      img: 'https://tse1.mm.bing.net/th?id=OIP.0vFElmx6Eqfb_6TlmLSlEwHaFj&pid=Api&P=0&h=180',
      price : '$18'

    },
    {
      img: 'https://tse1.mm.bing.net/th?id=OIP.Qgd_Mkr49_UkoQV-pNA5TgHaE7&pid=Api&P=0&h=180',
      price : '$20' 
      
    },
    {
      img : 'https://tse2.explicit.bing.net/th?id=OIP.1y7zG5NlF1L4EQrShdBMLgHaKv&pid=Api&P=0&h=180',
      price : '$2'
      
    },
    {
      img : 'https://tse1.mm.bing.net/th?id=OIP.x5X24tzNea3pokOaMFqPawHaNK&pid=Api&P=0&h=180',
      price : '$6'
    },
    {
      img : 'https://tse1.mm.bing.net/th?id=OIP.UF-o0-S1zs-I8cNFaxWfHQHaEK&pid=Api&P=0&h=180',
      price : '$9'
         },
    {
      img : 'https://tse3.mm.bing.net/th?id=OIP.epXpcIb7sRcMbVDUpZlvKgHaHa&pid=Api&P=0&h=180',
      price : '$15'
     
    },
    {
      img : 'https://tse4.mm.bing.net/th?id=OIP.h6JxqJvREsV5aDdz8_VnMgHaEK&pid=Api&P=0&h=180', 
      price : '$6'
      
    },
    {
      img : 'https://tse4.mm.bing.net/th?id=OIP.h6JxqJvREsV5aDdz8_VnMgHaEK&pid=Api&P=0&h=180',
      price : '$8'
      
    },
    {
      img : 'https://tse3.mm.bing.net/th?id=OIP.LHpSWPO2VtoIp7egIcMA8AHaPL&pid=Api&P=0&h=180',
      price : '$12'
     
    },
    {
      img : 'https://tse1.mm.bing.net/th?id=OIP.5E9pi6QKuu8_gl9YDsUwswHaE-&pid=Api&P=0&h=180',
      price : '$14'
     
    },
    {
      img : 'https://tse1.mm.bing.net/th?id=OIP.UF-o0-S1zs-I8cNFaxWfHQHaEK&pid=Api&P=0&h=180',
      price : '$16'
     
    }




  ]
  const [item, setItem] = useState(product)
  function search(value) {
    const filter = product.filter((elem) => {
      if (elem.name.includes(value)) {
        return elem
      }
    })
    setItem(filter)
  }
  return (
    <>
      
      <div className='row'>
        {
          item.map((elem) => {
            return (
              <div className='col-3 mt-2'>
                
                 <div className=' p-3  border border-dark border-rounded-1'>
                  <img src={elem.img} />
                  <h3 className='mt-4'>{elem.price}</h3>
                  </div>
                
              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default Card