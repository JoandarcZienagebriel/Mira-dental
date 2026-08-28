
import { motion } from 'framer-motion';

export default function Map() {
  return (
    

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-80 md:h-[20rem] lg:h-[24rem] "
            >
              <iframe
                title="Mira Dental Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.74!3d9.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sMira%20Dental%20Clinic!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            )}