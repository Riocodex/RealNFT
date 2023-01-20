import React, { useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'

const BackToTop = () => {
  useEffect(() => {
    var mybutton = document.getElementById("back-to-top");
    window.onscroll = function () {
      if (mybutton != null) {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
    };

  })
  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
      id="back-to-top"
      className="back-to-top rounded-pill fs-5"
    >
      <FiArrowUp className="fea icon-sm icons align-middle" />
    </a>
  )
}

export default BackToTop
