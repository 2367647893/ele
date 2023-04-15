import html2canvas from 'html2canvas'

function convertBase64ToBlob (base64, type) {
  console.log(window.atob, 1)
  let bytes = window.atob(base64);
  let ab = new window.ArrayBuffer(bytes.length);
  let ia = new window.Uint8Array(ab);
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new window.Blob([ab], { type: type });
}

// DOM 转 base64
async function htmlTocanvas (el) {
  const canvas = await html2canvas(el)
  return canvas.toDataURL().split(',')[1]
}

// el: DOM节点
// evt: 触发事件
// base64Data: base64 数据
function copyNode (el, base64Data, evt = 'click') {
  console.log(base64Data, 1)
  el.addEventListener(evt, () => {
    try {
       //IE 11 需要有个img标签
      if (document.body.createControlRange) {
        let controlRange;
        // let imgs = document.getElementById('hidImag');
        let imgs = document.createElement('img');
        imgs.onload = function () {
          controlRange = document.body.createControlRange();
          imgs.contentEditable = 'true';
          controlRange.addElement(imgs);
          try {
            let successful = controlRange.execCommand('copy');
            let msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
          } catch (err) {
            console.log(err);
          }
      }
      imgs.src = 'data:image/png;base64,' + base64Data;
    
    //chrome
    } else { 
      const blobInput = convertBase64ToBlob(base64Data, 'image/png');
      const clipboardItemInput = new window.ClipboardItem({ 'image/png': blobInput });
      navigator.clipboard.write([clipboardItemInput]);
      console.log('success');
    }
  } catch (e) {
    console.log(e);
  }
})}

export {
  htmlTocanvas,
  copyNode,
}