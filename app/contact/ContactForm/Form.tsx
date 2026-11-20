"use client";

export default function Form() {
  const handleSubmition = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const number = formData.get("client-number")?.toString() ?? "";
    const clientEmail = formData.get("client-email")?.toString() ?? "";
    const businessName = formData.get("client-business-name")?.toString() ?? "";
    const desiredService =
      formData.get("client-desired-service")?.toString() ?? "";
    const message = formData.get("client-message")?.toString() ?? "";

    const recipient = "digitx77@gmail.com";

    const subject = `New inquiry from ${businessName}`;

    const emailMessage = `
    New Form Submission

    Number: ${number}
    Email: ${clientEmail}
    Business name: ${businessName}
    Desired service: ${desiredService}

    Message:
    ${message}
    `;

    const emailUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailMessage)}`;

    window.location.assign(emailUrl);
  };

  return (
    <form
      onSubmit={handleSubmition}
      className="p-[41px] max-sm:p-[24px] border border-[var(--border-color)] rounded-[24px] col-span-3 max-lg:col-span-1"
    >
      <h2 className="font-bold text-2xl tracking-[-0.48px] text-white">
        Send us a message
      </h2>
      <span className="mt-[4px] text-sm">
        We typically reply within a few hours.
      </span>

      <div className="mt-[32px] grid grid-cols-1 gap-[23px]">
        <div className="grid grid-cols-2 gap-[20px] max-sm:grid-cols-1">
          <InputField
            name="client-number"
            title="Your Number"
            type="tel"
            placeholderText="Your Number"
          />
          <InputField
            name="client-email"
            title="Email Address"
            type="email"
            placeholderText="you@example.com"
          />
        </div>

        <InputField
          name="client-business-name"
          title="Business Name"
          type="text"
          placeholderText="Your business name"
        />
        <InputField
          name="client-desired-service"
          title="Service Interested In"
          type="text"
          placeholderText="Social media, SEO, branding, ads..."
        />

        {/* it should be textArea */}
        <div>
          <span className="text-sm font-medium text-white">Message</span>
          <textarea
            name="client-message"
            id="message"
            placeholder="Tell us about your business and your goals..."
            className="mt-[8px] h-[126px] px-[17px] py-[13px] border border-[var(--border-color)] rounded-[16px] text-sm text-white w-full px-[17px] bg-[var(--input-color)]/40 transition-all focus:outline-none focus:border-[var(--primary-color)] focus:ring-[2px] focus:ring-[var(--primary-color)]/30 placeholder:text-[var(--text-color)]"
          />
        </div>

        <button
          type="submit"
          className="py-[14px] cursor-pointer text-sm font-semibold text-black rounded-full bg-[var(--primary-color)] flex items-center justify-center gap-[8px] transition-all hover:shadow-[var(--shadow-glow)]"
        >
          Send message
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
            <path d="m21.854 2.147-10.94 10.939"></path>
          </svg>
        </button>
      </div>
    </form>
  );
}

type InputFieldDataProps = {
  title: string;
  placeholderText: string;
  name: string;
  type?: string;
};

function InputField({
  title,
  name,
  placeholderText,
  type = "text",
}: InputFieldDataProps) {
  return (
    <div>
      <span className="text-sm font-medium text-white">{title}</span>

      <input
        required
        id={title}
        name={name}
        type={type}
        placeholder={placeholderText}
        className="mt-[10px] border border-[var(--border-color)] rounded-[16px] text-sm h-[48px] w-full px-[17px] bg-[var(--input-color)]/40 text-white transition-all focus:outline-none focus:border-[var(--primary-color)] focus:ring-[2px] focus:ring-[var(--primary-color)]/30 placeholder:text-[var(--muted-text-color)]"
      />
    </div>
  );
}
