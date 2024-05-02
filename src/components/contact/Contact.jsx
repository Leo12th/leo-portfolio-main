import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !subjectRef.current.value ||
      !messageRef.current.value
    ) {
      return toast.error("Por favor, conclua o formulario abaixo");
    }
    
    setLoading(true);

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
      to_email: "leonardo.sousza.jr@gmail.com",
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_API
      )
      .then(() => {
        setLoading(false);
        toast.success(`Email enviado com sucesso!`);
      })
      .catch((error) => {
        setLoading(false);
      });
      nameRef.current.value="";
      emailRef.current.value="";
      subjectRef.current.value="";
      messageRef.current.value="";
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Entre em contato</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Vamos coversar</h3>
          <p className="contact__details">
          Não gosta de formularios? Mande um email 👋
          </p>
        </div>

        <form onSubmit={submitHandler} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insira seu nome"
                ref={nameRef}
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insira seu email"
                ref={emailRef}
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insira o assunto"
              ref={subjectRef}
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Escreva sua mensagem"
              ref={messageRef}
            ></textarea>
          </div>

          <button type="submit" class="blob-btn" >
          {loading ? "Enviando..." : "Enviar Menssagem"}
                            <span class="blob-btn__inner">
                            <span class="blob-btn__blobs">
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                            </span>
                            </span>
                        </button>
        </form>
        <ToastContainer position="bottom-right" theme={props.theme} />
      </div>
    </section>
  );
};

export default Contact;
