import { useRef, useState } from 'react'
import './styles.css'
import Header from './components/Header'
import FrontMessage from './components/FrontMessage'
import InnerMessage from './components/InnerMessage'

export default function App() {
  /* Challenge

	Kullanıcı kartın kapağına tıkladığında kart açılır ve kapanır, ancak kart şirketi daha sofistike bir kontrol yöntemi istiyor. Kullanıcının mouse ile parmağını kaydırmasını taklit eden bir yöntem. Göreviniz aşağıdaki gibi bir tane ayarlamaktır:
		
		1. "open" class'ı, 34. satırdaki className'i "cover" olan div'e yalnızca aşağıdaki koşulların tümü karşılandığında uygulanmalıdır: 
		   	
			   - Kullanıcı mouse butonunu "cover" div'inin içinde bir yerde basılı tutuyorsa.
			   
    		   - Mouse butonunu basılı tutmaya devam ederken, imleci basılı tutmaya başladığı yerin 50 piksel soluna hareket ettirir. 
		
		2. Kullanıcı daha sonra mouse'unu "cover" div'i açıkken aşağı doğru hareket ettirirse, "open" 
		   class'ı kaldırılmalı ve böylece kart kapatılmalıdır. 
		   
	Not: cardOpen state'ini, 33. satırdaki onClick olay işleyicisini ve 34. satırdaki "open" class'ının şu anda uygulanma şeklini değiştirmeniz veya düzenlemeniz gerekecektir. 
*/

  const [cardOpen, setCardOpen] = useState(false)
  const startX=useRef(0)
  const startY=useRef(0)
  const drag=useRef(false)

  const handleMouseDown=(e)=>{
    startX.current = e.clientX || e.touches[0].clientX
    startY.current = e.clientY || e.touches[0].clientY
    drag.current = true

  }
  
  const handleMouseMove = (e) => {
    if (!drag.current) return
    const clientX = e.clientX || e.touches[0].clientX
    const clientY = e.clientY || e.touches[0].clientY
    const diffX = clientX - startX.current
    const diffY = clientY - startY.current

    if (diffX <= -50 && !cardOpen) {
      setCardOpen(true)
    }
    if (cardOpen && diffY > 20) {
      setCardOpen(false)
    }
  }

  const handleMouseUp = () => {
    drag.current = false
  }
  return (
    <div className='wrapper'>
      <Header />
      <div className='card'>
        <InnerMessage />
        <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
         
          className={`cover ${cardOpen && 'open'}`}
        >
          <FrontMessage />
          <img src='./images/forLoop.png' />
        </div>
      </div>
    </div>
  )
}
