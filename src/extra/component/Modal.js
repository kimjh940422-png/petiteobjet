import React, { useEffect } from 'react'

const Modal = ({onclose, children }) => {

    // 배경에 스크롤이 생기지 않도록 함.
    useEffect(() => {
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = original
        }
    }, []);

  return (
    <div className="modal-bg" onClick={onclose /* onClick={(e) => e.stopPropagation()} */} role='modal'>
        <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
            <button type='button' onClick={onclose}>X</button>
            {children}
        </div>
    </div>
  )
}

export default Modal