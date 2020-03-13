document.addEventListener('DOMContentLoaded', () => {

  const elArray = document.querySelectorAll('.cy-ad-root .cy-ad-element')
  let actualEl = elArray[0]

  let root = document.querySelector('cy-ad-root')
  let index = 0

  if (root) {
    setInterval(() => {
      actualEl.style.display = 'none'
      elArray[index].style.display = 'block'
      actualEl = elArray[index]
      index++
    
      if (index >= elArray.length) index = 0
    }, 2000)
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const elArray = document.querySelectorAll(`#cy-root-${rootID} .cy-element`)
  let actualEl = elArray[0]

  let root = document.getElementById(`cy-root-${rootID}`)
  let index = 0

  if (root) {
    setInterval(() => {
      actualEl.style.display = 'none'
      elArray[index].style.display = 'block'
      actualEl = elArray[index]
      index++
    
      if (index >= elArray.length) index = 0
    }, timeToChange)
  }
})

function getScript(rootID, elementClass) {
  /*
  document.addEventListener('DOMContentLoaded', () => {
    const elArray = document.querySelectorAll(`#${rootID} .${elementClass}`)
    let actualEl = elArray[0]
  
    let root = document.getElementById(rootID)
    let index = 0
  
    if (root) {
      setInterval(() => {
        actualEl.style.display = 'none'
        elArray[index].style.display = 'block'
        actualEl = elArray[index]
        index++
      
        if (index >= elArray.length) index = 0
      }, 2000)
    }
  })
  */

  const response = `document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(#${rootID} .${elementClass});let t=e[0],l=document.getElementById(rootID),n=0;l&&setInterval(()=>{t.style.display="none",e[n].style.display="block",t=e[n],++n>=e.length&&(n=0)},2e3)});`

  return response
}





