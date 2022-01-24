document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(document.getElementById('contact-form'));
    const nombre = formData.get('nombre')
    const apellido = formData.get('apellido')
    const email = formData.get('email')
    const nacionalidadIndex = formData.get('nacionalidad')
    const consulta = formData.get('consulta')
    const check = formData.get('check')
    const selectOptions = document.querySelector("select").options;
    const nacionalidadElegida = selectOptions[nacionalidadIndex] ? selectOptions[nacionalidadIndex].text : null 

    if(!nombre  || !apellido || !email   || !nacionalidadElegida  || !consulta || !check)return alert('Por favor completa todos los campos.')

    alert('Formulario enviado!')
})