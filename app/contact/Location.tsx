export default function Location() {
  return (
    <section>
      <div className="text-center location__container">
        <span className="font-semibold text-[var(--primary-color)] text-xs tracking-[2.4px] uppercase">find us</span>

            <h2 className="mt-[12px] font-bold text-white text-5xl max-md:text-4xl max-sm:text-3xl leading-[var(--leading-tight)]">Visit our <span className="text-gradient">Thoothukudi studio</span></h2>

        <div className="mt-[40px] aspect-[16/9]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1394.0081027950694!2d78.15529113757718!3d8.800128684514231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03efa0665201b5%3A0xfa86bcc889dc2c25!2s26%2C%20S%20Emperor%20St%2C%20Matha%20Koil%2C%20Thoothukudi%2C%20Tamil%20Nadu%20628001%2C%20India!5e0!3m2!1sen!2s!4v1794422067353!5m2!1sen!2s"
            className="w-full h-full rounded-[16px]"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
