import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917622994133?text=Hello!%20I%20have%20an%20inquiry%20regarding%20Allen%20Food%20Ingredients."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span className="whatsapp-tooltip">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
