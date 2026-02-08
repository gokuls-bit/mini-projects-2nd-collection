// Contact Page - contact.js
export default function Contact() {
  return (
    <section className="p-8 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-orbitron mb-6">Contact Me</h1>
      <p className="mb-2">Email: gokulsant684@gmail.com</p>
      <p className="mb-4">Phone: +91-9518193235</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://github.com/gokuls-bit" target="_blank" className="hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/gokul-kumar-sant" target="_blank" className="hover:underline">LinkedIn</a>
        <a href="https://instagram.com/gokulsantt" target="_blank" className="hover:underline">Instagram</a>
      </div> 
    </section>
  );
}
