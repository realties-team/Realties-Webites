import { useState } from "react";

type Props = {};

const GetNotifiedForm = (props: Props) => {
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
    <form onSubmit={onSubmitHandler} id="getNotified">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 px-2 py-10 mr-5 md:mr-0 ">
        {/* Left */}
        <div className="flex flex-col w-full  ">
          <div className="  flex flex-col space-y-1 ">
            <label
              htmlFor="name"
              className="text-colGray05 font-urbanist font-semibold  "
            >
              Name
            </label>

            <input
              value={name}
              onChange={nameHandler}
              type="text"
              name="name"
              id="name"
              required
              className=" border border-white rounded-md outline-none bg-colBlue04 py-1 text-white "
            />
          </div>

          <div className="flex flex-col space-y-1 n mt-3">
            <label
              htmlFor="email"
              className="text-colGray05 font-urbanist font-semibold  "
            >
              Email
            </label>

            <input
              value={email}
              onChange={emailHandler}
              type="email"
              name="email"
              id="email"
              required
              // pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              // "
              className=" text-white border border-white rounded-md outline-none bg-colBlue04 py-1 "
            />
          </div>
        </div>

        {/* Right */}

        <div className="flex flex-col w-full  ">
          <div className="flex flex-col space-y-1 ">
            <label
              htmlFor="address"
              className="text-colGray05 font-urbanist font-semibold  "
            >
              Address
            </label>

            <input
              value={address}
              onChange={addressHandler}
              type="text"
              name="address"
              id="address"
              required
              className=" text-white border border-white rounded-md outline-none bg-colBlue04 py-1"
            />
          </div>

          <div className="flex flex-col space-y-1 mt-3 ">
            <label
              htmlFor="phoneNumber"
              className="text-colGray05 font-urbanist font-semibold  "
            >
              Phone Number
            </label>

            <input
              value={phoneNumber}
              onChange={phoneNumberHandler}
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              required
              className="text-white border border-white rounded-md outline-none bg-colBlue04 py-1 "
            />
          </div>

          <button
            className="rounded bg-white mt-10 md:mt-5 w-full md:w-4/5  md:ml-10 py-2 text-colBlue04 font-urbanist font-semibold"
            type="submit"
          >
            Get early access
          </button>
        </div>
      </div>
    </form>
  );
};

export default GetNotifiedForm;
