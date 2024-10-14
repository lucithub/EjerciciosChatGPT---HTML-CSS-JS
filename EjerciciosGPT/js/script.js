/*let txtMail = document.getElementById('txtMail');
let formElements = ['@', '.com'];
let txtName = document.getElementById('txtName');
document.getElementById('btnContact').addEventListener('submit', function(event)
{    
    event.preventDefault();
    if (txtMail == null && txtName == null)
        {
            alert('Debe indicar el nombre y el mail, son obligatorios');
        }
    else if (txtMail == null)
        {
            alert('Debe indicar el mail, es obligatorio');
        }
    else if(txtName == null)
        {
            alert('Debe indicar el nombre, es obligatorio');
        }
    else if (!txtMail.matches(formElements))
        {
            alert('El mail ingresado no es válido');
        }
    else
        {
            alert('Enviado. Muchas gracias por su contacto, ' + txtName);
        }
});
*/
window.onload = function() {
    let txtMail = document.getElementById('txtMail');
    let txtName = document.getElementById('txtName');

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto

        let mailValue = txtMail.value;
        let nameValue = txtName.value;

        if (mailValue === "" && nameValue === "") {
            alert('Debe indicar el nombre y el mail, son obligatorios');
        } else if (mailValue === "") {
            alert('Debe indicar el mail, es obligatorio');
        } else if (nameValue === "") {
            alert('Debe indicar el nombre, es obligatorio');
        } 
        else if (!mailValue.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
            alert('El mail ingresado no es válido');
        } else {
            alert('Enviado. Muchas gracias por su contacto, ' + nameValue);
        }
    });
};


