import { rocket } from "@/assets";
import Image from "next/image";
import { FormEventHandler, useState } from "react";
import { useForm } from "react-hook-form";

type Props = {};

type FormValues = {
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
};

const EarlyAccessForm = (props: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const addressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const phoneNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // trigger() comes from useForm
    const isValid = await trigger();
    if (!isValid) {
      return;
    }

    try {
      const response = await fetch(
        "https://realties.cyclic.app/api/coming-soon",
        {
          method: "POST",
          body: JSON.stringify({ name, email, address, phoneNumber }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);

      setName("");
      setEmail("");
      setAddress("");
      setPhoneNumber("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="px-10">
        {/* Main Container */}

        <div className="flex flex-col items-center justify-center mt-10 mb-20 px-8 ">
          <h3 className="font-urbanist font-bold text-2xl">
            Be the first to know when
          </h3>
          <h3 className="font-urbanist font-bold text-2xl">we launch...</h3>

          <Image
            src={rocket}
            alt="rocket-image"
            width={100}
            className="mt-6 "
          />

          <form onSubmit={onSubmitHandler}>
            {/* Form Input container */}

            <div className="flex flex-row  gap-8 mt-10 ">
              {/* Left side */}
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-1 ">
                  <label
                    htmlFor="name"
                    className="font-urbanist font-semibold   text-colGray05
                "
                  >
                    Name
                  </label>
                  <input
                    value={name}
                    className="border-colGray04 border rounded outline-none py-1 px-2"
                    type="text"
                    //   placeholder="NAME"
                    {...register("name", {
                      required: true,
                      maxLength: 100,
                    })}
                    onChange={nameHandler}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-600">
                      {errors.name.type === "required" &&
                        "This field is required."}
                      {errors.name.type === "maxLength" &&
                        "Max length is 100 char."}
                    </p>
                  )}
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="email"
                    className="font-urbanist font-semibold   text-colGray05
                "
                  >
                    Email address
                  </label>
                  <input
                    value={email}
                    className="border-colGray04 border rounded outline-none py-1 px-2"
                    type="email"
                    //   placeholder="EMAIL"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    onChange={emailHandler}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-600">
                      {errors.email.type === "required" &&
                        "This field is required."}
                      {errors.email.type === "pattern" &&
                        "Invalid email address."}
                    </p>
                  )}
                </div>
              </div>

              {/* Right side */}

              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="address"
                    className="font-urbanist font-semibold   text-colGray05
                "
                  >
                    Address
                  </label>
                  <input
                    value={address}
                    className="border-colGray04 border rounded outline-none py-1 px-2"
                    type="text"
                    //   placeholder="ADDRESS"
                    {...register("address", {
                      required: true,
                      maxLength: 100,
                    })}
                    onChange={addressHandler}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-600">
                      {errors.name.type === "required" &&
                        "This field is required."}
                      {errors.name.type === "maxLength" &&
                        "Max length is 100 char."}
                    </p>
                  )}
                </div>
                <div className="flex flex-col space-y-1 ">
                  <label
                    htmlFor="phoneNumber"
                    className="font-urbanist font-semibold   text-colGray05
                "
                  >
                    Phone Number
                  </label>
                  <input
                    value={phoneNumber}
                    className="border-colGray04 border rounded outline-none py-1 px-2"
                    type="number"
                    //   placeholder="PHONE NUMBER"
                    {...register("phoneNumber", {
                      required: true,
                      maxLength: 100,
                    })}
                    onChange={phoneNumberHandler}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-600">
                      {errors.name.type === "required" &&
                        "This field is required."}
                      {errors.name.type === "maxLength" &&
                        "Max length is 100 char."}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-colBlue04 rounded-lg text-white px-8 py-3 gap-2 mt-14 flex flex-row font-urbanist font-bold text-lg  justify-center items-center mx-auto "
            >
              Get early access
              <Image
                src={rocket}
                alt="rocketLaunchIcon"
                width={20}
                className="mt-1"
              />{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EarlyAccessForm;
