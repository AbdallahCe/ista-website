import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1> Cntactez-nous </h1>
      <form>
        <input placeholder="Nom & Prénom" />
        <input placeholder="Adresse Email" />
        <input placeholder="Sujet" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button> Envoyer </button>
      </form>
    </div>
  );
}

export default ContactForm;
