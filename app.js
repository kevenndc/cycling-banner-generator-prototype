document.addEventListener('DOMContentLoaded', () => {
  $form = document.getElementById('cy-form')
  //console.log($form)
  $timeInputWrapper = document.getElementById('cy-time-input-wrapper')
  let itemsIndex = 2
  document.getElementById('cy-btn-add-item').addEventListener('click', (e) => {
    e.preventDefault()
    $form.insertBefore(createFormElement(itemsIndex), $timeInputWrapper)
    itemsIndex++
  })

 $form.addEventListener('submit', (e) => {
   console.log('teste')
    e.preventDefault()
    const elementsArray = document.querySelectorAll('#cy-form .cy-input-item')
    const rootID = Math.floor(Math.random() * 1000)
    const timeToChange = document.getElementById('cy-time-input')
    let response = createResponse(rootID, timeToChange.value, elementsArray)
    document.getElementById('cy-response').innerText = response
  })
})

function createResponse(rootID, timeToChange, elementsArray) {
  let response = getScript(rootID, timeToChange)
  const $root = document.createElement('ul')
  $root.style.listStyle = 'none';
  console.log($root.toString())
  $root.setAttribute('id', `cy-root-${rootID}`)

  elementsArray.forEach(node => {
    $root.appendChild(createResponseElement(node))
  })

  $root.firstElementChild.style.display = 'block'

  response += $root.outerHTML.toString()
  console.log(response)
  return response
}

function createResponseElement(node) {
  const $wrapper = document.createElement('li')
  $wrapper.style.display = 'none'
  $wrapper.setAttribute('class', 'cy-element')
  $wrapper.innerHTML = node.value
  return $wrapper
}

function createFormElement(itemID) {
  const labelAttrs = {
    'for' : `cy-item-${itemID}`,
    'class' : 'cy-input-label'
  }
  const inputAttrs = {
    'type' : 'text',
    'id' : `cy-item-${itemID}`,
    'name' : `cy-item-${itemID}`,
    'class' : 'cy-input-item'
  }
  const $formItemWrapper = document.createElement('div')
  const $label = document.createElement('label')
  const $inputField = document.createElement('input')

  $label.innerHTML = 'Item: '
  setAttributes($label, labelAttrs)
  setAttributes($inputField, inputAttrs)

  $formItemWrapper.appendChild($label)
  $formItemWrapper.appendChild($inputField)

  return $formItemWrapper
}

function setAttributes(el, attrs) {
  for(let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}


function getScript(rootID, timeToChange) {

  const response = `<script>document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll('#cy-root-${rootID} .cy-element');let t=e[0],o=document.getElementById('cy-root-${rootID}'),n=0;o&&setInterval(()=>{t.style.display="none",e[n].style.display="block",t=e[n],++n>=e.length&&(n=0)},${timeToChange})});</script>`

  return response
}