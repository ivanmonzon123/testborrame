import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../styles/FormPreinscripcion.css";
import QR from '../images/qr.jpeg'
function BasicExample() {
  return (
    <div className="cont-main-form">
      <Form>
        <h3 className="mb-5">FORMULARIO DE PRE-INSCRIPCION</h3>

        <Form.Group className="mb-3 d-flex " controlId="formBasicNombre">
          <Form.Label className="w-50">Nombre del equipo: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre del equipo"
          />
        </Form.Group>
        <Form.Group className="mb-3 d-flex">
          <Form.Label className="w-50">Categoría: </Form.Label>
          <Form.Select>
            <option>30 años</option>
            <option>35 años</option>
            <option>40 años</option>
            <option>45 años</option>
          </Form.Select>
        </Form.Group>
        <Form.Group  controlId="formFile" className="mb-4 text-center">
          <Form.Label className="w-50">Comprobante de pago: </Form.Label>
          <img src={QR}/>
        </Form.Group>
        <Form.Group  controlId="formFile" className="mb-4 d-flex">
          <Form.Label className="w-50">Subir comprobante: </Form.Label>
          <Form.Control type="file" />
        </Form.Group>

      
        <Form.Group className="d-flex justify-content-evenly">
          <button className="w-25 form-buton-register">
            Cancelar
          </button>
          <button className="w-25 form-buton-register">
            Enviar
          </button>
        </Form.Group>
      </Form>
    </div>
  );
}
console.log(Form.Control.value);
export default BasicExample;
