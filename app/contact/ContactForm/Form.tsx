type InputFieldData = {
  id: number;
  title: string;
  placeholderText: string;
};

export default function Form() {
  return (
    <div className="p-[41px] max-sm:p-[24px] border border-[var(--border-color)] rounded-[24px] col-span-3 max-lg:col-span-1">
      <h2 className="font-bold text-2xl tracking-[-0.48px] text-white">Send us a message</h2>
      <span className="mt-[4px] text-sm">We typically reply within a few hours.</span>

      <div className="mt-[32px] grid grid-cols-1 gap-[23px]">
        <div className="grid grid-cols-2 gap-[20px] max-sm:grid-cols-1">
          <InputField title="Your Number" placeholderText="Your Number" />
          <InputField title="Email Address" placeholderText="you@example.com" />
        </div>

        <InputField
          title="Business Name"
          placeholderText="Your business name"
        />
        <InputField
          title="Service Interested In"
          placeholderText="Social media, SEO, branding, ads..."
        />

        {/* it should be textArea */}
        <div>
          <span className="text-sm font-medium text-white">Message</span>
          <textarea
            name="message"
            id="message"
            placeholder="Tell us about your business and your goals..."
            className="mt-[8px] h-[126px] px-[17px] py-[13px] border border-[var(--border-color)] rounded-[16px] text-sm w-full px-[17px] bg-[var(--input-color)]/40 transition-all focus:outline-none focus:border-[var(--primary-color)] focus:ring-[2px] focus:ring-[var(--primary-color)]/30 placeholder:text-[var(--text-color)]"
          />
        </div>

        <button className="py-[14px] text-sm font-semibold text-black rounded-full bg-[var(--primary-color)] flex items-center justify-center gap-[8px]">
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
    </div>
  );
}

type InputFieldDataProps = Omit<InputFieldData, "id">;

function InputField({ title, placeholderText }: InputFieldDataProps) {
  return (
    <div>
      <span className="text-sm font-medium text-white">{title}</span>

      <input
        id={title}
        name={title}
        type="text"
        placeholder={placeholderText}
        className="mt-[10px] border border-[var(--border-color)] rounded-[16px] text-sm h-[48px] w-full px-[17px] bg-[var(--input-color)]/40 text-white transition-all focus:outline-none focus:border-[var(--primary-color)] focus:ring-[2px] focus:ring-[var(--primary-color)]/30 placeholder:text-[var(--muted-text-color)]"
      />
    </div>
  );
}
