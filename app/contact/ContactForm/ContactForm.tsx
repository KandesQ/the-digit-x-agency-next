import Form from "./Form";
import Links from "./Links";


export default function ContactForm() {
  return (
    <section className="pb-[80px]">
      <div className="grid grid-cols-5 max-lg:grid-cols-1 gap-[24px] contact-form__container">
        <Form />
        <Links />
      </div>
    </section>
  );
}



