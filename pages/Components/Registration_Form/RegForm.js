import {data} from "autoprefixer";
import Button from "../ui/button";
import Head from "next/head";
import {useState} from "react";
import {useForm} from "react-hook-form";

export default function RegForm() {
  const {
    register,
    handleSubmit,
    formState: {error, isValid},
  } = useForm({mode: "all"});

  const onSubmit = (data) => console.log(data);

  /**Input fiels */
  const Input = ({label, required, type, placeholder}) => (
    <div className="">
      <legend className="py-2  text-teal-700 text-lg">{label}</legend>
      <input
        {...register(label, {required})}
        type={type}
        placeholder={placeholder}
        className="p-3 rounded-md bg-slate-200  w-full border "
      />
    </div>
  );
  /**Group of form 1st */
  const PersonFields = () => (
    <section className="w-full align-top items-start text-left my-24">
      <div className="flex justify-start text-xl text-rose-500 my-4">
        Personal Information
      </div>
      <div className="flex flex-col">
        <Input
          label="Full Name"
          required
          type="text"
          placeholder="Ex: Raj Kumar Rao"
        />
        <Input label="Birthday" required type="date" placeholder="dd/mm/yyyy" />
      </div>
    </section>
  );

  /**Group of form 2nd */
  const ContactFields = () => (
    <section className="w-full align-top items-start text-left my-24">
      <div className="flex justify-start text-xl text-rose-500 my-4">
        <div>Contact </div>
      </div>
      <Input
        label="Email"
        required
        type="email"
        placeholder="example@example.com"
      />
      <Input
        label="Phone"
        required
        type="tel"
        placeholder="(00) 0.0000-00000"
      />
    </section>
  );

  /**Group of form 3rd */
  const AddressFields = () => (
    <section className="w-full align-top items-start text-left my-24">
      <div className="flex justify-start  text-xl text-rose-500 my-4">
        <div>Login Information</div>
      </div>
      <Input label="User Name" required type="text" placeholder="Raj@123" />
      <Input label="Password" required type="text" />
    </section>
  );

  /**Navigation Button */

  const NavigationButton = () => (
    <section className="mt-24 mb-8">
      {step > 0 && (
        <Button
          id="100"
          type="button"
          onClick={() => {
            setStep(step - 1);
          }}
        >
          Back
        </Button>
      )}
      {step === FieldGroups.length - 1 && (
        <Button
          type="submit"
          disabled={!isValid}
          onClick={() => {
            alert("Successfully saved !");
          }}
        >
          Save
        </Button>
      )}
      {step < FieldGroups.length - 1 && (
        <Button
          type="button"
          disabled={!isValid}
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Next
        </Button>
      )}
    </section>
  );

  const [step, setStep] = useState(0);
  const FieldGroups = [
    <PersonFields key={1} />,
    <ContactFields key={2} />,
    <AddressFields key={3} />,
  ];

  return (
    <div>
      <Head>
        <title>Multi Part Input Form | React/Nextjs</title>
        <meta
          name="description"
          content="Generatred by Home Cleaning service"
        />
      </Head>
      <main className="container mx-auto ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col  justify-center  rounded-xl  items-center text-center align-middle"
        >
          <div className=" my-14 border bg-slate-100 rounded-xl p-4 w-1/3 ">
            <div className="bg-teal-400 py-4 mt-14 px-8   rounded-md text-white font-semibold text-xl ">
              User Registration
            </div>
            {FieldGroups[step]}
            <NavigationButton />
          </div>
        </form>
      </main>
    </div>
  );
}
