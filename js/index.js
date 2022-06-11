    const $form = document.querySelector('#form');
    $form.addEventListener('submit',handleSubmit)
  
  async  function handleSubmit (event) {
  event.preventDefault()
  const status = document.getElementById("my-form-status");
  const form = new FormData(this)
  const response = await fetch(this.action, {
  method: this.method,
  body: form,
  headers: {
    'Accept':'application/json'
  }
  })
  if(response.ok) {
    this.reset()
    alert('Gracias ,Te espero!!') ;
    
  }  else {
            response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
              } else {
                status.innerHTML = "Oops! Hubo un problema con tu confirmación"
              }
            }).catch(error => {
          status.innerHTML = "Oops! Hubo un problema con tu confirmación"
        });
      }
  await    form.addEventListener("submit", handleSubmit)
    } 
  