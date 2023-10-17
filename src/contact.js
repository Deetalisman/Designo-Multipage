import { useFormik } from "formik";
import * as yup from "yup";
import canimg from "./assets/shared/desktop/illustration-canada.svg";
import ausimg from "./assets/shared/desktop/illustration-australia.svg";
import ukimg from "./assets/shared/desktop/illustration-united-kingdom.svg";
function Contact() {
  const onSubmit = (values) => {
    console.log(values);
    console.log("done");
  };

  const basicSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().required("Required"),
    number: yup.number().required("Required"),
    message: yup.string().required("Required"),
  });
  const { values, error, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  return (
    <div>
      <div className="text-center px-5 con py-10 text-white">
        <h1 className="font-bold text-2xl">Contact Us</h1>
        <p className="text-sm mt-3 leading-6">
          Ready to take it to the next level?Let's talk about your project or
          idea and find out how we can help your business grow.If you are
          looking for unique digital experience that's relatable to your users,
          drop us a line.
        </p>
        <form onSubmit={handleSubmit} className=" mt-5">
          <input
            placeholder="Name"
            id="name"
            type="name"
            value={values.name}
            onChange={handleChange}
            className="bg-transparent pl-2 pb-2 rounded-lg mb-5 text-white w-full"
          />
          <input
            placeholder="Email Address"
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="bg-transparent pl-2 pb-2 rounded-lg text-white mb-5 w-full"
          />
          <input
            placeholder="Phone"
            id="phone"
            type="number"
            value={values.phone}
            onChange={handleChange}
            className="bg-transparent pl-2 pb-2 rounded-lg text-white mb-5 w-full"
          />
          <input
            placeholder="Your Message"
            id="message"
            type="message"
            value={values.message}
            onChange={handleChange}
            className="bg-transparent pl-2 pb-2 rounded-lg text-white mb-3 w-full"
          />
          <button
            className="text-red-600 bg-white p-3 px-5 rounded-md font-semibold mt-3"
            type="submit"
            onClick={onSubmit}
          >
            SUBMIT
          </button>
        </form>
      </div>
      <Sublocation />
    </div>
  );
}

function Sublocation() {
  return (
    <div className="mt-14">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <img src={canimg} className="pass" />
        </div>
        <h1 className="col font-bold space text-center mt-5">CANADA</h1>
        <button className="text-white back p-3 px-5 rounded-md font-semibold mt-3">
          <a href="/location">SEE LOCATION</a>
        </button>
      </div>
      <div className="text-center mt-10">
        <div className="flex justify-center items-center">
          <img src={ausimg} className="pass" />
        </div>
        <h1 className="col font-bold space text-center mt-5">AUSTRALIA</h1>
        <button className="text-white back p-3 px-5 rounded-md font-semibold mt-3">
          <a href="/location">SEE LOCATION</a>
        </button>
      </div>
      <div className="text-center mt-10">
        <div className="flex justify-center items-center">
          <img src={ukimg} className="pass" />
        </div>
        <h1 className="col font-bold space text-center mt-5">UNITED KINGDOM</h1>
        <button className="text-white back p-3 px-5 rounded-md font-semibold mt-3">
          <a href="/location">SEE LOCATION</a>
        </button>
      </div>
    </div>
  );
}
export default Contact;
