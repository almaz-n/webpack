export default (() => {
  let 
      i = 0,
      text = 'клик';

  const _body = document.getElementById('button');

  const _createButton = () => {
    const _btn = document.createElement('button');
    _btn.innerText = 'Кнопка';
    _btn.id = 'btn';
    _body.appendChild(_btn);
  }

  return {    
    run: () => {      
      _createButton();

      _body.addEventListener('click', (e) => {
        const _target = e.target;

        if(_target.tagName == 'BUTTON') {
          i++;
          if(i !== 1) {
            text = 'клика';
          }
          e.target.innerText = `${i} ${text}`;
        }        
      });
    }
  }
})();
