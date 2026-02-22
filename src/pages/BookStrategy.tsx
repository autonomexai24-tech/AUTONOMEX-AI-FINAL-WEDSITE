import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface FormState {
    name: string;
    email: string;
    phone: string;
    details: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    details?: string;
}

function validate(fields: FormState): FormErrors {
    const errors: FormErrors = {};

    if (!fields.name.trim()) {
        errors.name = "Name is required.";
    } else if (fields.name.trim().length < 3) {
        errors.name = "Name must be at least 3 characters.";
    }

    if (!fields.email.trim()) {
        errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
        errors.email = "Enter a valid email address.";
    }

    if (!fields.phone.trim()) {
        errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(fields.phone.trim())) {
        errors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!fields.details.trim()) {
        errors.details = "Details are required.";
    } else if (fields.details.trim().length < 10) {
        errors.details = "Details must be at least 10 characters.";
    }

    return errors;
}

export default function BookStrategy() {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        details: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        const updated = { ...form, [name]: value };
        setForm(updated);
        if (touched[name as keyof FormState]) {
            setErrors(validate(updated));
        }
    };

    const handleBlur = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        setErrors(validate(form));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const allTouched: Partial<Record<keyof FormState, boolean>> = {
            name: true,
            email: true,
            phone: true,
            details: true,
        };
        setTouched(allTouched);
        const validationErrors = validate(form);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        const message = `New Strategy Inquiry\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nDetails:\n${form.details}`;

        const whatsappURL = `https://wa.me/917676808950?text=${encodeURIComponent(message)}`;

        setForm({ name: "", email: "", phone: "", details: "" });
        setTouched({});
        setErrors({});

        window.location.href = whatsappURL;
    };

    const fieldClass = (field: keyof FormState) =>
        `w-full px-4 py-3 rounded-xl border text-sm text-slate-800 bg-white outline-none transition-all duration-200 focus:ring-2 ${touched[field] && errors[field]
            ? "border-red-400 focus:ring-red-200"
            : "border-slate-200 focus:ring-blue-100 focus:border-blue-400"
        }`;

    return (
        <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
            <Header />

            <main className="flex-1 flex items-start justify-center px-4 py-24 pt-36">
                <div className="w-full max-w-[600px]">
                    {/* Page title */}
                    <div className="mb-10">
                        <span className="inline-block font-mono text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">
                            Autonomex AI // Strategy
                        </span>
                        <h1 className="font-serif text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight mb-3">
                            Fill the Details
                        </h1>
                        <p className="text-slate-500 text-base leading-relaxed">
                            Share your requirements and we'll reach out via WhatsApp.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide uppercase"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Your full name"
                                className={fieldClass("name")}
                                autoComplete="name"
                            />
                            {touched.name && errors.name && (
                                <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide uppercase"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="you@example.com"
                                className={fieldClass("email")}
                                autoComplete="email"
                            />
                            {touched.email && errors.email && (
                                <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide uppercase"
                            >
                                Phone
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="10-digit mobile number"
                                className={fieldClass("phone")}
                                autoComplete="tel"
                                maxLength={10}
                            />
                            {touched.phone && errors.phone && (
                                <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
                            )}
                        </div>

                        {/* Details */}
                        <div>
                            <label
                                htmlFor="details"
                                className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide uppercase"
                            >
                                Details
                            </label>
                            <textarea
                                id="details"
                                name="details"
                                value={form.details}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Tell us about your business and what you need..."
                                rows={5}
                                className={`${fieldClass("details")} resize-none`}
                            />
                            {touched.details && errors.details && (
                                <p className="mt-1.5 text-xs text-red-500">{errors.details}</p>
                            )}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-[#0B1120] text-white font-semibold text-sm py-4 px-8 rounded-xl hover:bg-slate-800 hover:scale-[1.01] transition-all duration-200 shadow-lg shadow-slate-900/10 mt-2"
                        >
                            Submit via WhatsApp
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
}
