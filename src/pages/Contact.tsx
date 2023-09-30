import { NavItems } from "@/constants/NavLinks";
export default function Contact() {
  return (
    <section
      id={NavItems.contact.id}
      className="flex min-h-[90vh] flex-col text-center justify-center items-center">
      <h2>Contact Me</h2>
    </section>
  );
}
