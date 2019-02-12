  window.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form'),
    elem = form.querySelectorAll('[name^="itemtype"]'),
    output = form.querySelector('output');
    function total()
    {
      output.innerHTML = [].reduce.call( elem, function(sum, el) {
          var n =   (+el.value||0) * (el.checked || el.tagName == "SELECT" || el.type == "text");
          return sum + n
       },0);
    }
    form.addEventListener('change', total);
    form.addEventListener('input', total);
      });
