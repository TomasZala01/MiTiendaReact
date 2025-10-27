import { useState } from "react";

const FAQ = () => {
  const [abierto, setAbierto] = useState(null);

  const toggle = (index) => {
    setAbierto(abierto === index ? null : index);
  };

  const preguntas = [
    {
      pregunta: "¿Hacen envíos a todo el país?",
      respuesta: "Sí, realizamos envíos a todo el territorio nacional mediante correo certificado."
    },
    {
      pregunta: "¿Qué medios de pago aceptan?",
      respuesta: "Aceptamos tarjetas de crédito, débito y transferencias bancarias."
    },
    {
      pregunta: "¿Los productos tienen garantía?",
      respuesta: "Sí, todos nuestros productos cuentan con garantía oficial de 6 meses."
    }
  ];

  return (
    <div className="faq">
      <h2>Preguntas Frecuentes</h2>
      {preguntas.map((item, index) => (
        <div key={index} className="faq-item">
          <button className="faq-pregunta" onClick={() => toggle(index)}>
            {item.pregunta}
          </button>
          {abierto === index && <p className="faq-respuesta">{item.respuesta}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
