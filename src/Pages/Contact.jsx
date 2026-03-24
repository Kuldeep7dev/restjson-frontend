import { useEffect, useRef, useState } from "react";
import Pages from "../Component/Globel/Pages";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  Send,
  User,
  Mail,
  MessageSquare,
  Loader2,
  MapPin,
  Phone,
} from "lucide-react";
import axiosInstance from "../Config/Axiosinstance";



const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);


  useEffect(() => {
    document.title = "Rest JSON | Contact"
  }, [])

  const phoneNumber = '919137706176'
  const openWhatsapp = () => {
    window.open(`https://wa.me/${phoneNumber}`)
  }

  // 🔴 Error Toast
  const errorToast = (msg) =>
    toast.error(msg, {
      position: "top-right",
      duration: 3000,
      style: {
        border: "1px solid #000",
        color: "#000",
        marginTop: "80px",
      },
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },
    });

  // 🟣 Success Toast
  const successToast = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
      duration: 3000,
      style: {
        border: "1px solid #a855f7",
        color: "#a855f7",
        marginTop: "80px",
      },
      iconTheme: {
        primary: "#a855f7",
        secondary: "#fff",
      },
    });

  const sendMail = async (e) => {
    e.preventDefault();
    toast.dismiss();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!contact.name.trim()) return errorToast("Name is required");
    if (!contact.email.trim()) return errorToast("Email is required");
    if (!emailRegex.test(contact.email.trim()))
      return errorToast("Enter a valid email address");
    if (!contact.message.trim()) return errorToast("Message is required");

    try {
      setLoading(true);

      await emailjs.sendForm(
        "service_hwy77b8",
        "template_ggjhq8b",
        formRef.current,
        "X62Ql87Yl52Q90KVe"
      );

      successToast("Message sent! I'll contact you soon");
      setContact({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      errorToast("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePost = async () => {
    try {
      const res = await axiosInstance.post('/contact', contact)
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Pages>
      <div className="flex min-h-[85vh] w-full items-center justify-center bg-gray-50/50 px-4 py-10">
        <div className="flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:flex-row">
          {/* LEFT SECTION */}
          <div className="relative flex w-full flex-col justify-between bg-purple-700 p-8 text-white md:w-5/12 md:p-12">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-1/4 rounded-full bg-purple-600 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 -translate-x-1/4 translate-y-10 rounded-full bg-indigo-600 blur-3xl" />

            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold">Let's chat.</h2>
              <p className="mb-8 text-purple-100">
                Having issues with APIs or applications? Reach out and we’ll
                help you shortly.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600/50">
                    <Mail className="h-5 w-5 text-purple-200" />
                  </div>
                  <a
                    href="mailto:kushallaxkar9@gmail.com"
                    className="text-sm font-medium"
                  >
                    kushallaxkar9@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600/50">
                    <MapPin className="h-5 w-5 text-purple-200" />
                  </div>
                  <span className="text-sm font-medium w-59">
                    Near Civil Hospital, Ahmedabad, Gujarat - 382345
                  </span>
                </div>

                <div className="flex items-center gap-3 cursor-pointer" onClick={openWhatsapp}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600/50">
                    <Phone className="h-5 w-5 text-purple-200" />
                  </div>
                  <span className="text-sm font-medium" >
                    +91 91377-06176
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-10">
              <div className="h-1 w-20 rounded bg-purple-400/50" />
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full bg-white p-8 md:w-7/12 md:p-12">
            <h3 className="mb-6 text-2xl font-bold text-gray-800">
              Send us a message
            </h3>

            <form
              ref={formRef}
              onSubmit={sendMail}
              className="flex flex-col gap-5"
            >
              {/* Name */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-600">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={contact.name}
                    onChange={(e) =>
                      setContact({ ...contact, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-600">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    name="to_email"
                    type="email"
                    placeholder="you@example.com"
                    value={contact.email}
                    onChange={(e) =>
                      setContact({ ...contact, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-600">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                  <textarea
                    name="message"
                    placeholder="How can we help you?"
                    value={contact.message}
                    onChange={(e) =>
                      setContact({ ...contact, message: e.target.value })
                    }
                    className="h-32 w-full resize-none rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                onClick={() => handlePost()}
                className={`mt-2 flex w-full items-center justify-center gap-2 rounded-lg py-3 font-bold text-white shadow-md transition-all ${loading
                  ? "cursor-not-allowed bg-purple-300"
                  : "bg-purple-600 hover:bg-purple-700 active:scale-[0.98]"
                  }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Pages>
  );
};

export default Contact;
